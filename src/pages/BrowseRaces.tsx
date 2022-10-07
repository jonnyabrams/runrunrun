import { useState } from "react";
import RaceTicketCard from "../components/RaceTicketCard";
import { RunnersState } from "../context/Context";
import { RaceType } from "../typings";

const BrowseRaces = () => {
  const { races } = RunnersState();
  const [browseLatestFirst, setBrowseLatestFirst] = useState(false);

  const sortedRaces = browseLatestFirst
    ? races.sort(
        (a: RaceType, b: RaceType) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : races.sort(
        (a: RaceType, b: RaceType) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );

  return (
    <div className="browse_events_container">
      <h1>Your basket is empty</h1>
      <h2 onClick={() => setBrowseLatestFirst(!browseLatestFirst)}>
        {browseLatestFirst ? "Browse soonest first" : "Browse latest first"}
      </h2>
      <div className="browse_events">
        {sortedRaces.map((race: RaceType, i: number) => (
          <RaceTicketCard key={i} race={race} />
        ))}
      </div>
    </div>
  );
};

export default BrowseRaces;
