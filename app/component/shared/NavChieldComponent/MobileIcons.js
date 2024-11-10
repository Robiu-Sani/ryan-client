import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

export default function MobileIcons({
  toggleSidebar,
  handleSearch,
  wishlistItems,
}) {
  return (
    <div className="flex lg:hidden justify-end items-center  space-x-2 bg-black">
      <FaSearch
        onClick={() => handleSearch(true)}
        size={14}
        className="text-white"
      />
      <Tooltip showArrow={true} content="Check Cart" className="text-black">
        <div
          className="relative bg-black cursor-pointer"
          onClick={toggleSidebar} // Toggle sidebar on click
        >
          <FaShoppingCart
            className="text-2xl"
            size={16}
            aria-label="Shopping Cart"
          />
          <span className="absolute top-[-10px] right-[-12px] bg-red-600 text-[10px] rounded-full w-4 h-4 text-center  p-[1px]">
            {wishlistItems.length}
          </span>
        </div>
      </Tooltip>
      <Tooltip showArrow={true} content="Check wishlist" className="text-black">
        <Link href={"/favourites"}>
          <div className="relative">
            <FaHeart size={16} aria-label="Favorites" />
            <span className="absolute top-[-10px] right-[-12px] bg-red-600 text-[10px] rounded-full w-4 h-4 text-center p-[1px] ">
              0
            </span>
          </div>
        </Link>
      </Tooltip>

      <Dropdown radius="sm" className="text-gray-900 bg-[#CCCCCC]">
        <DropdownTrigger>
          <Button isIconOnly className="bg-transparent p-0">
            <CgProfile
              size={16}
              aria-label="User Account"
              className="text-white"
            />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            className="hover:bg-gray-700 inline-block hover:text-gray-100"
            key="new"
          >
            <Link className="w-full" href={"/dashboard"}>
              Online purchase history
            </Link>
          </DropdownItem>
          <DropdownItem
            className="hover:bg-[#BED1BE] inline-block hover:text-gray-100"
            key="copy"
          >
            {" "}
            <Link className="w-full" href={"/dashboard"}>
              Store purchase history
            </Link>
          </DropdownItem>
          <DropdownItem
            className="hover:bg-[#BED1BE] inline-block hover:text-gray-100"
            key="copy"
          >
            {" "}
            <Link className="w-full" href={"/login"}>
              Login
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <LuLogOut className="text-white" />
    </div>
  );
}
