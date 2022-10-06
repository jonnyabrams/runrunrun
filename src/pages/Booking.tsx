import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import moment from "moment";

import { RunnersState } from "../context/Context";
import { Runner } from "../typings";
import { capitalise } from "../helpers";

const Booking = () => {
  const { runners } = RunnersState();
  const { id } = useParams();
  const runner = runners.find((runner: Runner) => runner.id === id);
  const navigate = useNavigate();

  if (!runner) return <h2>Looking for booking...</h2>;

  return (
    <div className="booking_container">
      <div className="booking_container_left">
        <p>
          <span>Name:</span> {capitalise(runner.firstName)}{" "}
          {capitalise(runner.lastName)}
        </p>
        <p>
          <span>Email:</span> {runner.emailAddress}
        </p>
        <p>
          <span>ID:</span> {runner.id}
        </p>
        <p>
          <span>Status: </span>
          {runner.status}
        </p>
        <p>
          <span>Paid:</span> £{(runner.ticketPrice.value / 100).toFixed(2)}
        </p>
        <p>
          <span>Booking Fee:</span> £{(runner.ticketPrice.fee / 100).toFixed(2)}
        </p>
        <p>
          <span>Ticket Type:</span> {runner.ticketTitle}
        </p>
        <p>
          <span>Ticket ID:</span> {runner.ticketId}
        </p>
        <p>
          <span>Date Booked:</span>{" "}
          {moment(runner.bookingDate).format("MMMM Do YYYY h:mm a")}
        </p>
        <p>
          <span>Race:</span> {runner.raceTitle}
        </p>
        <p>
          <span>Race ID:</span> {runner.raceId}
        </p>
        <p>
          <span>Event:</span> {runner.eventTitle}
        </p>
        <p>
          <span>Event ID:</span> {runner.eventId}
        </p>
        <p>
          <span>Event Date:</span>{" "}
          {moment(runner.raceStartDate).format("MMMM Do YYYY h:mm a")}
        </p>
        <p>
          <span>Organiser:</span> {runner.organiserTitle}
        </p>
        <p>
          <span>Organiser ID:</span> {runner.organiserId}
        </p>

        <button onClick={() => navigate("/")}>Return to home</button>
      </div>

      <div className="booking_container_right">
        <img src="/default.jpeg" alt="Image" />
        <button onClick={() => {}}>View on race startlist</button>
      </div>
    </div>
  );
};

export default Booking;
