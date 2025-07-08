import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { products, Product } from '../data/products';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar = ({ isOpen, onClose }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 2) {
      const allProducts = [
        ...products.fruitTrees,
        ...products.evergreen,
        ...products.shrubs,
        ...products.floweringTrees
      ];
      
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.variety.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search for plants, trees, or varieties..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        {searchResults.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {searchResults.map((product, index) => (
              <div key={index} className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-green-600 text-sm">{product.variety}</p>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
                <span className="text-lg font-bold text-green-600">{product.price}</span>
              </div>
            ))}
          </div>
        )}
        
        {searchTerm.length > 2 && searchResults.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No plants found matching "{searchTerm}"</p>
            <p className="text-sm mt-2">Try searching for different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;