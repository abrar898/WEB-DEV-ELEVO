import { Link } from 'react-router-dom';
// /import './JobCard.css'; // Custom CSS for flip animation

function JobCard({ job }) {
  return (
    <div className="job-card-container">
      <div className="job-card">
        <div className="job-card-front ">
          <Link
            to={`/job/${job.id}`}
            className="block w-full h-full p-4 rounded-lg shadow-lg bg-white border border-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-indigo-600">{job.company}</h3>
            <p className="text-gray-700">{job.title}</p>
            <p className="text-sm text-gray-500 mt-1">
              Status: <span className="font-medium text-gray-800">{job.status}</span>
            </p>
            <p className="text-sm text-gray-400">Applied: {job.date}</p>
          
   
        {/* <div className="job-card-back flex flex-col justify-center items-center text-white p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
          <p className="text-lg font-semibold">View Details</p>
          <p className="text-sm opacity-90">Click to edit or delete</p>
        </div> */}
         </Link>
             </div>
       
      </div>
    </div>
  );
}

export default JobCard;
