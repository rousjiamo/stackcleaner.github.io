import { Row, Col, Stack } from "react-bootstrap";

export const Data = (props) => {
  const total = props.btcLocked + props.bsdSupply;
  const bsdSupplyHeight = (props.bsdSupply / total) * 100;
  const btcLockedHeight = (props.btcLocked / total) * 100;

  return (
    <Row className="d-flex justify-content-center align-items-center m-0 p-0">
      <Col
        sm={12}
        className="bsd d-flex justify-content-center align-items-center m-0 px-0"
        style={{
          // border: "1px solid #D2D2D2",
          height: `${bsdSupplyHeight}%`,
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <span className="mx-3 text-gray">Total Debt/BSD supply</span>
          <span className="b16">$200,000,000</span>
        </div>
      </Col>
      <Col
        sm={12}
        className="collateral d-flex justify-content-center align-items-center  m-0 p-0"
        style={{
          // border: "1px solid #D2D2D2",
          height: `${btcLockedHeight}%`, // apply the calculated height percentage
        }}
      >
        <Col className="collateral  m-0 p-0">
          <Row className="d-flex justify-content-center align-items-center m-0 p-0">
            <span className="w-50 text-gray text-end p-0">TVL/Collateral</span>

            <Col className="p-0 m-0">
              <Stack
                direction="vertical"
                className="w-75 justify-content-start align-items-center"
              >
                <p className="b16 w-50">
                  ₿10,000
                  <span className="b18 w-50">$600,000,000</span>
                </p>
              </Stack>
            </Col>
          </Row>

          <div className="d-flex justify-content-between align-items-center">
            <span className="w-50 text-gray text-end">Redemption factor</span>
            <span className="b18 w-50 text-center">1.05</span>
          </div>
        </Col>
      </Col>
    </Row>
  );
};
