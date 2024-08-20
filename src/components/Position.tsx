import { Button, Container, Table } from "react-bootstrap";
import { ClosePosition } from "./modal";
import { useState } from "react";
// import "./pool.scss";
// import { useState } from "react";

export const Position = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <Container className="p-0 m-0">
      <ClosePosition show={showModal} handleClose={handleClose} />
      <Table className="table-borderless table-no-lines table-hover mt-4 mx-0 p-0">
        <thead>
          <tr>
            <th className="r14">Collateral(₿)</th>
            <th className="r14">Debt($)</th>
            <th className="text-end  r14">Health status</th>
            <th className="text-end  r14">Action</th>
          </tr>
        </thead>
        <tbody className="r16">
          <tr>
            <td>
              $600,093.45<span className="r14">₿10.087834</span>
            </td>
            <td>$200,000</td>
            <td className="text-end">1.5</td>
            <td className="text-end">
              <Button
                className="button2 focus-ring focus-ring-light bg-primary"
                onClick={() => {
                  props.connected
                    ? setShowModal(true)
                    : alert("Please connect wallet");
                }}
              >
                {props.connected ? "Close Position" : "Connect Wallet"}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
