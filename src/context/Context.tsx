import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { Runner } from "../typings";
import { runnersReducer } from "./Reducers";

const Runners = createContext<any>(null);

const Context = ({ children }: { children: any }) => {
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

  console.log(runners)

  const [state, dispatch] = useReducer(runnersReducer, {
    runners: runners,
  });

  return (
    <Runners.Provider value={{ state, dispatch }}>
      { children }
    </Runners.Provider>
  );
};

export const RunnersState = () => {
  return useContext(Runners);
};

export default Context;