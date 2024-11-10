import React from 'react';

const brands = [
  "Apple",
  "Microsoft",
  "Hp",
  "Asus",
  "Dell",
  "Lenovo",
  "Acer",
  "Intel",
  "Amd",
  "Msi",
  "Gigabyte"
];

const Brands = () => {
  return (
    <div className="container mx-auto mb-10 py-5 px-3 lg:px-9 bg-white ">
      <div className="flex items-center justify-between">
        <div className="w-40 h-[4px] border-r-[20px] border-r-transparent border-b-[35px] border-b-black text-white relative">
          <p className='absolute top-[3px] left-[15px] text-xl font-bold'>Top Brands</p>
        </div>
        <a href="#" className="text-[#72BF44] text-sm font-semibold hover:underline">See all brands</a>
      </div>
      <div className='h-[2px] w-full bg-black'></div>
      {/* <div className="border-t border-black mt-2"></div> */}
      <div className="flex overflow-x-auto flex-nowrap mt-4 justify-start border border-gray-300 w-full mx-auto">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="text-center font-semibold text-lg py-5 text-black border-l border-gray-300 flex-none w-[100px] md:w-[105px] hover:shadow-lg cursor-pointer"
    >
      <p className="text-center">{brand}</p>
    </div>
  ))}
</div>


    </div>
  );
};

export default Brands;
