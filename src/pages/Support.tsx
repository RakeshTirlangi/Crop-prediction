import React from "react";
import { MessageSquare, HelpCircle } from "lucide-react";

const Support = () => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement chatbot/support logic
    console.log(message);
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <MessageSquare className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Krishi Mitra</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-gray-50 rounded-lg p-4 h-96 mb-4 overflow-y-auto">
              {/* Example chat messages */}
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-green-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">
                      Hello! How can I help you today with your farming queries?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Send
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-green-600" />
                Quick Help
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-green-50 rounded">
                  How to interpret soil test results?
                </button>
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-green-50 rounded">
                  Understanding crop recommendations
                </button>
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-green-50 rounded">
                  Setting up weather alerts
                </button>
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-green-50 rounded">
                  Community guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
