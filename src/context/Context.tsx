import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { Runner } from "../typings";
import { runnersReducer, filterReducer } from "./Reducers";

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

  // organisers

  let organisersMap = runners.map((runner) => ({
    title: runner.organiserTitle,
    id: runner.organiserId,
  }));

  let organisers = [
    ...new Map(organisersMap.map((org) => [org["title"], org])).values(),
  ];

  // events

  let eventsMap = runners.map((runner) => ({
    title: runner.eventTitle,
    id: runner.eventId,
    organiser: runner.organiserTitle,
    organiserId: runner.organiserId,
    date: runner.raceStartDate,
  }));

  let events = [
    ...new Map(eventsMap.map((event) => [event["title"], event])).values(),
  ];

  // races

  let racesMap = runners.map((runner) => ({
    title: runner.raceTitle,
    id: runner.raceId,
    event: runner.eventTitle,
    eventId: runner.eventId,
    organiser: runner.organiserTitle,
    organiserId: runner.organiserId,
    date: runner.raceStartDate,
  }));

  let races = [...new Map(racesMap.map((race) => [race["id"], race])).values()];

  // reducers

  const [state, dispatch] = useReducer(runnersReducer, {
    runners: runners,
    organisers: organisers,
    events: events,
    races: races,
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byConfirmed: false,
    byPending: false,
    searchQuery: "",
  });

  return (
    <Runners.Provider
      value={{
        runners,
        organisers,
        events,
        races,
        state,
        filterState,
        filterDispatch,
        dispatch,
        error,
      }}
    >
      {children}
    </Runners.Provider>
  );
};

export const RunnersState = () => {
  return useContext(Runners);
};

export default Context;
