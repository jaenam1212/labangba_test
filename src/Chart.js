import React from "react";
import { BarChart, Bar } from "recharts";
import './Table.css';
import JsonData from './data.json'

const data = JsonData.map(
    (info)=> {
        return (
        <BarChart width={150} height={40} data={JsonData} className="ab">
            <Bar dataKey={info.Hits} fill="#8884d8" />
        </BarChart>
  );
    }
)

function Chart() {
    return(
        <div>
            {data}
        </div>
  )
}
export default Chart;