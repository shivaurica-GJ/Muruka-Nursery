import { ShoppingCart, ChevronRight } from 'lucide-react';
import gardenImage from '/public/images/hero.jpg'; // make sure image is in this path

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden h-[100vh]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={gardenImage}
          alt="Garden background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 leading-tight mb-6">
          Grow Your Dream
          <span className="block text-emerald-600">Garden Today</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your outdoor space with our premium selection of trees, shrubs, and plants.
          From fruit-bearing trees to stunning flowering varieties, we have everything you need
          to create your perfect garden oasis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('fruit-trees')}
            className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Shop Now</span>
          </button>
          <button
            onClick={() => scrollToSection('flowering-trees')}
            className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>View Collection</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
