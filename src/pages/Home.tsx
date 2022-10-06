import { useEffect, useState } from "react";

import { RunnersState } from "../context/Context"
import Filters from "../components/Filters";
import RunnerCard from "../components/RunnerCard";
import { Runner } from "../typings";

const Home = () => {
  const { runners } = RunnersState()
  
  if (runners.length === 0) return <h2>No bookings found</h2>

  return (
    <div className="home">
      <Filters />
      <div className="product_container">
        {runners.map((runner: Runner, i: number) => (
          <RunnerCard runner={runner} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
