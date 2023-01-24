import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsQuestionCircle } from "react-icons/bs";
import { useState } from 'react';
import QuestionModal from './QuestionModal'
import LaTable from './Table';

function App() {

  let [modal, setModal] = useState(false);
  let showModal = () => {
    setModal(true);
  };
  return (
    <div>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className='logo'><img src='https://datalab.labangba.com/_app/Nav/gnb_bi.png' alt='logo'/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <img src='https://datalab.labangba.com/_app/Nav/gnb_user_fill.svg' className='mypageIcon' alt='user'/><a href="#login" className='user'>1234님</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr className='crossLine'></hr>  
    <p className='labanglank'>라방랭킹 <button onClick={showModal} className='LankBtn'>< BsQuestionCircle/> </button>{modal && <QuestionModal setModal={setModal}/>}</p>
    <p className='labanglankSmall'>72시간 동안 가장 매출액 높은 라이브방송</p>
    <hr className='crossLine2'></hr> 
    <div className='Latable'>
    <LaTable></LaTable>
    </div>
    </div>
  );
}



export default App;
