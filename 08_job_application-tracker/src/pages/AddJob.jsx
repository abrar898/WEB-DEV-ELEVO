import { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddJob() {
  const { addJob } = useJobContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: '', title: '', status: 'Applied', date: '', notes: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addJob({ ...form, id: uuid() });
    toast.success('Job has been added successfully!');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-lg p-8 transition-transform hover:scale-[1.01]">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Add a New Job</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            name="company"
            onChange={handleChange}
            required
            placeholder="Company Name"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            name="title"
            onChange={handleChange}
            required
            placeholder="Job Title"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <select
            name="status"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            name="notes"
            onChange={handleChange}
            placeholder="Notes"
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Add Job
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
    </div>
  );
}

export default AddJob;
