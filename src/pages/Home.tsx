import { useEffect, useState } from "react";

import { RunnersState } from "../context/Context";
import Filters from "../components/Filters";
import RunnerCard from "../components/RunnerCard";
import { Runner } from "../typings";

const Home = () => {
  const { runners, error } = RunnersState();

  if (error) return error.message;

  if (runners.length === 0) return <h2>Looking for bookings...</h2>;

  return (
    <div className="home">
      <Filters />
      <div className="runners_container">
        {runners.map((runner: Runner, i: number) => (
          <RunnerCard runner={runner} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
