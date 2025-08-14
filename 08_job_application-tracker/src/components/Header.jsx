import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white shadow-lg py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-wide">
        <Link to="/" className="hover:text-yellow-300 transition">
          Job Tracker
        </Link>
      </h1>
      <nav className="space-x-6 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-yellow-300 transition duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/add"
          className="hover:text-yellow-300 transition duration-200"
        >
          Add Job
        </Link>
      </nav>
    </header>
  );
}

export default Header;
