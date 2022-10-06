import { useEffect, useState } from "react";

import { RunnersState } from "../context/Context"
import Filters from "../components/Filters";
import RunnerCard from "../components/RunnerCard";
import { Runner } from "../typings";

const Home = () => {
  const { runners } = RunnersState()
  const [error, setError] = useState<string>("");

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
