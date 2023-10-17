import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='d-flex flex-column vh-100'>
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>e-commerce</Navbar.Brand>
            </Container>
            <Nav>
              <a href="/cart" className='nav-link'>Cart</a>
              <a href="/singin" className='nav-link'>Sing In</a>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Outlet />
          </Container>
        </main>
        <footer className='text-center'>
          Footer
        </footer>
      </div>
    </>
  );
}

export default App;
