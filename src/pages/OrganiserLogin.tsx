import { Dropdown } from "react-bootstrap";

import { RunnersState } from "../context/Context";

const OrganiserLogin = () => {
  const { organisers, events, races } = RunnersState()

  console.log(races)
  return (
    <div className="login_container">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Select your organisation
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default OrganiserLogin;
