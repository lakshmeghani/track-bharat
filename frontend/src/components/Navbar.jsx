import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className='text-blue-500 font-bold font-mono text-2xl'>The code titans</h1>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/gps"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`
              }
            >
              GPS Simulation
            </NavLink>
            
            <NavLink
              to="/gpsmaps"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`
              }
            >
              Google Maps Simulation
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
