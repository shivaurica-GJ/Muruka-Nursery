import { useState } from 'react';
import { Users, Phone, Video, MessageSquare, X, Calendar, Clock } from 'lucide-react';

const ExpertConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 z-40 flex items-center space-x-2"
      >
        <Users className="w-5 h-5" />
        <span className="font-medium">Talk to Expert</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-y-auto scrollbar-thin h-[80vh]">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-green-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Plant Expert Consultation</h2>
              <p className="text-blue-100 text-sm">Get personalized gardening advice</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Choose your consultation method:</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <Phone className="w-6 h-6 text-black-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-800">Phone Call</p>
                  <p className="text-sm text-gray-600">15-30 min consultation</p>
                </div>
                <span className="ml-auto text-green-600 font-semibold">Free</span>
              </button>
              
              <button className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <Video className="w-6 h-6 text-black-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-800">Video Call</p>
                  <p className="text-sm text-gray-600">30-45 min detailed session</p>
                </div>
                <span className="ml-auto text-orange-600 font-semibold">$25</span>
              </button>
              
              <button className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <MessageSquare className="w-6 h-6 text-black-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-800">Chat Session</p>
                  <p className="text-sm text-gray-600">Real-time messaging support</p>
                </div>
                <span className="ml-auto text-green-600 font-semibold">Free</span>
              </button>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">Available Today</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-green-700">
              <Clock className="w-4 h-4" />
              <span>Next available: 2:30 PM - 6:00 PM</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Our experts can help with:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Plant selection for your climate</li>
              <li>• Garden design and layout</li>
              <li>• Plant care and maintenance</li>
              <li>• Pest and disease identification</li>
              <li>• Soil preparation and fertilization</li>
            </ul>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-6">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertConsultation;