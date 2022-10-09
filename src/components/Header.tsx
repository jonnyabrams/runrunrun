import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
  Navbar,
  Button,
  Nav,
  Badge,
  Dropdown,
} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { RunnersState } from "../context/Context";
import CartDropdown from "./CartDropdown";

const Header = () => {
  const {
    filterDispatch,
    cartState: { cart },
    cartDispatch,
  } = RunnersState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            RunRunRun
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search by name, race title, event or organiser..."
            className="m-auto"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          {window.location.pathname === "/races" ? (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  <ShoppingCartIcon
                    style={{ color: "white", height: "30px", width: "30px" }}
                  />
                  <Badge bg="danger">{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 100 }}>
                  <CartDropdown cart={cart} dispatch={cartDispatch} />
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <Link to="/login">
              <Button className="btn btn-primary">Organiser Portal</Button>
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
