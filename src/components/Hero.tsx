import React from 'react';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Freeze Drying
              <span className="text-primary-200"> Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Transform your products with our cutting-edge lyophilization technology. 
              Preserve quality, extend shelf life, and reduce weight while maintaining 
              nutritional value and structural integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Explore Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Request Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-primary-200">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm">FDA Compliant</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                <span className="text-sm">99.5% Efficiency</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm">Industry Leader</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Freeze Drying Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Freezing Phase</span>
                    <div className="w-20 h-2 bg-primary-300 rounded-full">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Primary Drying</span>
                    <div className="w-20 h-2 bg-primary-300 rounded-full">
                      <div className="w-3/4 h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Secondary Drying</span>
                    <div className="w-20 h-2 bg-primary-300 rounded-full">
                      <div className="w-1/2 h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 