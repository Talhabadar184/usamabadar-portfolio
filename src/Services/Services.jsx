import React from 'react';

const services = [
  {
    // icon: <Briefcase className="text-pink-500 w-8 h-8" />,
    title: 'Ullam',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio.',
  },
  {
    // icon: <FileText className="text-pink-500 w-8 h-8" />,
    title: 'Asperiores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio.',
  },
  {
    // icon: <Clock className="text-pink-500 w-8 h-8" />,
    title: 'Tempora',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio.',
  },
  {
    // icon: <Gift className="text-pink-500 w-8 h-8" />,
    title: 'Provident',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio.',
  },
  {
    // icon: <BarChart className="text-pink-500 w-8 h-8" />,
    title: 'Consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio.',
  },
  {
    // icon: <Plus className="text-pink-500 w-8 h-8" />,
    title: 'Veritatis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          <span className="text-pink-500 font-bold">My</span> Services
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border bg-gray-100 border-gray-200 rounded-md shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
