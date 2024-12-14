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
      data: insideTemp.slice(2),
      borderColor: '#004638',
      backgroundColor: '#004638',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    })
    result.push({
      label: 'Extérieur',
      drawActiveElementsOnTop: false,
      data: outsideTemp.slice(2),
      borderColor: '#82bf00',
      backgroundColor: '#82bf00',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
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
  }, [insideTemp, outsideTemp]);

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
      labels: timelabels.slice(2),
      datasets: graphDatasets,
    }

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
          }
        }
      },
    };
  
    return (
      <div className="Charts">
        Température (°C)
        <Line 
          options={config} 
          data={data}
        />
      </div>
    );
  }
}

export default TempGraph;