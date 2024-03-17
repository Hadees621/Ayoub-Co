import React, { useRef, useEffect } from 'react';
import config from '../config/index.json';

const Companies = () => {
  const { features } = config;
  const { subtitle, description, companies } = features;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let totalWidth = 0;
    companies.forEach((company) => {
      const image = new Image();
      image.src = company.logo;
      totalWidth += image.width + 20;
    });

    if (containerRef.current) {
      containerRef.current.style.width = `${totalWidth * 2}px`; // Double the width to ensure seamless looping
    }
  }, [companies]);

  return (
    <div className={`py-12 bg-background`} id="features">
      <style>
        {`
          @keyframes scrollAnimation {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .company-container {
            display: flex;
            overflow-x: hidden;
            width: 100%;
            animation: scrollAnimation 20s linear infinite; /* Adjust the animation duration and timing function as needed */
          }

          .company {
            flex: 0 0 auto;
            margin-right: 20px; /* Adjust margin between logos */
          }

          .company:last-child {
            margin-right: 0;
          }

          @media (max-width: 768px) {
            .company-container {
              overflow-x: auto;
              scroll-behavior: smooth;
              width: calc(100% - 40px); /* Adjust width for small screens */
            }

            .company {
              margin-right: 10px; /* Adjust margin between logos for small screens */
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8 lg:pb-20 ">
          <p className="mt-2 text-2xl lg:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
            {subtitle}
          </p>
          <p className="mt-4 px-6 lg:px-20 text-sm lg:text-xl text-gray-500">
            {description}
          </p>
        </div>
        <div className="company-container mt-16" ref={containerRef}>
          {companies.map((company, index) => (
            <div key={index} className="company flex flex-col items-center mx-8">
              <img
                src={company.logo}
                alt={company.name}
                className="h-36"
              />
            </div>
          ))}
          {companies.map((company, index) => (
            <div key={index + companies.length} className="company flex flex-col items-center mx-8">
              <img
                src={company.logo}
                alt={company.name}
                className="h-36"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;





// import React from 'react';
// import config from '../config/index.json';

// const Companies = () => {
//   const { features } = config;
//   const { subtitle, description, companies } = features;

//   return (
//     <div className={`py-12 bg-background`} id="features">
//       <style>
//         {`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .company-container {
//             display: flex;
//             overflow-x: auto;
//           }

//           .company-container::-webkit-scrollbar {
//             display: none;
//           }

//           .company {
//             flex: 0 0 auto;
//           }

//           .company:last-child {
//             margin-right: 0;
//           }
//         `}
//       </style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center pb-8 lg:pb-20 ">
//           <p className="mt-2 text-2xl lg:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
//             {subtitle}
//           </p>
//           <p className="mt-4 px-6 lg:px-20 text-sm lg:text-xl text-gray-500">
//             {description}
//           </p>
//         </div>
//         <div className="company-container mt-16">
//           {companies.map((company, index) => (
//             <div key={index} className="company flex flex-col items-center mx-8">
//               <img
//                 src={company.logo}
//                 alt={company.name}
//                 className="h-36"
//               />
//               {/* <h1 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900">{company.name}</h1> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Companies;