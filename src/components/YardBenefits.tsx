import { Smartphone, Trees, Sprout, UserCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Smartphone className="w-8 h-8 text-white" />,
    title: 'Skip the trip',
    description: 'Order your plants and trees online',
  },
  {
    icon: <Trees className="w-8 h-8 text-white" />,
    title: 'Extensive selection',
    description: 'All the plants your yard needs',
  },
  {
    icon: <Sprout className="w-8 h-8 text-white" />,
    title: 'Enduring quality',
    description: 'Grown with care, guaranteed to thrive',
  },
  {
    icon: <UserCheck className="w-8 h-8 text-white" />,
    title: 'Support and expertise',
    description: 'Advice to get and keep you growing',
  },
];

const YardBenefits = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
          Your dream yard, without the hassle
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mx-auto mb-4 bg-green-800 rounded-full w-16 h-16 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 mt-2 text-m">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YardBenefits;
