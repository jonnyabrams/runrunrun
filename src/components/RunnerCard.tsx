import { Card } from "react-bootstrap";

import { Runner } from "../typings";

type Props = {
  runner: Runner;
};

const RunnerCard = ({ runner }: Props) => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="/default.jpeg"
          style={{ height: "50px", width: "50px" }}
          alt={`${runner.firstName} ${runner.lastName}`}
        />
      </Card>
    </div>
  );
};

export default RunnerCard;
