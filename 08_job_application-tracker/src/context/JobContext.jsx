// src/context/JobContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { loadJobs, saveJobs } from '../utils/storage';

const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(loadJobs());

  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  const addJob = (job) => {
    setJobs(prev => [...prev, job]);
  };

  const deleteJob = (id) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const updateJob = (updatedJob) => {
    setJobs(prev =>
      prev.map(job => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  const importJobs = (importedJobs) => {
    setJobs(importedJobs);
  };

  return (
    <JobContext.Provider
      value={{ jobs, addJob, deleteJob, updateJob, importJobs }}
    >
      {children}
    </JobContext.Provider>
  );
};
