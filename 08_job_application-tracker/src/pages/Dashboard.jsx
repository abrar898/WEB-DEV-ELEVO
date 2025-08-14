import { Link } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';
import JobCard from '../components/JobCard';
import { FiUpload, FiDownload, FiPlus, FiTrash2 } from 'react-icons/fi';

function Dashboard() {
  const { jobs, importJobs, clearJobs } = useJobContext();

  const exportData = () => {
    const blob = new Blob([JSON.stringify(jobs, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jobs.json';
    a.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (Array.isArray(data)) {
          importJobs(data);
        } else {
          alert('Invalid file format. Please upload a valid JSON file.');
        }
      } catch (error) {
        alert('Error reading file. Please upload a valid JSON.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">📋 Job Applications</h2>
        <Link
          to="/add"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow-md transition"
        >
          <FiPlus /> Add Job
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={exportData}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition shadow-sm"
        >
          <FiDownload /> Export JSON
        </button>

        <label className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-pointer transition shadow-sm">
          <FiUpload /> Import JSON
          <input
            type="file"
            accept=".json"
            onChange={importData}
            className="hidden"
          />
        </label>

        
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No job applications found. Start by adding one!
          </p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default Dashboard;
