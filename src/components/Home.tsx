// import { Button, Col, Container, Row } from "react-bootstrap";
// import { Data } from "./Data";
// import { useState } from "react";
// import { Borrow } from "./actions/Borrow";
// import { Repay } from "./actions/Repay"; // Ensure these components are imported correctly
// import { Redeem } from "./actions/Redeem";
// import { Position } from "./Position";

// export const Home = (props) => {
//   const [btcAmount, setBTcAmount] = useState(1);
//   const [bsdAmount, setBsdAmount] = useState(1);

//   const [bsdSupply, setBsdSupply] = useState(20);
//   const [btcLocked, setBtcLocked] = useState(60);

//   const [action, setAction] = useState("borrow");

//   const handleButtonClick = (actionType) => {
//     setAction(actionType);
//   };

//   return (
//     <Container>
//       <Row className="w-100 d-flex justify-content-between align-items-stretch m-0 p-0">
//         <Col xs={12} md={6} className="d-none d-md-flex p-0 m-0">
//           <Data action={action} bsdSupply={bsdSupply} btcLocked={btcLocked} />
//         </Col>

//         <Col sm={12} md={5} className="border border-primary py-3">
//           <Container>
//             <Container className="d-flex justify-content-between p-0 pb-3">
//               <Button
//                 className={`button1 ${
//                   action === "borrow" ? "btn-primary" : "bg-light"
//                 }`}
//                 onClick={() => handleButtonClick("borrow")}
//               >
//                 Borrow
//               </Button>
//               <Button
//                 className={`button1 ${
//                   action === "repay" ? "btn-primary" : "bg-light"
//                 }`}
//                 onClick={() => handleButtonClick("repay")}
//               >
//                 Repay
//               </Button>
//               <Button
//                 className={`button1 ${
//                   action === "redeem" ? "btn-primary" : "bg-light"
//                 }`}
//                 onClick={() => handleButtonClick("redeem")}
//               >
//                 Redeem
//               </Button>
//             </Container>
//             {action === "borrow" && <Borrow />}
//             {action === "repay" && <Repay />}
//             {action === "redeem" && <Redeem />}
//           </Container>
//         </Col>

//         <Col
//           sm={12}
//           md={6}
//           className="d-md-none d-block d-flex p-0 mt-4 custom-col-height"
//         >
//           <Data action={action} bsdSupply={bsdSupply} btcLocked={btcLocked} />
//         </Col>
//       </Row>
//       <Position connected={props.connected} />
//     </Container>
//   );
// };

import { Button, Col, Container, Row } from "react-bootstrap";
import { Data } from "./Data";
import { useState } from "react";
import { Borrow } from "./actions/Borrow";
import { Repay } from "./actions/Repay";
import { Redeem } from "./actions/Redeem";
import { Position } from "./Position";

export const Home = (props) => {
  const [action, setAction] = useState("borrow");

  const handleButtonClick = (actionType) => {
    setAction(actionType);
  };

  return (
    <Container className="m-0 p-0">
      <Row className="w-100 d-flex justify-content-between align-items-stretch m-0 p-0">
        <Col xs={12} md={6} className="d-none d-md-flex p-0 m-0">
          <Data action={action} bsdSupply={20} btcLocked={60} />
        </Col>

        <Col sm={12} md={5} className="border border-primary py-3">
          <Container>
            <Container className="d-flex justify-content-between p-0 pb-3">
              <Button
                className={`button1 ${action === "borrow" ? "active" : ""}`}
                onClick={() => handleButtonClick("borrow")}
              >
                Borrow
              </Button>
              <Button
                className={`button1 ${action === "repay" ? "active" : ""}`}
                onClick={() => handleButtonClick("repay")}
              >
                Repay
              </Button>
              <Button
                className={`button1 ${action === "redeem" ? "active" : ""}`}
                onClick={() => handleButtonClick("redeem")}
              >
                Redeem
              </Button>
            </Container>
            {action === "borrow" && <Borrow />}
            {action === "repay" && <Repay />}
            {action === "redeem" && <Redeem />}
          </Container>
        </Col>

        <Col
          sm={12}
          md={6}
          className="d-md-none d-block d-flex p-0 mt-4 custom-col-height"
        >
          <Data action={action} bsdSupply={20} btcLocked={60} />
        </Col>
      </Row>
      <Position connected={props.connected} />
    </Container>
  );
};
