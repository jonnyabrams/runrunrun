import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

import { RunnersState } from "../context/Context";
import { RaceType } from "../typings";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = RunnersState();

  const [total, setTotal] = useState();
  const [paymentMessage, setPaymentMessage] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc: number, current: RaceType) =>
          acc + Number(current.price) * current.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="cart">
      <div className="runners_container">
        <ListGroup>
          {cart.map((item: RaceType, i: number) => (
            <ListGroup.Item key={i}>
              <Row>
                <Col md={2}>
                  <span>{item.title}</span>
                </Col>
                <Col md={2}>
                  <span>{item.event}</span>
                </Col>
                <Col md={2}>
                  <span>{moment(item.date).format("MMMM Do YYYY h:mm a")}</span>
                </Col>
                <Col md={2}>
                  <span>£{(item.price / 100).toFixed(2)}</span>
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      cartDispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[1, 2, 3, 4, 5, 6].map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      cartDispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    <DeleteIcon height="20px" width="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total: £{(total! / 100).toFixed(2)}
        </span>
        <Button
          onClick={() => setPaymentMessage(true)}
          type="button"
          disabled={cart.length === 0}
        >
          Proceed to checkout
        </Button>
        {paymentMessage && (
          <span>*Obviously you can't really buy anything here</span>
        )}
        <Link to="/races" style={{ color: "white", marginTop: "10px" }}>
          or continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
