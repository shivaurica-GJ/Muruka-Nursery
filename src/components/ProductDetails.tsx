import React from "react";
import { X } from "lucide-react";
import { Product } from "../data/products";

interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full sm:w-1/2 h-auto rounded-xl object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-2">
              {product.name}
            </h2>
            <p className="text-base text-gray-700 font-medium mb-2">
              Variety: <span className="text-gray-600">{product.variety}</span>
            </p>
            <p className="text-green-600 font-semibold text-xl mb-4">
              {product.price}
            </p>

            <p className="text-gray-600 text-sm sm:text-base mb-3">
              {product.description}
            </p>

            {product.fullDescription && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700 leading-relaxed mb-4">
                {product.fullDescription}
              </div>
            )}

            {product.youtubeUrl && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Watch Video
                </h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${product.youtubeUrl}?autoplay=1&mute=1`}
                    title={product.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {product.googleQuery && (
              <div className="mt-2">
                <a
                  href={`${product.googleQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Read More on Google
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
