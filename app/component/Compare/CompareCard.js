import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";


const CompareCard = ({item}) => {
    return (
        <div className=" relative w-full max-w-sm mx-auto bg-white border  overflow-hidden">
          <div className="absolute z-10 bg-slate-400 top-2 right-2">
            <button className="p-1"><RiDeleteBin6Line className=""/></button>
          </div>
      <div className="px-4 py-2 text-center">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className=" font-semibold  mb-1">{item.name}</h2>
        
        <p className="text-sm text-gray-600 mb-3">Product ID: 29.01.091.125</p>
      </div>
      <div className="font-semibold px-4 pb-3 text-center">
        <p className="text-sm   ">Regular Price 2,440</p>
        <p className="text-sm  ">Special Price 2,290</p>
      </div>
    </div>
    );
};

export default CompareCard;