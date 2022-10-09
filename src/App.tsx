import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Organiser from "./pages/Organiser";
import OrganiserLogin from "./pages/OrganiserLogin";
import Race from "./pages/Race";
import AllBookings from "./pages/AllBookings";
import BrowseRaces from "./pages/BrowseRaces";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<AllBookings />} />
          <Route path="/login" element={<OrganiserLogin />} />
          <Route path="/organiser/:id" element={<Organiser />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/race/:id" element={<Race />} />
          <Route path="/races" element={<BrowseRaces />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
