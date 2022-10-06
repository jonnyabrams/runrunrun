import { Button, Form, FormCheck } from "react-bootstrap";

const Filters = () => {
  return (
    <div className="filters">
      <span>Filter by status:</span>
      <span>
        <Form.Check
          inline
          label="Show Confirmed"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Show Pending"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>Sort by ticket price:</span>
      <span>
        <FormCheck
          inline
          label="Cheapest"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Most Expensive"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <Button
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
