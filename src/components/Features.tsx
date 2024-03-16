import React from 'react';
import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { subtitle, description, companies } = features;

  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-16">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center m-6">
              <img
                src={company.logo}
                alt={company.name}
                className="h-48 w-72"
              />
              <h1 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900">{company.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
