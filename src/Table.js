import Table from 'react-bootstrap/Table';
import JsonData from './data.json'
import './Table.css';

function LaTable() {

    const DisplayData = JsonData.map(
        (info)=> {
            return(
                <tr>
                    <td>{info.id +1}</td>
                    <td>{info.name}</td>
                    <td>{info.Broadcasting}</td>
                    <td>{info.Classification}</td>
                    <td>{info.Time}</td>
                    <td>{info.Hits}</td>
                    <td>{info.SalesVolume}</td>
                    <td>{info.Sales}</td>
                    <td>{info.NumberProducts}</td>
                </tr>
            )
        }
    )

  return (
    <Table responsive>
      <thead className='List'>
        <tr>
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