import { ReactNode } from 'react';
import ProductCard from './ProductCard';

interface Product {
  name: string;
  variety: string;
  price: string;
  image: string;
  description: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  products: Product[];
  backgroundColor?: string;
  accentColor?: string;
}

const ProductSection = ({ 
  id, 
  title, 
  description, 
  icon, 
  products, 
  backgroundColor = 'bg-white',
  accentColor = 'green'
}: ProductSectionProps) => {
  return (
    <section id={id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            {icon}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 ml-3">{title}</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              accentColor={accentColor}
              category={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;