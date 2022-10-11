import { Button, Form, FormCheck } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { RunnersState } from "../context/Context";

const Filters = () => {
  const {
    filterState: { sort, byConfirmed, byPending },
    filterDispatch,
  } = RunnersState();

  const navigate = useNavigate();

  return (
    <div className="filters">
      <span>Filter by status:</span>
      <span>
        <Form.Check
          inline
          label="Show Confirmed"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_CONFIRMED",
            })
          }
          checked={byConfirmed}
          disabled={byPending}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Show Pending"
          name="group1"
          type="checkbox"
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_PENDING",
            })
          }
          checked={byPending}
          disabled={byConfirmed}
        />
      </span>
      <span>Sort by ticket price:</span>
      <span>
        <FormCheck
          inline
          label="Cheapest"
          name="group1"
          type="radio"
          id={`inline-3`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Most Expensive"
          name="group1"
          type="radio"
          id={`inline-4`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          filterDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>

      <button onClick={() => navigate("/races")} className="customer_button">
        Are you a customer? Click here to buy tickets!
      </button>
    </div>
  );
};

export default Filters;
