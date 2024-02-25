const Brands = () => {
  const brands = [
    '/images/logos/flexport.png',
    '/images/logos/stripe.png',
    '/images/logos/asana.png',
    '/images/logos/mason.png',
    '/images/logos/stanford.png',
  ];
  return (
    <section className='bg-white  py-10'>
      <div className='mx-auto my-0 flex max-w-[1200px] flex-col items-start justify-center px-4 md:items-center '>
        <p className='pb-8 text-center text-lg font-[600] text-gray-400'>
          Join 100+ companies using Formbit
        </p>

        <div className='grid grid-cols-2 items-center justify-between gap-8 gap-x-40  sm:grid-cols-2 md:grid-cols-3 lg:flex'>
          {brands.map((brand, i) => {
            return (
              <div key={i}>
                <img src={brand} alt='' className='object-cover' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
