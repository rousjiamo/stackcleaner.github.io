import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./global.scss";
import "./breakpoints.scss";

import { Header } from "./components/Header";
import { useState, useRef, useEffect } from "react";
import { Borrow } from "./components/actions/Borrow";
import { Repay } from "./components/actions/Repay";
import { Redeem } from "./components/actions/Redeem";
import { Home } from "./components/Home";

export default function App() {
  // Wallet
  const [unisatInstalled, setUnisatInstalled] = useState(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [publicKey, setPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: 0,
  });
  const [network, setNetwork] = useState("livenet");

  const getBasicInfo = async () => {
    const unisat = (window as any).unisat;
    const [address] = await unisat.getAccounts();
    setAddress(address);

    const publicKey = await unisat.getPublicKey();
    setPublicKey(publicKey);

    const balance = await unisat.getBalance();
    setBalance(balance);

    const network = await unisat.getNetwork();
    setNetwork(network);

    // const chain = await unisat.getChain();
    // console.log(chain);
  };

  const selfRef = useRef<{ accounts: string[] }>({
    accounts: [],
  });
  const self = selfRef.current;
  const handleAccountsChanged = (_accounts: string[]) => {
    if (self.accounts[0] === _accounts[0]) {
      // prevent from triggering twice
      return;
    }
    self.accounts = _accounts;
    if (_accounts.length > 0) {
      setAccounts(_accounts);
      setConnected(true);

      setAddress(_accounts[0]);

      getBasicInfo();
    } else {
      setConnected(false);
    }
  };

  // console.log(connected);

  const handleNetworkChanged = (network: string) => {
    setNetwork(network);
    getBasicInfo();
  };

  useEffect(() => {
    async function checkUnisat() {
      let unisat = (window as any).unisat;

      for (let i = 1; i < 10 && !unisat; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100 * i));
        unisat = (window as any).unisat;
      }

      if (unisat) {
        setUnisatInstalled(true);
      } else if (!unisat) return;

      unisat.getAccounts().then((accounts: string[]) => {
        handleAccountsChanged(accounts);
      });

      unisat.on("accountsChanged", handleAccountsChanged);
      unisat.on("networkChanged", handleNetworkChanged);

      return () => {
        unisat.removeListener("accountsChanged", handleAccountsChanged);
        unisat.removeListener("networkChanged", handleNetworkChanged);
      };
    }

    checkUnisat().then();
  }, []);

  if (!unisatInstalled) {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Button
              onClick={() => {
                window.location.href = "https://unisat.io";
              }}
            >
              Install Unisat Wallet
            </Button>
          </div>
        </header>
      </div>
    );
  }
  const unisat = (window as any).unisat;

  async function connectWallet() {
    const result = await unisat.requestAccounts();
    handleAccountsChanged(result);
    return true;
  }

  const switchNetwork = async (e) => {
    const network = await unisat.switchNetwork(e.target.value);
    setNetwork(network);
  };

  return (
    <Container className="mt-0 mb-5">
      <Router>
        <Header
          connected={connected}
          // chain={chain}
          network={network}
          address={address}
          connectWallet={connectWallet}
        />

        <Container className="mt-4 mx-0 p-0">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/stats" element={<Navigate to="/stats" />} />
            <Route
              path="/home"
              element={
                <Home connected={connected} connectWallet={connectWallet} />
              }
            />
            <Route
              path="/borrow"
              element={
                <Borrow connected={connected} connectWallet={connectWallet} />
              }
            />

            <Route
              path="/repay"
              element={
                <Repay connected={connected} connectWallet={connectWallet} />
              }
            />
            <Route
              path="/redeem"
              element={
                <Redeem connected={connected} connectWallet={connectWallet} />
              }
            />
          </Routes>
        </Container>
      </Router>
    </Container>
  );
}
