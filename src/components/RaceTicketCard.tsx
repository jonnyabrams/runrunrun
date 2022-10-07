import moment from "moment";
import { Button, Card } from "react-bootstrap";

import { RaceType } from "../typings";

type Props = {
  race: RaceType;
};

const RaceTicketCard = ({ race }: Props) => {
  return (
    <Card style={{ height: "300px", width: "300px", marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{race.title}</Card.Title>
        <Card.Subtitle style={{ paddingTop: 15, paddingBottom: 15 }}>
          {race.event}
        </Card.Subtitle>
        <Card.Text>{moment(race.date).format("MMMM Do YYYY h:mm a")}</Card.Text>
        <Card.Text>£{(race.price / 100).toFixed(2)}</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default RaceTicketCard;
