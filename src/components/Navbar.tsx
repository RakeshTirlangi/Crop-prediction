import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Home, MessageSquare, Bell, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8" />
            <span className="font-bold text-xl">SwayamShakthi</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-green-200">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/recommend" className="flex items-center space-x-1 hover:text-green-200">
              <Sprout className="h-5 w-5" />
              <span>Get Recommendations</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 hover:text-green-200">
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
            <Link to="/alerts" className="flex items-center space-x-1 hover:text-green-200">
              <Bell className="h-5 w-5" />
              <span>Alerts</span>
            </Link>
            <Link to="/support" className="flex items-center space-x-1 hover:text-green-200">
              <MessageSquare className="h-5 w-5" />
              <span>Support</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;