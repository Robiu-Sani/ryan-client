import React from 'react';

const locations = [
  {
    name: 'IDB BHABAN, DHAKA',
    address: '123/5 BCS Computer City, Agargaon',
    salesPhone: '+8809604442121',
    servicePhone: '+8801755513935',
    mapLink: 'https://tinyurl.com/ryans-idb',
  },
  {
    name: 'BANANI, DHAKA',
    address: '41 Kamal Ataturk Avenue, Banani',
    salesPhone: '+8809638009072',
    servicePhone: '+8801755513933',
    mapLink: 'https://tinyurl.com/ryans-banani',
  },
  {
    name: 'UTTARA-1, DHAKA',
    address:
      '36 Sonargaon Janapath (Beside Uttara Adhunik Medical College & Hospital), 1st Floor, Sector 9, Uttara',
    salesPhone: '+8801755513929',
    servicePhone: '+8801755513930',
    mapLink: 'https://tinyurl.com/ryans-uttara-1',
  },
  {
    name: 'UTTARA-2, DHAKA',
    address: 'House Building, 11 Sonargaon Janapath, Sector 7, Uttara Dhaka 1230',
    salesPhone: '+8801313467629',
    servicePhone: '+8801313467630',
    mapLink: 'https://tinyurl.com/ryans-uttara-2',
  },
];

const OnlineShop = () => {
  return (
    <div className="container mx-auto -my-4 text-black px-3 md:px-10 bg-white pt-5 pb-14">
        <div>
            <h1 className='text-lg md:text-xl font-semibold'>The Leading Retail and Online Shop for Computers, Laptops, Monitors & Accessories in Bangladesh
            </h1>
            <p className="my-4 text-sm">
  If you are looking for the best computer shop in Bangladesh you have to consider Ryans Computers, as it is a pioneer computer shop and e-commerce platform selling computer and IT products all over Bangladesh through its branches and website. It provides a fast, secure, and convenient online shopping experience with a broad product offering in categories ranging from <span className="font-bold text-sky-600">desktop PC</span>, <span className="font-bold text-sky-600">laptop</span> to <span className="font-bold text-sky-600">office equipment, camera,</span>  and <span className="font-bold text-sky-600">smart daily life accessories</span>. Ryans is always endeavoring to offer its customers the best possible facility – including multiple payment options, EMI Facility, best price, cash on delivery, delivery in 64 districts, free home delivery inside Dhaka, Chattogram and Barishal city, 24/7 online support, and extensive customer service and warranty commitments.
</p>

        </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3  md:gap-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="border border-black p-2 md:p-4 text-gray-700 text-sm shadow-sm overflow-x-scroll md:overflow-x-auto hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-black mb-2">{location.name}</h3>
            <p className='mb-1'>{location.address}</p>
            <p className='mb-1'>Tel: <a href={`tel:${location.salesPhone}`} className="">{location.salesPhone}</a> (Sales)</p>
            <p className='mb-1'><a href={`tel:${location.servicePhone}`} className="">{location.servicePhone}</a> (Service)</p>
            <p>
              Map Link:{' '}
              <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="text-sky-600 font-semibold underline">
                {location.mapLink}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineShop;
