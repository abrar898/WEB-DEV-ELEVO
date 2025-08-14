// src/components/JobForm.jsx
import { useState } from 'react';

function JobForm({ initialData = {}, onSubmit, submitLabel }) {
  const [form, setForm] = useState({
    company: initialData.company || '',
    title: initialData.title || '',
    status: initialData.status || 'Applied',
    date: initialData.date || '',
    notes: initialData.notes || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full border p-2"
        required
      />
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Job Title"
        className="w-full border p-2"
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border p-2"
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border p-2"
      />
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes"
        className="w-full border p-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {submitLabel}
      </button>
    </form>
  );
}

export default JobForm;
