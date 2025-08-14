// src/utils/storage.js

const STORAGE_KEY = 'jobs';

export const loadJobs = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveJobs = (jobs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
};
