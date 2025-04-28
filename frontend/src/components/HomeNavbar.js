import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <div className="text-2xl font-bold">
        <Link to="/">Task Manager</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Login
        </Link>
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavbar;
