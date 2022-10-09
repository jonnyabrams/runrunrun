import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { RaceType } from "../typings";

type Props = {
  cart: RaceType[];
  dispatch: any;
};

const CartDropdown = ({ cart, dispatch }: Props) => {
  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map((race) => (
            <span className="cart_item" key={race.id}>
              <div className="cart_item_detail">
                <span>{race.title}</span>
                <span>£{(race.price / 100).toFixed(2)}</span>
              </div>
              <DeleteIcon
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: race })
                }
              />
            </span>
          ))}
          <div className="cart_button_container">
            <Link to="/cart">
              <Button style={{ width: "90%", margin: "0 10px", fontSize: "15px" }}>
                Go to cart
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <span style={{ padding: 10 }}>Cart is empty!</span>
      )}
    </>
  );
};

export default CartDropdown;
