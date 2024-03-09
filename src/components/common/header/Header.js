import {Container, Navbar} from 'react-bootstrap';

import CommonHelper from '../../../helpers/CommonHelper';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">{CommonHelper.APP_NAME}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;