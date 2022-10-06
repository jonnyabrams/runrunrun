import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";
import Booking from './pages/Booking';
import Home from './pages/Home';
import OrganiserLogin from './pages/OrganiserLogin';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <OrganiserLogin /> } />
          <Route path="/booking/:id" element={ <Booking /> } />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
