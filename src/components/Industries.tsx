import React from 'react';
import { Apple, Pill, Utensils, Beaker, Coffee, Sparkles } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Apple,
      title: 'Food & Beverage',
      description: 'Preserve fruits, vegetables, meals, and beverages while maintaining taste and nutrition.',
      applications: [
        'Instant coffee and tea',
        'Dried fruits and vegetables',
        'Ready-to-eat meals',
        'Herbs and spices',
        'Dairy products'
      ],
      caseStudy: 'Reduced shipping costs by 60% for a major snack manufacturer'
    },
    {
      icon: Pill,
      title: 'Pharmaceuticals',
      description: 'Stabilize vaccines, biologics, and sensitive medications for global distribution.',
      applications: [
        'Vaccines and biologics',
        'Antibiotics and proteins',
        'Diagnostic reagents',
        'Probiotics',
        'Injectable medications'
      ],
      caseStudy: 'Extended vaccine shelf life from 6 months to 3 years'
    },
    {
      icon: Utensils,
      title: 'Nutraceuticals',
      description: 'Preserve active compounds in supplements and functional foods.',
      applications: [
        'Vitamin supplements',
        'Probiotics',
        'Herbal extracts',
        'Functional foods',
        'Sports nutrition'
      ],
      caseStudy: 'Maintained 95% potency of probiotics for 2 years'
    },
    {
      icon: Beaker,
      title: 'Biotechnology',
      description: 'Preserve enzymes, cultures, and biological samples for research and production.',
      applications: [
        'Enzyme preparations',
        'Microbial cultures',
        'Blood plasma',
        'Cell cultures',
        'Research samples'
      ],
      caseStudy: 'Enabled room-temperature storage of enzyme products'
    },
    {
      icon: Coffee,
      title: 'Instant Products',
      description: 'Create high-quality instant versions of beverages and food products.',
      applications: [
        'Instant coffee',
        'Instant soups',
        'Beverage powders',
        'Flavorings',
        'Instant meals'
      ],
      caseStudy: 'Improved instant coffee quality by 40% vs. spray drying'
    },
    {
      icon: Sparkles,
      title: 'Cosmetics & Personal Care',
      description: 'Preserve active ingredients in skincare and cosmetic formulations.',
      applications: [
        'Anti-aging serums',
        'Collagen products',
        'Natural extracts',
        'Peptide formulations',
        'Sensitive actives'
      ],
      caseStudy: 'Stabilized vitamin C serum with 90% activity retention'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our freeze drying solutions cater to diverse industries, each with unique requirements 
            for product preservation and quality maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="card hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <industry.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="section-subtitle">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Applications:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-400">
                <h4 className="font-semibold text-primary-800 mb-1">Success Story:</h4>
                <p className="text-sm text-primary-700">{industry.caseStudy}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-primary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our Impact Across Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-200">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-200">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-primary-200">Products Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-primary-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 