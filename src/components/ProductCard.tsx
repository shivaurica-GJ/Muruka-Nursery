import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  name: string;
  variety: string;
  price: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  accentColor?: string;
  category: string;
  onClick?: (product: Product) => void; // ✅ NEW
}

const ProductCard = ({ product, accentColor = 'green', category, onClick }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const getAccentColorClasses = (color: string) => {
    switch (color) {
      case 'pink':
        return 'text-pink-600';
      case 'red':
        return 'text-red-500';
      default:
        return 'text-green-600';
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // ✅ Prevent click propagation to card
    const priceNumber = parseFloat(product.price.replace('$', ''));
    const productId = `${category}-${product.name.toLowerCase().replace(/\s+/g, '-')}-${product.variety.toLowerCase().replace(/\s+/g, '-')}`;
    
    addToCart({
      id: productId,
      name: product.name,
      variety: product.variety,
      price: priceNumber,
      image: product.image,
      category
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div
      onClick={() => onClick?.(product)} // ✅ Opens modal on card click
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} - ${product.variety}`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className={`${getAccentColorClasses(accentColor)} font-medium mb-2`}>
          {product.variety}
        </p>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <span className="text-xl sm:text-2xl font-bold text-green-600">
            {product.price}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`px-4 sm:px-6 py-2 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base ${
              isAdded
                ? 'bg-green-100 text-green-700 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
