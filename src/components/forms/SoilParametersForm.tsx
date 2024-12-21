import React from 'react';
import { Droplets, Flower, Beaker } from 'lucide-react';
import { SoilParameters } from '../../types/recommendation';

interface Props {
  values: SoilParameters;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const SoilParametersForm: React.FC<Props> = ({ values, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 flex items-center">
        <Beaker className="h-5 w-5 mr-2 text-green-600" />
        Soil Parameters
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Soil pH
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Beaker className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="soil.ph"
                step="0.1"
                min="0"
                max="14"
                value={values.ph}
                onChange={onChange}
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter pH (0-14)"
              />
            </div>
          </label>
        </div>

        {/* Rest of the component remains unchanged */}
      </div>
    </div>
  );
};

export default SoilParametersForm;