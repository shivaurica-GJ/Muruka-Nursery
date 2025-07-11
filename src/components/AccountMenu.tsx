import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  LogIn,
  UserPlus,
  Settings,
  Package,
  Heart,
  LogOut
} from 'lucide-react';

interface AccountMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountMenu = ({ isOpen, onClose }: AccountMenuProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
      {!isLoggedIn ? (
        <div className="p-4">
          <div className="text-center mb-4">
            <User className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600">Welcome to GreenGrove</p>
          </div>
          <div className="space-y-2">
            <button 
              onClick={() => {
                onClose();
                navigate('/login');
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-green-50 rounded-lg transition-colors"
            >
              <LogIn className="w-5 h-5 text-green-600" />
              <span>Sign In</span>
            </button>
            <button 
              onClick={() => {
                onClose();
                navigate('/signup');
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-green-50 rounded-lg transition-colors"
            >
              <UserPlus className="w-5 h-5 text-green-600" />
              <span>Create Account</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">John Gardener</p>
              <p className="text-sm text-gray-600">john@example.com</p>
            </div>
          </div>
          <div className="space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <Package className="w-5 h-5 text-gray-600" />
              <span>My Orders</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
              <span>Wishlist</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
              <span>Account Settings</span>
            </button>
            <hr className="my-2" />
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
