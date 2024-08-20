import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Nav,
  Navbar,
  ButtonToolbar,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import btc from "../assets/svg/btc.svg";
import bsd from "../assets/svg/bsd.svg";

import { Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <Navbar expand="md" className="expand-md navbar-light bg-light">
      <Navbar.Brand
        className="d-flex justify-content-between align-items-center"
        href="/"
      >
        <img src={bsd} />
        <strong className="d-none d-sm-block b18 ms-2">BitStable</strong>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls={`navmenu`} /> */}
      {/* <Navbar.Collapse id={`navmenu`}> */}
      <Nav className="m-auto">
        {/* <Nav.Link as={Link} to="/borrow" className="me-3 nav-link-gray">
            Borrow
          </Nav.Link>
          <Nav.Link as={Link} to="/repay" className="mx-3 nav-link-gray">
            Repay
          </Nav.Link> */}
        <Nav.Link as={Link} to="/stats" className="ms-3 nav-link-gray b16">
          Stats
        </Nav.Link>
      </Nav>
      {/* </Navbar.Collapse> */}

      <ButtonToolbar>
        <ButtonGroup className="d-none d-sm-block h-100">
          <Dropdown>
            <Dropdown.Toggle
              className="button2 focus-ring focus-ring-light bg-primary border-0 d-flex align-items-center justify-content-center"
              style={{ height: 34 }}
            >
              <img src={btc} style={{ width: 20 }} />
              <span className="ms-1">{props.network}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item /*href="#/action-1"*/>
                <Button
                  className="button2 focus-ring focus-ring-light bg-primary border-0 d-flex align-items-center justify-content-center"
                  style={{ height: 34 }}
                >
                  <img src={btc} style={{ width: 20 }} />
                  <span className=" ms-1 ">{props.network}</span>
                </Button>
              </Dropdown.Item>
              <Dropdown.Item /*href="#/action-1"*/>
                <Button
                  className="button2 focus-ring focus-ring-light bg-primary border-0 d-flex align-items-center justify-content-center"
                  style={{ height: 34 }}
                >
                  <img src={btc} style={{ width: 20 }} />
                  <span className=" ms-1 ">{props.network}</span>
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>

        {/*  dropdown for xm screens */}
        <Dropdown className="d-sm-none d-block">
          <Dropdown.Toggle
            className=" d-sm-none d-block button2 focus-ring focus-ring-light bg-primary d-flex align-items-center justify-content-center"
            style={{ height: 34 }}
          >
            <img src={btc} style={{ width: 20 }} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item /*href="#/action-1"*/>
              <Button
                className="button2 focus-ring focus-ring-light bg-primary border-0 d-flex align-items-center justify-content-center"
                style={{ height: 34 }}
              >
                <img src={btc} style={{ width: 20 }} />
                <span className=" ms-1 ">{props.network}</span>
              </Button>
            </Dropdown.Item>
            <Dropdown.Item /*href="#/action-1"*/>
              <Button
                className="button2 focus-ring focus-ring-light bg-primary border-0 d-flex align-items-center justify-content-center"
                style={{ height: 34 }}
              >
                <img src={btc} style={{ width: 20 }} />
                <span className=" ms-1 ">{props.network}</span>
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup className="ms-2">
          <Button
            className="button2 focus-ring focus-ring-light bg-primary border-0 d-flex align-items-center justify-content-center"
            style={{ height: 34 }}
            onClick={props.connected ? "Disconnect" : props.connectWallet()}
          >
            {props.connected
              ? props.address.slice(0, 6) + "..." + props.address.slice(58)
              : "Connect"}
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Navbar>
  );
};
