import React from 'react';
import { ProductType } from '../App';

interface ProductSelectorProps {
  selectedProduct: ProductType;
  setSelectedProduct: (product: ProductType) => void;
  products: ProductType[];
}

const ProductSelector: React.FC<ProductSelectorProps> = ({
  selectedProduct,
  setSelectedProduct,
  products
}) => {
  return (
    <div className="bg-[#2B3D42] rounded-lg p-4 border border-[#69AEB1]">
      <h3 className="text-base md:text-lg font-semibold mb-3 text-[#138196]">Select Product Type</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={`p-3 md:p-4 rounded-lg border-2 transition-all duration-200 min-h-[80px] md:min-h-[100px] flex flex-col items-center justify-center ${
              selectedProduct.id === product.id
                ? 'border-[#F26A4B] bg-[#F26A4B]/20 text-[#F5F9F8]'
                : 'border-[#69AEB1] bg-[#138196]/30 text-[#F5F9F8] hover:border-[#A6D8C3] hover:bg-[#69AEB1]/30'
            }`}
          >
            <div className="text-center flex flex-col items-center gap-1">
              <div className="text-2xl md:text-3xl">{product.emoji}</div>
              <div className="font-medium text-sm md:text-base leading-tight">{product.name}</div>
              <div className="text-xs opacity-75 hidden md:block text-center">
                {product.examples[0]}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Product Info - Simplified on mobile */}
      <div className="mt-3 p-3 bg-[#138196]/30 rounded border border-[#69AEB1]">
        <div className="flex items-center gap-2 md:gap-3 mb-2">
          <span className="text-xl md:text-2xl">{selectedProduct.emoji}</span>
          <h4 className="font-semibold text-[#F5F9F8] text-sm md:text-base">{selectedProduct.name}</h4>
        </div>
        <p className="text-xs md:text-sm text-[#A6D8C3] mb-2 md:mb-3">{selectedProduct.description}</p>
        
        <div className="text-xs text-[#69AEB1]">
          <span className="font-medium">Examples: </span>
          {selectedProduct.examples.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default ProductSelector; 