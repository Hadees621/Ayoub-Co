import React from 'react';

const Location = () => {
  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className="text-center pb-20">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          How to Find Us:
        </p>
        <p className="mt-4 px-20 text-xl text-gray-500">
          Our dedicated team is committed to providing excellent service and assistance to all our customers. Whether you're looking for everyday essentials or unique finds, we're here to help you discover the perfect items to suit your needs.
        </p>
      </div>
      <div className='w-full flex px-20'>

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8663632331113!2d72.8501047!3d33.6087717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97903e7be53b%3A0xc046363266540e56!2sAyoub%20%26%20Co%20Auto%20Corporation!5e0!3m2!1sen!2s!4v1710517882980!5m2!1sen!2s"
          width={'500px'}
          height={'400px'}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>

        {/* location information */}
        <div className="rounded-md flex flex-col flex-1 px-8">
          <div className="grid space-y-3">
            <p className='text-md text-gray-900 pr-10'>
              At our store, you'll find a knowledgeable team ready to assist you in finding the right parts for your machinery needs. Whether it's a small component or a specialized part, we're committed to providing exceptional service and expertise.
            </p>
            <h2 className='text-lg font-bold'>Operation Hours:</h2>
            <div className="text-sm text-gray-500 font-medium gap-2">
              <p><strong>Monday - Sunday:</strong> 9:00 AM - 5:00 PM</p>
              <p><strong>Friday:</strong> Closed</p>
            </div>
            <h2 className='text-lg font-bold'>Contact Information:</h2>
            <div className="text-sm text-gray-500 font-medium gap-2">
              <p><strong>Younis khan:</strong> +92 3430555882</p>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center gap-3'>
            <p className="mt-4 text-md text-gray-900">
              We are located on Main GT Road.
            </p>
            <a
              href={'https://maps.app.goo.gl/Mp6EbLZvTAcKgLRb9'}
              className={`flex items-center justify-center px-3 py-2 border border-transparent w-[160px] text-base font-medium rounded-md text-background bg-[#F68E37] hover:shadow md:text-md focus:border-none`}
            >
              Get Directions!
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;


{/* <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
  <h1
    className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
  >
    {title}
  </h1>
  <div className={`w-full mb-4`}>
    <div
      className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
    ></div>
  </div>
  <div
    className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
  >
    <div
      className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
    >
      <div
        className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
      >
        <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
          {firstPlan?.name}
        </div>
        <ul className={`w-full text-center text-sm`}>
          {firstPlan?.features.map((feature) => (
            <li
              className={`border-b py-4`}
              key={`${firstPlan.name}-${feature}`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
      >
        <div
          className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
        >
          {firstPlan?.price}
          <span className={`text-base`}> {firstPlan?.priceDetails}</span>
        </div>
      </div>
    </div>
    <div
      className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
    >
      <div
        className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
      >
        <div className={`w-full p-8 text-3xl font-bold text-center`}>
          {secondPlan?.name}
        </div>
        <div
          className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
        ></div>
        <ul className={`w-full text-center text-base font-bold`}>
          {secondPlan?.features.map((feature) => (
            <li
              className={`border-b py-4`}
              key={`${secondPlan?.name}-${feature}`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
      >
        <div className={`w-full pt-6 text-4xl font-bold text-center`}>
          {secondPlan?.price}
          <span className={`text-base`}> {secondPlan?.priceDetails}</span>
        </div>
      </div>
    </div>
    <div
      className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
    >
      <div
        className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
      >
        <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
          {thirdPlan?.name}
        </div>
        <ul className={`w-full text-center text-sm`}>
          {thirdPlan?.features.map((feature) => (
            <li
              className={`border-b py-4`}
              key={`${thirdPlan?.name}-${feature}`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
      >
        <div
          className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
        >
          {thirdPlan?.price}
          <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
        </div>
      </div>
    </div>
  </div>
</div> */}