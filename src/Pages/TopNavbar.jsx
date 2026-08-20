import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell , faBellSlash, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TopNavbar = ({ searchQuery, setSearchQuery, isSidebarOpen, setIsSidebarOpen }) => {
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);

  const handleToggle = () => { setIsNotificationOn(!isNotificationOn); };
  const toggleUser = () => setUserOpen(!isUserOpen);

  return (
    <div className="md:ml-[16%] w-full md:w-[84%] min-h-[10vh] flex justify-between items-center py-6 bg-white shadow-md px-4 md:px-[40px]">
      
      {/* Hamburger Icon for Mobile */}
      <button 
        className="md:hidden text-gray-600 hover:text-gray-800 mr-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
      </button>

      {/* Search Box */}
      <div className="relative flex items-center w-full max-w-sm">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500"></span>
        <input
          type="text"
          placeholder="Search here...."
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-full focus:outline-double focus:bg-gray-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

          {/* Right Section*/}
        <div className='flex space-x-2'>
          <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="text-gray-600 hover:text-gray-800" onClick={handleToggle}>
            {isNotificationOn ? (<FontAwesomeIcon icon={faBell} className='h-6 w-6' />) 
            : ( <FontAwesomeIcon icon={faBellSlash} className='h-6 w-6' />)}
          </button>
          </div>
  
        <div className="relative flex flex-col">
          <div className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer"
          onClick={toggleUser}>
          <img className="h-8 w-8 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="User"/>
          <div className="text-sm">
            <p className="text-gray-800 font-semibold">Welcome User</p>
            <p className="text-gray-500">Admin</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-auto transition-transform ${isUserOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </div>
        {isUserOpen && (
        <div className="absolute right-0 mt-14 w-full bg-white shadow-lg  flex flex-col space-y-1">
          <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Link to="/login"><span>Log In</span></Link>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Link to="/sign-in"><span>Sign Up</span></Link>
          </div>
        </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default TopNavbar;
