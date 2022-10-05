import { useEffect, useState } from "react";

import RunnerCard from "../components/RunnerCard";
import { Runner } from "../typings";

const Home = () => {
  const [runners, setRunners] = useState<Runner[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const addRunners = (data: Runner[]) => {
      setRunners(data);
    };

    const fetchRunners = async () => {
      await fetch("/api/startlistentries")
        .then((response) => response.json())
        .then((data) => addRunners(data))
        .catch((error) => setError(error.message));
    };

    fetchRunners();
  }, []);

  return (
    <div className="home">
      <div className="product_container">
        {runners.map((runner: Runner, i: number) => (
          <RunnerCard runner={runner} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
