import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Overview() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Earnings",
        data: [1200, 1900, 3000, 2500],
        backgroundColor: "#4F46E5"
      }
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Total Projects: 8</div>
        <div className="bg-white p-4 rounded shadow">Tasks Due: 5</div>
        <div className="bg-white p-4 rounded shadow">Earnings: $8,600</div>
      </div>
      <div className="mt-6 bg-white p-4 rounded shadow">
        <Bar data={data} />
      </div>
    </div>
  );
}
