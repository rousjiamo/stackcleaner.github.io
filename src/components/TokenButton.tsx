import { Button } from "react-bootstrap";

export const TokenButton = (props) => {
  return (
    <div>
      <Button
        className="d-flex justify-between align-items-center border-0 focus-ring focus-ring-light bg-light text-dark p-0 mt-2"
        // onClick={onClick}
      >
        <img src={props.icon} className="assetLogo" />
        <strong className="plr84 b20 px-2">{props.token}</strong>
        {/* <img src={chevron} /> */}
      </Button>
    </div>
  );
};
