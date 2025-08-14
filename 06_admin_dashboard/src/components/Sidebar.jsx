import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav className="space-y-4">
        <Link to="/" className="block hover:bg-gray-700 p-2 rounded">Overview</Link>
        <Link to="/projects" className="block hover:bg-gray-700 p-2 rounded">Projects</Link>
        <Link to="/profile" className="block hover:bg-gray-700 p-2 rounded">Profile</Link>
      </nav>
    </aside>
  );
}
