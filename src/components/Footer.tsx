import { Star, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/public/Logo.png"
                alt="muruka_nursery"
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">Muruka Nursery</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in creating beautiful, thriving gardens since
              1985.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                4.9/5 from 2,847 reviews
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("fruit-trees")}
                  className="hover:text-green-400 transition-colors"
                >
                  Fruit Trees
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("evergreen")}
                  className="hover:text-green-400 transition-colors"
                >
                  Evergreen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("shrubs")}
                  className="hover:text-green-400 transition-colors"
                >
                  Shrubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("flowering-trees")}
                  className="hover:text-green-400 transition-colors"
                >
                  Flowering Trees
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Plant Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">1-800-PLANTS-1</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@greengrovenursery.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">123 Garden Way, Plant City, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Muruka Nursery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
