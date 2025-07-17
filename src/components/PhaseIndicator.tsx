import React from 'react';
import { Thermometer, Snowflake, Zap, Droplets, CheckCircle } from 'lucide-react';
import { ProcessPhase, ProductType } from '../App';

interface PhaseIndicatorProps {
  currentPhase: ProcessPhase;
  selectedProduct: ProductType;
}

const PhaseIndicator: React.FC<PhaseIndicatorProps> = ({ currentPhase, selectedProduct }) => {
  const getPhaseData = () => {
    const productExample = selectedProduct.examples[0];
    
    return {
      'initial': {
        icon: Thermometer,
        title: 'Initial State',
        description: `Fresh ${productExample.toLowerCase()} at room temperature`,
        color: 'text-green-400',
        bgColor: 'bg-green-900/50'
      },
      'freezing': {
        icon: Snowflake,
        title: 'Freezing Phase',
        description: `Rapid cooling forms ice crystals in ${productExample.toLowerCase()}`,
        color: 'text-blue-400',
        bgColor: 'bg-blue-900/50'
      },
      'primary-drying': {
        icon: Zap,
        title: 'Primary Drying',
        description: `Sublimation removes ice from ${productExample.toLowerCase()}`,
        color: 'text-purple-400',
        bgColor: 'bg-purple-900/50'
      },
      'secondary-drying': {
        icon: Droplets,
        title: 'Secondary Drying',
        description: `Final moisture removal from ${productExample.toLowerCase()}`,
        color: 'text-orange-400',
        bgColor: 'bg-orange-900/50'
      },
      'complete': {
        icon: CheckCircle,
        title: 'Process Complete',
        description: `Freeze-dried ${productExample.toLowerCase()} achieved`,
        color: 'text-green-400',
        bgColor: 'bg-green-900/50'
      }
    };
  };

  const phaseData = getPhaseData();
  const current = phaseData[currentPhase];
  const Icon = current.icon;

  const getProductSpecificDetails = () => {
    const productName = selectedProduct.examples[0];
    
    switch (currentPhase) {
      case 'initial':
        return {
          waterContent: selectedProduct.id === 'meat' ? '70-75%' : selectedProduct.id === 'fruit' ? '85-95%' : '80-90%',
          structure: 'Cellular integrity intact',
          nutrients: 'All nutrients present'
        };
      case 'freezing':
        return {
          crystalSize: 'Small ice crystals formed',
          cellDamage: 'Minimal cell wall damage',
          timeRequired: '2-4 hours for ' + productName.toLowerCase()
        };
      case 'primary-drying':
        return {
          waterRemoved: '95% of water sublimated',
          shapeRetention: 'Original shape maintained',
          duration: selectedProduct.id === 'meat' ? '24-48 hours' : '12-24 hours'
        };
      case 'secondary-drying':
        return {
          finalMoisture: selectedProduct.id === 'meat' ? '<2%' : '<5%',
          bindingRemoval: 'Bound water eliminated',
          qualityCheck: 'Final quality verification'
        };
      case 'complete':
        return {
          shelfLife: selectedProduct.id === 'fruit' ? '25+ years' : selectedProduct.id === 'meat' ? '15+ years' : '20+ years',
          weightReduction: '80% lighter than original',
          nutritionRetention: '97% of original nutrition'
        };
      default:
        return {};
    }
  };

  const productDetails = getProductSpecificDetails();

  return (
    <div className={`bg-gray-900 rounded-lg p-6 border border-gray-700 ${current.bgColor}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-full bg-gray-800 ${current.color}`}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{current.title}</h3>
          <p className="text-gray-300">{current.description}</p>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="space-y-2">
        <div className="text-sm text-gray-400 mb-2">Process Timeline</div>
        <div className="flex items-center gap-2">
          {Object.keys(phaseData).map((phase, index) => {
            const isActive = phase === currentPhase;
            const isCompleted = Object.keys(phaseData).indexOf(currentPhase) > index;
            
            return (
              <React.Fragment key={phase}>
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    isActive
                      ? 'bg-blue-500 border-blue-500'
                      : isCompleted
                      ? 'bg-green-500 border-green-500'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                />
                {index < Object.keys(phaseData).length - 1 && (
                  <div
                    className={`flex-1 h-0.5 transition-colors ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Step {Object.keys(phaseData).indexOf(currentPhase) + 1} of {Object.keys(phaseData).length}
        </div>
      </div>

      {/* Scientific Details */}
      <div className="mt-4 p-3 bg-gray-800 rounded border border-gray-700">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">
          {selectedProduct.examples[0]} Processing Details
        </h4>
        <div className="text-sm text-gray-300">
          {currentPhase === 'initial' && (
            <div>
              <div>• Temperature: ~20°C</div>
              <div>• Pressure: 1013 mbar (atmospheric)</div>
              <div>• Water content: {productDetails.waterContent}</div>
              <div>• {productDetails.structure}</div>
            </div>
          )}
          {currentPhase === 'freezing' && (
            <div>
              <div>• Temperature: -40°C to -80°C</div>
              <div>• Pressure: 1013 mbar</div>
              <div>• {productDetails.crystalSize}</div>
              <div>• {productDetails.cellDamage}</div>
            </div>
          )}
          {currentPhase === 'primary-drying' && (
            <div>
              <div>• Temperature: -10°C to -30°C</div>
              <div>• Pressure: 0.1-0.3 mbar</div>
              <div>• {productDetails.waterRemoved}</div>
              <div>• Duration: {productDetails.duration}</div>
            </div>
          )}
          {currentPhase === 'secondary-drying' && (
            <div>
              <div>• Temperature: 20°C to 60°C</div>
              <div>• Pressure: {'<'}0.1 mbar</div>
              <div>• Final moisture: {productDetails.finalMoisture}</div>
              <div>• {productDetails.bindingRemoval}</div>
            </div>
          )}
          {currentPhase === 'complete' && (
            <div>
              <div>• Shelf life: {productDetails.shelfLife}</div>
              <div>• Weight: {productDetails.weightReduction}</div>
              <div>• Nutrition: {productDetails.nutritionRetention}</div>
              <div>• Ready for packaging</div>
            </div>
          )}
        </div>
      </div>

      {/* Product-Specific Benefits */}
      {currentPhase === 'complete' && (
        <div className="mt-4 p-3 bg-blue-900/30 rounded border border-blue-700">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">
            Why Freeze-Dry {selectedProduct.examples[0]}?
          </h4>
          <div className="text-xs text-blue-300">
            {selectedProduct.id === 'fruit' && (
              <>
                <div>• Maintains natural sweetness and vitamins</div>
                <div>• Perfect for snacks and cereals</div>
                <div>• Lightweight for hiking and camping</div>
              </>
            )}
            {selectedProduct.id === 'vegetables' && (
              <>
                <div>• Preserves nutrients and minerals</div>
                <div>• Ideal for soups and instant meals</div>
                <div>• No additives or preservatives needed</div>
              </>
            )}
            {selectedProduct.id === 'meat' && (
              <>
                <div>• Retains protein structure and taste</div>
                <div>• Extended storage without refrigeration</div>
                <div>• Perfect for emergency food supplies</div>
              </>
            )}
            {selectedProduct.id === 'prepared' && (
              <>
                <div>• Complete meals ready in minutes</div>
                <div>• Maintains complex flavors and textures</div>
                <div>• Convenient for busy lifestyles</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhaseIndicator; 