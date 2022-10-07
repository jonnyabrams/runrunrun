import { useEffect, useState } from "react";

import { RunnersState } from "../context/Context";
import Filters from "../components/Filters";
import RunnerCard from "../components/RunnerCard";
import { Runner } from "../typings";

const Home = () => {
  const {
    runners,
    error,
    filterState: { sort, byConfirmed, byPending, searchQuery },
  } = RunnersState();

  const transformRunners = () => {
    let sortedRunners = runners;

    if (sort) {
      sortedRunners = sortedRunners.sort((a: Runner, b: Runner) =>
        sort === "lowToHigh"
          ? a.ticketPrice.value - b.ticketPrice.value
          : b.ticketPrice.value - a.ticketPrice.value
      );
    }

    if (byConfirmed) {
      sortedRunners = sortedRunners.filter(
        (runner: Runner) => runner.status === "CONFIRMED"
      );
    }

    if (byPending) {
      sortedRunners = sortedRunners.filter(
        (runner: Runner) => runner.status === "PENDING"
      );
    }

    return sortedRunners;
  };

  if (error) return error.message;

  if (runners.length === 0) return <h2>Looking for bookings...</h2>;

  return (
    <div className="home">
      <Filters />
      <div className="runners_container">
        {transformRunners().map((runner: Runner, i: number) => (
          <RunnerCard runner={runner} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
