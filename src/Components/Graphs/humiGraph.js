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
      data: insideHumi,
      borderColor: '#004638',
      backgroundColor: '#004638',
    })
    result.push({
      label: 'Extérieur',
      data: outsideHumi,
      borderColor: '#82bf00',
      backgroundColor: '#82bf00',
    })
    setGraphDatasets(result)
  }, [insideHumi]);

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
      labels: timelabels,
      datasets: graphDatasets,
    }

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Dernier 48h',
            font: {
              size: 20,
              weight: 'bold',
            },
            color: 'black',
          },
          colors: {
            enabled: true,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Humidité'
            },
            suggestedMin: -10,
            suggestedMax: 100
          }
        }
      },
    };
  
    return (
      <div className="Charts">
        Humidité
        <Line 
          config={config} 
          data={data}
          />
      </div>
    );
  }
}

export default HumiGraph;