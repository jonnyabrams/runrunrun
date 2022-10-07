import moment from "moment";
import { Card } from "react-bootstrap";
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
          {moment(race.date).format("MMMM Do YYYY h:mm a")}
        </Card.Subtitle>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RaceTicketCard;
