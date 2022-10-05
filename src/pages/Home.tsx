import { useEffect, useState } from "react";
import { Runner } from "../typings"

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
    <div className="product_container">
      {runners.map((runner: Runner) => (
        <span>{runner.firstName}</span>
      ))}
    </div>
  )
}

export default Home