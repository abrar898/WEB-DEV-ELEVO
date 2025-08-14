export default function Projects() {
  const projects = [
    { name: "Website Redesign", status: "In Progress", deadline: "2025-08-30" },
    { name: "SEO Campaign", status: "Completed", deadline: "2025-07-20" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-2 border">Project Name</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, idx) => (
            <tr key={idx}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.status}</td>
              <td className="p-2 border">{p.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
