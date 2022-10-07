import { Link, useParams } from "react-router-dom";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";

import { RunnersState } from "../context/Context";
import { RaceType, Runner } from "../typings";
import { capitalise } from "../helpers";

const Race = () => {
  const { id } = useParams();
  const { runners, races, error } = RunnersState();

  const race = races.find((item: RaceType) => item.id === id);

  const raceStartlist = runners.filter(
    (runner: Runner) => runner.raceId === id
  );

  const totalTakings = raceStartlist
    .map((item: Runner) => item.ticketPrice.value)
    .reduce((a: number, b: number) => a + b, 0);

  if (error) return error.message;

  return (
    <div className="race_container">
      {race ? (
        <>
          <h1>
            {race.event}: {race.title}
          </h1>
          <h2>{moment(race.date).format("MMMM Do YYYY h:mm a")}</h2>
          <h3>Total Takings: £{(totalTakings / 100).toFixed(2)}</h3>
          {raceStartlist.map((runner: Runner, i: number) => (
            <p key={i}>
              <Link to={`/booking/${runner.id}`}>
                {capitalise(runner.firstName)} {capitalise(runner.lastName)}
              </Link>{" "}
              - ({runner.ticketTitle}, £
              {(runner.ticketPrice.value / 100).toFixed(2)}) - {runner.status}
            </p>
          ))}
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Race;
