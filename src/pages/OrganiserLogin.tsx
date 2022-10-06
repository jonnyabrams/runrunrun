import { Dropdown } from "react-bootstrap";

import { RunnersState } from "../context/Context";
import { Organiser } from "../typings";

const OrganiserLogin = () => {
  const { organisers } = RunnersState()

  return (
    <div className="login_container">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Select your organisation
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {organisers.map((org: Organiser) => (
            <Dropdown.Item href={`/organiser/${org.id}`}>{org.title}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default OrganiserLogin;
