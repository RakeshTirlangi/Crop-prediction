import React from 'react';
import { Bell, CloudRain, Bug, Thermometer } from 'lucide-react';

const Alerts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-6">
        <Bell className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Alerts & Notifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CloudRain className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Weather Alert</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  Heavy rainfall expected in your region over the next 48 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Bug className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Pest Alert</h3>
                <p className="text-sm text-red-700 mt-1">
                  Increased risk of aphid infestation in wheat crops.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Thermometer className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Temperature Alert</h3>
                <p className="text-sm text-blue-700 mt-1">
                  Frost warning: Protect sensitive crops tonight.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Alert Settings</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" checked />
                <span className="text-gray-700">Weather Alerts</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" checked />
                <span className="text-gray-700">Pest Alerts</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" checked />
                <span className="text-gray-700">Market Price Alerts</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;