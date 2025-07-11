// components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Exam Registration</h1>
        <ul className="flex space-x-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Check Result', path: '/result' },
            { name: 'Registration', path: '/register' },
            { name: 'About', path: '/about' },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-gray-700 font-medium transition duration-300 
                  hover:text-blue-600 after:block after:absolute after:bottom-0 
                  after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 
                  hover:after:w-full after:transition-all after:duration-300 ${
                    isActive ? 'text-blue-600 after:w-full' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
