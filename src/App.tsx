import React, { useState } from 'react';
import ProcessAnimation from './components/ProcessAnimation';
import ControlPanel from './components/ControlPanel';
import TemperaturePressureChart from './components/TemperaturePressureChart';
import PhaseIndicator from './components/PhaseIndicator';
import ProductSelector from './components/ProductSelector';

export type ProcessPhase = 'initial' | 'freezing' | 'primary-drying' | 'secondary-drying' | 'complete';

export type ProductType = {
  id: string;
  name: string;
  color: string;
  examples: string[];
  description: string;
  emoji: string;
};

export const PRODUCT_TYPES: ProductType[] = [
  {
    id: 'fruit',
    name: 'Fruits',
    color: 'bg-red-600',
    examples: ['Strawberries', 'Apples', 'Bananas', 'Blueberries'],
    description: 'High water content fruits that preserve their shape and nutrition',
    emoji: '🍓'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    color: 'bg-green-600',
    examples: ['Carrots', 'Peas', 'Corn', 'Bell Peppers'],
    description: 'Nutrient-rich vegetables that maintain their cellular structure',
    emoji: '🥕'
  },
  {
    id: 'meat',
    name: 'Meat & Protein',
    color: 'bg-amber-700',
    examples: ['Beef', 'Chicken', 'Fish', 'Turkey'],
    description: 'Protein-rich foods that retain texture and flavor',
    emoji: '🥩'
  },
  {
    id: 'prepared',
    name: 'Dairy',
    color: 'bg-orange-600',
    examples: ['Milk', 'Cheese', 'Yogurt', 'Ice Cream'],
    description: 'Dairy products that preserve nutritional value and extend shelf life',
    emoji: '🥛'
  }
];

function App() {
  const [currentPhase, setCurrentPhase] = useState<ProcessPhase>('initial');
  const [speed, setSpeed] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(PRODUCT_TYPES[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#138196] via-[#69AEB1] to-[#A6D8C3] text-[#F5F9F8]">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-[#F26A4B] to-[#A6D8C3] bg-clip-text text-transparent">
            Freeze Drying Process Animation
          </h1>
          <p className="text-lg md:text-xl text-[#A6D8C3]">
            Interactive visualization of lyophilization - the science of sublimation
          </p>
        </div>

        {/* Product Selector - More compact on mobile */}
        <div className="mb-4">
          <ProductSelector 
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            products={PRODUCT_TYPES}
          />
        </div>

        {/* Mobile-Optimized Layout */}
        <div className="space-y-4">
          
          {/* Animation Section */}
          <div>
            <ProcessAnimation 
              currentPhase={currentPhase} 
              speed={speed}
              selectedProduct={selectedProduct}
            />
          </div>

          {/* Essential Controls - Right below animation for mobile */}
          <div className="lg:hidden">
            <ControlPanel 
              currentPhase={currentPhase}
              setCurrentPhase={setCurrentPhase}
              speed={speed}
              setSpeed={setSpeed}
              isMobile={true}
            />
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {/* Left - Phase Indicator */}
            <div>
              <PhaseIndicator currentPhase={currentPhase} selectedProduct={selectedProduct} />
            </div>
            
            {/* Right - Control Panel */}
            <div>
              <ControlPanel 
                currentPhase={currentPhase}
                setCurrentPhase={setCurrentPhase}
                speed={speed}
                setSpeed={setSpeed}
                isMobile={false}
              />
            </div>
          </div>

          {/* Mobile Phase Indicator - Below controls */}
          <div className="lg:hidden">
            <PhaseIndicator currentPhase={currentPhase} selectedProduct={selectedProduct} />
          </div>

          {/* Temperature/Pressure Chart - Bottom for all devices */}
          <div className="mt-6">
            <TemperaturePressureChart currentPhase={currentPhase} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App; 