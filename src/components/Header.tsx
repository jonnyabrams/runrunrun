import { Link } from "react-router-dom";
import { Container, FormControl, Navbar, Button, Nav } from "react-bootstrap";

import { RunnersState } from "../context/Context";

const Header = () => {
  const { dispatch, filterDispatch } = RunnersState();
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
          <Link to="/login">
            <Button className="btn btn-primary">Organiser Portal</Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
