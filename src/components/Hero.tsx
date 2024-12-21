import React from 'react';
import { Sprout, Droplets, Thermometer, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Smart Farming with</span>
              <span className="block text-green-600">Data-Driven Insights</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Get personalized crop recommendations based on your soil conditions and local climate. 
              Maximize your yield with scientific farming practices.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <Link
                to="/recommend"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Get Started
                <Sprout className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500" />
                <h3 className="mt-2 text-lg font-medium">Soil Analysis</h3>
                <p className="mt-2 text-gray-500">Get detailed soil insights</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Thermometer className="h-8 w-8 text-red-500" />
                <h3 className="mt-2 text-lg font-medium">Climate Data</h3>
                <p className="mt-2 text-gray-500">Weather-based planning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Sprout className="h-8 w-8 text-green-500" />
                <h3 className="mt-2 text-lg font-medium">Crop Selection</h3>
                <p className="mt-2 text-gray-500">Smart recommendations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-purple-500" />
                <h3 className="mt-2 text-lg font-medium">Real-time Alerts</h3>
                <p className="mt-2 text-gray-500">Stay informed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;