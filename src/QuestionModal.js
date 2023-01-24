import './App.css';

function QuestionModal({setModal}) {
    let closeModal = () => {
        setModal(false);
    };
    return(
        <div className="ModalContainer">
            <button className="close" onClick={closeModal}>
                x
            </button>
            <p className='modalText1'>라방랭킹</p>
            <p className='modalText2'>상단에서 선택한 카테고리의 추정 <br/> 매출액이 높은 방송 표기
            </p>
        </div>
    );
}
export default QuestionModal;