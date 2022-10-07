import RaceTicketCard from "../components/RaceTicketCard";
import { RunnersState } from "../context/Context";
import { RaceType } from "../typings";

const BrowseRaces = () => {
  const { races } = RunnersState();

  const sortedRaces = races.sort(
    (a: RaceType, b: RaceType) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="browse_events">
      {sortedRaces.map((race: RaceType) => (
        <RaceTicketCard race={race} />
      ))}
    </div>
  );
};

export default BrowseRaces;
