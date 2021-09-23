import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { UserContext, useBankContext } from '../context';
import img from '../bank_logo.png';
function NavBar() {
  const ctx = React.useContext(UserContext);
  const { logout, users } = useBankContext();
  let history = useHistory();

  const [currentUser, setCurrentUser] = React.useState();
  React.useEffect(() => {
    let user = ctx.users.filter((user) => user.loged === true);
    let index;
    if (user.length > 0) {
      // eslint-disable-next-line no-unused-vars
      index = ctx.users.indexOf(user[0]);
      setCurrentUser(user[0]);
    }
  }, [ctx.users, users]);

  const logOut = () => {
    let user = ctx.users.filter((user) => user.loged === true);
    if (user[0]) {
      logout(user[0]);
      setCurrentUser(null);
      // BUG
      history.push('/login/');
    } else {
      history.push('/login/');
    }
  };
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#/'>
            <img
              alt=''
              src={img}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Fanky
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='d-flex justify-content-center'>
            <Nav defaultActiveKey='#/' fill variant='tabs'>
              <Nav.Link href='#/'>
                <button className='btn btn-primary'>Home</button>
              </Nav.Link>
              <Nav.Link href='#/CreateAccount/'>
                <button className='btn btn-primary'>Create Account</button>
              </Nav.Link>
              <Nav.Link href='#/deposit'>
                <button className='btn btn-primary'>Deposit</button>
              </Nav.Link>
              <Nav.Link href='#/withdraw'>
                <button className='btn btn-primary'>Withdraw</button>
              </Nav.Link>
              <Nav.Link href='#/balance/'>
                <button className='btn btn-primary'>Balance</button>
              </Nav.Link>
              <Nav.Link href='#/alldata/'>
                <button className='btn btn-primary'>All Data</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className='btn btn-dark' onClick={logOut}>
            {currentUser ? 'Log out' : 'Log In'}
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
