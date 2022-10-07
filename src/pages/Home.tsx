import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Continue as Organiser or Customer</h1>
      <div className="home_buttons">
        <button onClick={() => navigate('/bookings')} className="home_organiser_button">Organiser</button>
        <button className="home_customer_button">Customer</button>
      </div>
    </div>
  );
};

export default Home;
