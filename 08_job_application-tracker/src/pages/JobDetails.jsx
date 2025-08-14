import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JobDetails() {
  const { id } = useParams();
  const { jobs, deleteJob, updateJob } = useJobContext();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);
  const [editMode, setEditMode] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState(job || {});

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    updateJob(form);
    toast.success('Job updated successfully!');
    setEditMode(false);
  };

  const handleConfirmDelete = () => {
  deleteJob(id);
  setShowConfirm(false);

  // Show toast BEFORE navigating
  toast.success('The job has been successfully deleted!');

  // Navigate after the toast has a chance to show
  setTimeout(() => {
      toast.success('The job has been successfully deleted!');
    navigate('/');
  }, 1600); // Delay matches toast duration
};


  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Job not found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-10 transition-transform hover:scale-[1.01]">
        {editMode ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center cursor-pointer text-blue-700">Edit Job</h2>
            <div className="space-y-5">
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
                placeholder="Company"
              />
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
                placeholder="Title"
              />
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
              >
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Notes"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={handleUpdate}
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-3 rounded-lg font-semibold transition"
              >
                Save Changes
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">{job.company}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 text-gray-700 text-base">
              <div className="font-semibold">Title:</div>
              <div>{job.title}</div>

              <div className="font-semibold">Status:</div>
              <div>{job.status}</div>

              <div className="font-semibold">Date Applied:</div>
              <div>{job.date}</div>

              <div className="font-semibold">Notes:</div>
              <div>{job.notes || '—'}</div>
            </div>
            <div className="flex gap-6 mt-8 justify-center">
              <button
                onClick={() => setEditMode(true)}
                className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white px-5 py-2 rounded-lg font-medium transition cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => setShowConfirm(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Are you sure you want to delete this job?</h3>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg font-medium transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
    </div>
  );
}
