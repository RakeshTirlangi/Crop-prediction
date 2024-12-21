import React, { useState } from 'react';
import { Sprout } from 'lucide-react';
import SoilParametersForm from '../components/forms/SoilParametersForm';
import ClimateParametersForm from '../components/forms/ClimateParametersForm';
import type { RecommendationFormData } from '../types/recommendation';

const Recommend = () => {
  const [formData, setFormData] = useState<RecommendationFormData>({
    soil: {
      ph: '',
      moisture: '',
      texture: 'loamy',
      organicMatter: '',
      nitrogen: '',
      phosphorus: '',
      potassium: '',
    },
    climate: {
      temperature: '',
      rainfall: '',
      humidity: '',
      sunlight: '',
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call for recommendations
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof RecommendationFormData],
        [field]: value,
      },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Sprout className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Get Crop Recommendations</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <SoilParametersForm values={formData.soil} onChange={handleChange} />
          <div className="border-t border-gray-200 pt-6">
            <ClimateParametersForm values={formData.climate} onChange={handleChange} />
          </div>

          <div className="border-t border-gray-200 pt-6 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Get Recommendations
              <Sprout className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recommend;