import Link from "next/link";
import { FaGift, FaUser } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { HiComputerDesktop } from "react-icons/hi2";
import { RiShoppingBag3Fill } from "react-icons/ri";

export default function SimpleIcons() {
  return (
    <div className="lg:hidden  w-full z-[500] fixed bottom-0 inset-x-0 bg-black border-t-[1px] border-gray-500 py-2 px-6 text-white flex justify-between items-center gap-2">
      <div className="flex flex-col items-center w-[20%] gap-[2px] ">
        <HiComputerDesktop className="text-xl" />
        <p className="text-[7px] text-center">Pc Builder</p>
      </div>
      <div className="flex flex-col items-center w-[20%] gap-[2px] ">
        <FaGift className="text-xl" />
        <p className="text-[7px] text-center">Offer</p>
      </div>

      <div className="flex flex-col items-center w-[20%] gap-[2px] ">
        <RiShoppingBag3Fill className="text-xl" />
        <p className="text-[7px] text-center">Big sell</p>
      </div>

      <div className="flex flex-col items-center w-[20%] gap-[2px] ">
        <GoArrowSwitch className="text-xl" />
        <p className="text-[7px] text-center">Compare</p>
      </div>

      <Link
        href={"/dashboard"}
        className="flex flex-col items-center w-[20%] gap-[2px] "
      >
        <FaUser className="text-xl" />
        <p className="text-[7px] text-center">01615486524</p>
      </Link>
    </div>
  );
}
