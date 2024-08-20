import { Stack, Button, Col } from "react-bootstrap";
import { Collateral, BSD } from "../Token";
import btc from "../../assets/svg/BTC.svg";
import bsd from "../../assets/svg/BSD.svg";
import switchIcon from "../../assets/svg/switch.svg";
import { useState } from "react";

export const Redeem = (props) => {
  const [btcAmount, setBTcAmount] = useState(1);
  const [bsdAmount, setBsdAmount] = useState(1);
  console.log("Connected:", props.connected);
  console.log("Props in Redeem:", props);

  return (
    <Stack
      direction="vertical"
      className="d-flex align-items-center justify-content-center w-100"
    >
      <Col sm={12} md={7} className=" w-100 p-0">
        <BSD icon={bsd} action="redeem" />
      </Col>

      <img
        src={switchIcon}
        style={{ width: "0.85rem" }}
        className="pointer gray-hover mxy10"
      />

      <Col sm={12} md={7} className=" w-100 p-0">
        <Collateral icon={btc} action="redeem" />
      </Col>

      <Col sm={12} md={7} className="mt-4 w-100 p-0">
        <Button
          className="sButton w-100 py-2"
          onClick={() => {
            if (!props.connected) {
              props.connectWallet();
            } else {
              // todo borrow
            }
          }}
          disabled={!btcAmount}
        >
          {props.connected ? "Redeem" : "Connect Wallet"}
        </Button>
      </Col>
    </Stack>
  );
};
