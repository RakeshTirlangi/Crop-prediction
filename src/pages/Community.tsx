import React from 'react';
import { Users, MessageSquare, ThumbsUp } from 'lucide-react';

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-6">
        <Users className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Farmer Community</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="space-y-6">
            {/* Example community post */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=40&h=40"
                  alt="User"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium">Rajesh Kumar</h3>
                  <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Had great success with organic farming techniques this season. The soil quality has improved significantly!
              </p>
              <div className="flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-green-600">
                  <ThumbsUp className="h-5 w-5" />
                  <span>24 Likes</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-600">
                  <MessageSquare className="h-5 w-5" />
                  <span>12 Comments</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h3 className="text-lg font-medium mb-4">Popular Topics</h3>
          <div className="space-y-3">
            <a href="#" className="block p-3 rounded-lg hover:bg-green-50">
              <p className="font-medium text-gray-900">Organic Farming</p>
              <p className="text-sm text-gray-500">156 discussions</p>
            </a>
            <a href="#" className="block p-3 rounded-lg hover:bg-green-50">
              <p className="font-medium text-gray-900">Pest Control</p>
              <p className="text-sm text-gray-500">98 discussions</p>
            </a>
            <a href="#" className="block p-3 rounded-lg hover:bg-green-50">
              <p className="font-medium text-gray-900">Water Management</p>
              <p className="text-sm text-gray-500">72 discussions</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;