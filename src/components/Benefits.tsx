import React from 'react';
import { Clock, Shield, TrendingUp, Leaf, Scale, Globe } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Extended Shelf Life',
      description: 'Products can last 2-25 years without refrigeration',
      stats: 'Up to 25 years shelf life',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Nutrient Preservation',
      description: 'Maintains 97% of nutritional value and original taste',
      stats: '97% nutrient retention',
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Reduced Logistics Costs',
      description: 'Lightweight products reduce shipping and storage costs',
      stats: '80% weight reduction',
      color: 'bg-purple-500'
    },
    {
      icon: Leaf,
      title: 'No Additives Required',
      description: 'Chemical-free preservation process',
      stats: '100% natural process',
      color: 'bg-emerald-500'
    },
    {
      icon: Scale,
      title: 'Scalable Production',
      description: 'From small batches to industrial-scale operations',
      stats: '1kg to 10,000kg batches',
      color: 'bg-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Stable products for worldwide shipping',
      stats: 'Stable at room temperature',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Freeze Drying?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Freeze drying offers unparalleled advantages for businesses looking to preserve, 
            package, and distribute high-quality products globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="section-subtitle">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <span className="text-sm font-semibold text-gray-800">{benefit.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Freeze Drying vs. Traditional Methods</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Freeze Drying
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Air Drying
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Canning
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Shelf Life
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                      2-25 years
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      6-12 months
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2-5 years
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Nutrient Retention
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                      97%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      60-80%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      70-85%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Weight Reduction
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                      80%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      50-70%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      None
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Additives Required
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                      None
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Often
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 