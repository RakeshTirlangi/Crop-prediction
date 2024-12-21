import React from 'react';
import { ThermometerSun, Cloud, Droplets, Sun } from 'lucide-react';
import { ClimateParameters } from '../../types/recommendation';

interface Props {
  values: ClimateParameters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClimateParametersForm: React.FC<Props> = ({ values, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 flex items-center">
        <Cloud className="h-5 w-5 mr-2 text-green-600" />
        Climate Parameters
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Temperature (°C)
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ThermometerSun className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="climate.temperature"
                value={values.temperature}
                onChange={onChange}
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter average temperature"
              />
            </div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Annual Rainfall (mm)
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Droplets className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="climate.rainfall"
                min="0"
                value={values.rainfall}
                onChange={onChange}
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter annual rainfall"
              />
            </div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Humidity (%)
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Cloud className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="climate.humidity"
                min="0"
                max="100"
                value={values.humidity}
                onChange={onChange}
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter average humidity"
              />
            </div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Daily Sunlight (hours)
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Sun className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="climate.sunlight"
                min="0"
                max="24"
                value={values.sunlight}
                onChange={onChange}
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter daily sunlight hours"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClimateParametersForm;