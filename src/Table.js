import Table from 'react-bootstrap/Table';
import JsonData from './data.json'
import './Table.css';
import SplitCount from './SplitCount';

function LaTable() {

    const DisplayData = JsonData.map(
        (info)=> {
            return(
                <tr>
                    <td className='Number'>{info.id +1}</td>
                    <td className='NameAll'><div className='dataName'>{info.name}</div><br/>
                    <div className='BroadCasting'>{info.Broadcasting}</div></td>
                    <td ><div className='Classification'>{info.Classification}</div></td>
                    <td><div className='Date'>{info.Date}</div>
                    <div className='Time'>{info.Time}</div></td>
                    <td>{SplitCount(info.Hits)}
                    </td>
                    <td>{info.SalesVolume}</td>
                    <td>{SplitCount(info.Sales)}</td>
                    <td>{info.NumberProducts}</td>
                </tr>
            )
        }
    )

  return (
    <Table responsive>
      <thead className='List'>
        <tr className='topBar'>
          <th></th> 
            <th>방송정보</th>    
            <th>분류</th>  
            <th>방송시간</th>  
            <th>조회수</th>  
            <th>판매량</th>  
            <th>매출액</th>  
            <th>상품수</th>
        </tr>
      </thead>
      <tbody>
        {DisplayData}
      </tbody>
    </Table>
  );
}

export default LaTable;