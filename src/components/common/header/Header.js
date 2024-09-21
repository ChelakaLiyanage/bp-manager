import { Container, Navbar } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiNotebookOutline } from "@mdi/js";

import CommonHelper from "../../../helpers/CommonHelper";

import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="blogger-header">
      <Container fluid>
        <Navbar.Brand href="/">
          <Icon path={mdiNotebookOutline} size={1} />
          &nbsp;{CommonHelper.APP_NAME}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
