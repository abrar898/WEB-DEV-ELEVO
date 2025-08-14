import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ForecastChart = ({ forecast }) => {
  const days = forecast.map(day =>
    new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })
  );
  const temps = forecast.map(day => day.temp.day);

  const data = {
    labels: days,
    datasets: [
      {
        label: 'Daily Temp (°C)',
        data: temps,
        fill: false,
        borderColor: '#38bdf8',
        backgroundColor: '#38bdf8',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-white mb-2">7-Day Forecast</h2>
      <Line data={data} />
    </div>
  );
};

export default ForecastChart;
