import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessPhase, ProductType } from '../App';

interface ProcessAnimationProps {
  currentPhase: ProcessPhase;
  speed: number;
  selectedProduct: ProductType;
}

const ProcessAnimation: React.FC<ProcessAnimationProps> = ({ 
  currentPhase, 
  speed, 
  selectedProduct 
}) => {
  const [waterMolecules, setWaterMolecules] = useState<Array<{id: number, x: number, y: number, state: 'liquid' | 'ice' | 'vapor'}>>([]);
  const [temperature, setTemperature] = useState(20);
  const [pressure, setPressure] = useState(1013);

  // Initialize water molecules
  useEffect(() => {
    const molecules = [];
    // Increase molecule count significantly to show high water content
    for (let i = 0; i < 150; i++) {
      molecules.push({
        id: i,
        x: Math.random() * 100, // Use percentage values
        y: Math.random() * 100, // Use percentage values
        state: 'liquid' as const
      });
    }
    setWaterMolecules(molecules);
  }, [selectedProduct]); // Regenerate when product changes

  // Update process based on phase
  useEffect(() => {
    switch (currentPhase) {
      case 'initial':
        setTemperature(20);
        setPressure(1013);
        // Ensure all molecules are liquid and well-distributed
        setWaterMolecules(prev => prev.map(m => ({ 
          ...m, 
          state: 'liquid' as const
        })));
        break;
      case 'freezing':
        setTemperature(-40);
        setPressure(1013);
        setWaterMolecules(prev => prev.map(m => ({ ...m, state: 'ice' })));
        break;
      case 'primary-drying':
        setTemperature(-20);
        setPressure(0.2);
        // Gradually convert ice to vapor
        setTimeout(() => {
          setWaterMolecules(prev => prev.map((m, i) => 
            i < prev.length * 0.7 ? { ...m, state: 'vapor' } : m
          ));
        }, 1000 / speed);
        break;
      case 'secondary-drying':
        setTemperature(40);
        setPressure(0.1);
        setWaterMolecules(prev => prev.map(m => ({ ...m, state: 'vapor' })));
        break;
      case 'complete':
        setTemperature(20);
        setPressure(1013);
        break;
    }
  }, [currentPhase, speed]);

  const getPhaseDescription = () => {
    const productExample = selectedProduct.examples[0];
    
    switch (currentPhase) {
      case 'initial':
        return `Fresh ${productExample.toLowerCase()} contains water molecules moving freely at room temperature`;
      case 'freezing':
        return `Temperature drops to -40°C, water in ${productExample.toLowerCase()} forms ice crystals that preserve cellular structure`;
      case 'primary-drying':
        return `Under vacuum, ice crystals in ${productExample.toLowerCase()} sublimate directly to vapor, preserving shape and nutrition`;
      case 'secondary-drying':
        return `Temperature rises to remove remaining bound water from ${productExample.toLowerCase()}`;
      case 'complete':
        return `Freeze-dried ${productExample.toLowerCase()} is complete - lightweight, preserved, and ready for long-term storage`;
      default:
        return '';
    }
  };

  const getProductVisual = () => {
    switch (selectedProduct.id) {
      case 'fruit':
        return {
          shape: 'rounded-lg',
          color: 'bg-red-500',
          texture: 'border-red-300',
          size: 'w-32 h-24'
        };
      case 'vegetables':
        return {
          shape: 'rounded-lg',
          color: 'bg-green-500',
          texture: 'border-green-300',
          size: 'w-32 h-24'
        };
      case 'meat':
        return {
          shape: 'rounded-lg',
          color: 'bg-amber-700',
          texture: 'border-amber-500',
          size: 'w-32 h-24'
        };
      case 'prepared':
        return {
          shape: 'rounded-lg',
          color: 'bg-orange-600',
          texture: 'border-orange-400',
          size: 'w-32 h-24'
        };
      default:
        return {
          shape: 'rounded-lg',
          color: 'bg-amber-800',
          texture: 'border-amber-600',
          size: 'w-32 h-24'
        };
    }
  };

  const productVisual = getProductVisual();

  return (
    <div className="bg-[#2B3D42] rounded-lg p-6 border border-[#69AEB1]">
      {/* Process Container */}
      <div className="relative h-96 bg-gradient-to-b from-[#2B3D42] to-[#138196] rounded-lg border-2 border-[#69AEB1] overflow-hidden">
        
        {/* Vacuum Chamber Visualization */}
        <div className="absolute inset-2 border border-[#A6D8C3] rounded bg-black/20">
          <div className="absolute top-2 left-2 text-xs text-[#A6D8C3]">
            Vacuum Chamber
          </div>
          
          {/* Product/Sample */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${productVisual.size} ${productVisual.color} ${productVisual.shape} border-2 ${productVisual.texture} flex items-center justify-center overflow-hidden`}>
            <div className="text-xs text-center text-white font-medium">
              {selectedProduct.emoji}
              <div className="mt-1">{selectedProduct.examples[0]}</div>
            </div>
            
            {/* Water Molecules Animation - Inside the product, filling entire container */}
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence>
                {waterMolecules.map((molecule) => (
                  <motion.div
                    key={molecule.id}
                    className={`absolute w-1 h-1 rounded-full ${
                      molecule.state === 'liquid' ? 'bg-blue-400 opacity-70' :
                      molecule.state === 'ice' ? 'bg-blue-200 opacity-80' :
                      'bg-blue-100 opacity-60'
                    }`}
                    style={{
                      left: `${5 + Math.random() * 90}%`,
                      top: `${5 + Math.random() * 90}%`
                    }}
                    animate={{
                      x: molecule.state === 'vapor' ? 
                        [0, Math.random() * 50 - 25, Math.random() * 100 + 50] :
                        molecule.state === 'liquid' ?
                        [Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3] :
                        [Math.random() * 2 - 1, Math.random() * 2 - 1],
                      y: molecule.state === 'vapor' ? 
                        [0, Math.random() * 30 - 15, -50] :
                        molecule.state === 'liquid' ?
                        [Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3] :
                        [Math.random() * 2 - 1, Math.random() * 2 - 1],
                      scale: molecule.state === 'ice' ? [1, 1.2, 1] : 
                             molecule.state === 'liquid' ? [0.8, 1, 0.8] : 1,
                      opacity: molecule.state === 'vapor' ? [0.7, 0.3, 0] : 
                               molecule.state === 'liquid' ? [0.7, 0.9, 0.7] :
                               [0.8, 0.6, 0.8]
                    }}
                    transition={{
                      duration: molecule.state === 'vapor' ? 2 / speed : 
                               molecule.state === 'liquid' ? 2.5 / speed : 
                               3 / speed,
                      repeat: molecule.state === 'liquid' ? Infinity : 
                             molecule.state === 'ice' ? Infinity : 0,
                      repeatType: 'reverse',
                      ease: molecule.state === 'liquid' ? 'easeInOut' : 
                           molecule.state === 'ice' ? 'linear' : 'linear'
                    }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
            
          {/* Vacuum Pump Indicator */}
          {(currentPhase === 'primary-drying' || currentPhase === 'secondary-drying') && (
            <motion.div
              className="absolute top-2 right-2 text-xs text-[#A6D8C3]"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Vacuum Pump Active
            </motion.div>
          )}

          {/* Heat Source */}
          {(currentPhase === 'primary-drying' || currentPhase === 'secondary-drying') && (
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[#F26A4B] to-transparent">
              <motion.div
                className="h-full bg-gradient-to-r from-[#F26A4B] via-orange-500 to-[#F26A4B]"
                animate={{ x: [-100, 100, -100] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          )}

          {/* Ice Crystals Effect */}
          {currentPhase === 'freezing' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#A6D8C3] rotate-45"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 45 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>
          )}

          {/* Product Structure Preservation Indicator */}
          {currentPhase === 'complete' && (
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-xs text-[#A6D8C3] bg-[#138196]/80 px-2 py-1 rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              ✓ Structure Preserved
            </motion.div>
          )}
        </div>

        {/* Condenser */}
        <div className="absolute top-4 right-4 w-16 h-24 bg-[#2B3D42] rounded border border-[#69AEB1]">
          <div className="text-xs text-center text-[#F5F9F8] pt-1">Condenser</div>
          <div className="text-xs text-center text-[#A6D8C3]">-80°C</div>
          
          {/* Collected vapor */}
          {(currentPhase === 'primary-drying' || currentPhase === 'secondary-drying') && (
            <motion.div
              className="absolute bottom-2 left-2 right-2 bg-[#69AEB1] rounded"
              initial={{ height: 0 }}
              animate={{ height: 20 }}
              transition={{ duration: 2 }}
            />
          )}
        </div>
      </div>

      {/* Process Information */}
      <div className="mt-4 p-4 bg-[#2B3D42] rounded">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-[#A6D8C3]">Temperature: </span>
            <span className={`font-bold ${temperature < 0 ? 'text-[#69AEB1]' : temperature > 20 ? 'text-[#F26A4B]' : 'text-[#A6D8C3]'}`}>
              {temperature}°C
            </span>
          </div>
          <div>
            <span className="text-[#A6D8C3]">Pressure: </span>
            <span className={`font-bold ${pressure < 10 ? 'text-[#138196]' : 'text-[#A6D8C3]'}`}>
              {pressure} mbar
            </span>
          </div>
        </div>
        <p className="text-sm text-[#F5F9F8]">{getPhaseDescription()}</p>
        
        {/* Product Benefits */}
        {currentPhase === 'complete' && (
          <div className="mt-3 p-3 bg-[#A6D8C3]/20 rounded border border-[#A6D8C3]">
            <h4 className="text-sm font-semibold text-[#A6D8C3] mb-2">
              Freeze-Dried {selectedProduct.examples[0]} Benefits:
            </h4>
            <div className="text-xs text-[#F5F9F8] grid grid-cols-2 gap-2">
              <div>• 95%+ nutrition retained</div>
              <div>• Original taste preserved</div>
              <div>• 80% weight reduction</div>
              <div>• 2-25 year shelf life</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessAnimation; 