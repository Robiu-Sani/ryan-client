import Link from 'next/link';


const categories = [
  { name: 'Laptop', slug: "laptop", icon: '/images/laptop.svg' },
  { name: 'Processor', slug: "processor", icon: '/images/processor.svg' },
  { name: 'AIO PC', slug: "aio", icon: '/images/all-in-one.svg' },
  { name: 'Speaker', slug: "speaker", icon: '/images/speaker.svg' },
  { name: 'Monitor', slug: "monitor", icon: '/images/monitor.svg' },
  { name: 'Software', slug: "software", icon: '/images/software.svg' },
  { name: 'Gaming', slug: "gaming", icon: '/images/gaming.svg' },
  { name: 'Printer', slug: "printer", icon: '/images/printer.svg' },
  { name: 'GPU', slug: "gpu", icon: '/images/gpu.svg' },
  { name: 'Camera', slug: "camera", icon: '/images/camera.svg' },
];

const Categories = () => {
 
  return (
    <div className="pt-2 pb-7 bg-white px-[10px] md:px-10 lg:px-9  mt-4">
      <div className="flex items-center justify-between">
        <div className="w-40 md:w-48 h-[4px] border-r-[15px] md:border-r-[20px] border-r-transparent border-b-[25px] md:border-b-[35px] border-b-black text-white relative">
          <p className='absolute top-[3px] left-[15px] text-base md:text-xl font-bold'>Top Categories</p>
        </div>
        <a href="#" className="text-[#72BF44] text-xs md:text-base font-semibold hover:underline">See all categories</a>
      </div>
      <div className='h-[2px] w-full bg-black'></div>
      <div className="flex overflow-x-scroll md:overflow-x-auto gap-y-7 gap-9 md:gap-12 md:gap-y-0 md:flex items-center justify-around mt-4 pt-4">
        {categories.map((category, index) => (
          <Link href={`/category/${category.slug}`} key={index} className="text-center group">
            <div className="text-4xl flex justify-center transition-transform duration-300 group-hover:scale-110">
              <img src={category.icon} alt={category.name} className="h-10 w-10 md:h-16 md:w-16" />
            </div>
            <p className="mt-2 text-xs md:text-sm font-semibold text-black transition-colors duration-300">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
