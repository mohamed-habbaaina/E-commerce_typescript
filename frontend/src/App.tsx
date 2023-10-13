import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { sampleProducts } from './data';

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
            <Row>
              {sampleProducts.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <img 
                  className='product-image'
                  src={product.image} alt={product.name} 
                  />
                  <h2>{product.name}</h2>
                  <p>{product.price} Euro</p>
                </Col>
              ))}
            </Row>
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
