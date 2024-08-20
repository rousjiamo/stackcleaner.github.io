import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TokenButton } from "./TokenButton";

export const Collateral = (props) => {
  return (
    <Card
      className="bg-light border border-primary p20"
      style={{ height: "6.25rem", borderRadius: "2px" }}
    >
      <div className="d-flex justify-content-between line-height-20 w-100">
        <span className="text-gray r14">
          {props.action == "borrow" && "Pay Collateral"}
          {props.action == "repay" && "Receive Collateral"}
          {props.action == "redeem" && "Receive"}
        </span>
        <span className="text-gray r14">
          Balance: <span className="r14 text-primary">1.50987</span>
        </span>
      </div>
      <Form className="d-flex justify-content-between align-items-center w-100 ">
        <TokenButton icon={props.icon} token="BTC" />
        <input
          type="number"
          placeholder="0"
          className="w-100 m24 focus-ring focus-ring-light border-0 text-end input-height "
          // value={value}
          // onChange={onChange}
          onWheel={(e) => e.currentTarget.blur()} // disables scrolling
        />
      </Form>
    </Card>
  );
};

export const BSD = (props) => {
  return (
    <Card
      className="bg-light border border-primary p20"
      style={{ height: "6.25rem", borderRadius: "2px" }}
    >
      <div className="d-flex justify-content-between line-height-20">
        <span className="text-gray r14">
          {props.action == "borrow" && "Receive BSD"}
          {props.action == "repay" && "Pay BSD"}
          {props.action == "redeem" && "Pay BSD"}
        </span>
        <span className="text-gray r14">
          Balance: <span className="r14 text-primary">1.50987</span>
        </span>
      </div>
      <Form className="d-flex justify-content-between align-items-center">
        <TokenButton icon={props.icon} token="BSD" />
        <input
          type="number"
          placeholder="0"
          className="w-100 m24 focus-ring focus-ring-light border-0 text-end input-height "
          onWheel={(e) => e.currentTarget.blur()} // This line disables scrolling
        />
      </Form>
    </Card>
  );
};
