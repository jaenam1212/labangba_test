import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='logo'><img src='https://datalab.labangba.com/_app/Nav/gnb_bi.png' alt='logo'/></Navbar.Brand>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#mypage" className='bar'><img src='https://datalab.labangba.com/_app/Nav/gnb_user_fill.svg' className='mypageIcon' alt='user'/>1234님</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}



export default App;
