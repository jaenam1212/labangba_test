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
      <div className='nav'>
    <Navbar >
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
    </div>
    <hr className='crossLine'></hr>  
    <p className='labanglank'>라방랭킹 <button onClick={showModal} className='LankBtn'>< BsQuestionCircle/> </button>{modal && <QuestionModal setModal={setModal}/>}</p>
    <p className='labanglankSmall'>72시간 동안 가장 매출액 높은 라이브방송</p>
    <hr className='crossLine2'></hr> 
    <div className='Latable'>
    <LaTable></LaTable>
    </div>
    <div id="main-footer" className="footer"> 
            <hr/>

            <a href='#info' className='footerInfo'>라방바 데이터랩 소개</a>
            <a href='#PersonalInfo' className='PersonalInfo'>개인정보처리방침</a>
            <a href='#TermsConditions' className='TermsConditions'>이용약관</a>
            <a href='#Contact' className='Contact'>문의하기/제휴하기</a>
            <div className='companyInfo'>
            <p>씨브이쓰리 주식회사</p>
            <p>사업자등록번호 891-81-02188 통신판매업 신고 2021-서울성동-01100</p>
            <p>주소 대전광역시 유성구 대덕대로512번길 20 대표번호 070-4466-6599</p>
            <p>개인정보관리 책임자 이기백 대표자 양진호</p>
            </div>
            <div className='businessHours'>
            <p>평일 09:00 - 18:00</p>
            <p>점심시간 12:00 - 13:00</p>
            </div>
        </div>
    </div>
  );
}



export default App;
