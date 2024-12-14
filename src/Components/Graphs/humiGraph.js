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
Graphs to compare data Humidity
*/

// id & name are arrays[]

function HumiGraph({ insideHumi, insideHumi2, outsideHumi, timelabels }) {

  const [ graphDatasets, setGraphDatasets ] = useState([]);

  useEffect(() => {
    let result = [];
    result.push({
      label: 'Intérieur',
      data: insideHumi.slice(2),
      borderColor: '#004638',
      backgroundColor: '#004638',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    })
    result.push({
      label: 'Extérieur',
      data: outsideHumi.slice(2),
      borderColor: '#82bf00',
      backgroundColor: '#82bf00',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    })
    setGraphDatasets(result)
  }, [insideHumi, outsideHumi]);

  return (
    <div>
      {!insideHumi ? <Spinner /> : <RenderChart />}
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
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      },
    };
  
    return (
      <div className="Charts">
        Humidité (%)
        <Line 
          config={config} 
          data={data}
          />
      </div>
    );
  }
}

export default HumiGraph;