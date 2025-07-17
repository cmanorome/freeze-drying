import React from 'react';
import { Thermometer, Zap, Droplets, Package } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: Thermometer,
      title: 'Freezing Phase',
      description: 'Product is frozen to -40°C to -80°C, creating ice crystals that preserve cellular structure.',
      details: [
        'Rapid freezing prevents large ice crystal formation',
        'Maintains product integrity and texture',
        'Temperature controlled environment',
        'Typical duration: 2-4 hours'
      ]
    },
    {
      icon: Zap,
      title: 'Primary Drying (Sublimation)',
      description: 'Frozen water sublimes directly from solid to vapor under vacuum and controlled heat.',
      details: [
        'Vacuum pressure: 0.1-0.3 mbar',
        'Temperature: -10°C to -30°C',
        'Removes 95% of water content',
        'Duration: 12-48 hours depending on product'
      ]
    },
    {
      icon: Droplets,
      title: 'Secondary Drying (Desorption)',
      description: 'Removes remaining bound water molecules through controlled temperature increase.',
      details: [
        'Temperature gradually increased to 20-60°C',
        'Removes final 2-5% of water',
        'Ensures product stability',
        'Duration: 4-12 hours'
      ]
    },
    {
      icon: Package,
      title: 'Packaging & Storage',
      description: 'Products are packaged in moisture-proof containers in controlled atmosphere.',
      details: [
        'Nitrogen or inert gas atmosphere',
        'Moisture-proof packaging materials',
        'Extended shelf life: 2-25 years',
        'Maintains nutritional value'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">The Freeze Drying Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced lyophilization technology follows a precise four-stage process to preserve 
            your products while maintaining their quality, nutritional value, and structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="section-subtitle">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Typical Process Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            <div className="space-y-8">
              {['0-4 hours: Freezing', '4-52 hours: Primary Drying', '52-64 hours: Secondary Drying', '64+ hours: Packaging'].map((timeline, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && <span className="text-gray-600 font-medium">{timeline}</span>}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && <span className="text-gray-600 font-medium">{timeline}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps; 