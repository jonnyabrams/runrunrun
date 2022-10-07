import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
  Navbar,
  Button,
  Nav,
  Badge,
  CarouselItem,
} from "react-bootstrap";

const Header = () => {
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
