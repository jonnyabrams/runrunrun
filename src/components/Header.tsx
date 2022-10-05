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
          <Link to="/">RunRunRun</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search by name, race title, event or organiser..."
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Button className="btn btn-primary">Organiser Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
