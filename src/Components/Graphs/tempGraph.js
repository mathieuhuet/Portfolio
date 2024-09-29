import './graph.css';
import Spinner from '../../Spinner';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Colors
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

/*
Graphs to compare data
*/

// id & name are arrays[]

function TempGraph({ acstate, insideTemp, insideTemp2, outsideTemp, timelabels }) {

  const [ graphDatasets, setGraphDatasets ] = useState([]);

  useEffect(() => {
    let result = [];
    result.push({
      label: 'Intérieur',
      data: insideTemp,
      borderColor: '#004638',
      backgroundColor: '#004638',
    })
    result.push({
      label: 'Extérieur',
      data: outsideTemp,
      borderColor: '#82bf00',
      backgroundColor: '#82bf00',
    })
    // result.push({
    //   label: 'A/C',
    //   data: acstate,
    //   borderColor: '#d8f537',
    //   backgroundColor: '#d8f537',
    //   stepped: true,
    //   yAxisID: 'y2',
    // })
    setGraphDatasets(result)
  }, [insideTemp]);

  return (
    <div>
      {!insideTemp ? <Spinner /> : <RenderChart />}
    </div>
  )


  function RenderChart () {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend, 
      Filler,
      Colors
    );

    const data = {
      labels: timelabels,
      datasets: graphDatasets,
    }

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Dernier 48h',
          }
        },
        scales: {
          y2: {
            type: 'category',
            labels: ['ON', 'OFF'],
            offset: true,
            position: 'left',
            stackWeight: 1,
            border: {
              color: 'blue'
            }
          },
          y: {
            type: 'linear',
            position: 'left',
            stackWeight: 2,
          },
        }
      },
    };
  
    return (
      <div className="Charts">
        Température
        <Line 
          options={config} 
          data={data}
        />
      </div>
    );
  }
}

export default TempGraph;