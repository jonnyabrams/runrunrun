import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { RunnersState } from "../context/Context";

import { RaceType } from "../typings";

type Props = {
  race: RaceType;
};

const RaceTicketCard = ({ race }: Props) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = RunnersState();

  console.log(cart);

  return (
    <Card style={{ height: "300px", width: "300px", marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{race.title}</Card.Title>
        <Card.Subtitle style={{ paddingTop: 15, paddingBottom: 15 }}>
          {race.event}
        </Card.Subtitle>
        <Card.Text>{moment(race.date).format("MMMM Do YYYY h:mm a")}</Card.Text>
        <Card.Text>£{(race.price / 100).toFixed(2)}</Card.Text>
        {cart.some((r: RaceType) => r.id === race.id) ? (
          <Button
            onClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: race })
            }
            variant="danger"
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: race })}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default RaceTicketCard;
