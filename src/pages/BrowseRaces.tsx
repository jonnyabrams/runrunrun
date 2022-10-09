import { useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import RaceTicketCard from "../components/RaceTicketCard";
import CartDropdown from "../components/CartDropdown";
import { RunnersState } from "../context/Context";
import { RaceType } from "../typings";

const BrowseRaces = () => {
  const {
    races,
    cartState: { cart },
    cartDispatch,
  } = RunnersState();
  const [browseSoonestFirst, setBrowseSoonestFirst] = useState(false);

  const sortedRaces = browseSoonestFirst
    ? races.sort(
        (a: RaceType, b: RaceType) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    : races.sort(
        (a: RaceType, b: RaceType) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );

  return (
    <div className="browse_events_container">
      {cart.length > 0 ? (
        <h1>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <ShoppingCartIcon
                style={{ color: "white", height: "30px", width: "30px" }}
              />
              <Badge bg="danger">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 200 }}>
              <CartDropdown cart={cart} dispatch={cartDispatch} />
            </Dropdown.Menu>
          </Dropdown>
        </h1>
      ) : (
        <h1>Browse Upcoming Races</h1>
      )}
      <h2 onClick={() => setBrowseSoonestFirst(!browseSoonestFirst)}>
        {browseSoonestFirst ? "Browse latest first" : "Browse soonest first"}
      </h2>
      <div className="browse_events">
        {sortedRaces.map((race: RaceType, i: number) => (
          <RaceTicketCard key={i} race={race} />
        ))}
      </div>
    </div>
  );
};

export default BrowseRaces;
