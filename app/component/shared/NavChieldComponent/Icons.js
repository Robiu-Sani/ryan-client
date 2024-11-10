"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { toast } from "react-toastify";

export default function Icons({ toggleSidebar, wishlistItems }) {
  const [user, setUser] = useState(null); // Initialize as null to handle undefined cases
  const router = useRouter();

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("user"));
    setUser(customer);
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("user"); // Clear user from localStorage on sign out
    setUser(null); // Reset user state
  };

  return (
    <div className="flex items-center lg:space-x-6 space-x-2 bg-black">
      <Tooltip showArrow={true} content="Check Cart" className="text-black">
        <div
          className="relative bg-black cursor-pointer"
          onClick={toggleSidebar} // Toggle sidebar on click
        >
          <FaShoppingCart
            className="text-2xl"
            size={22}
            aria-label="Shopping Cart"
          />
          <span className="absolute top-[-14px] right-[-12px] bg-red-600 text-xs rounded-full p-[2px] px-[6px]">
            {wishlistItems.length}
          </span>
        </div>
      </Tooltip>
      <Tooltip showArrow={true} content="Check wishlist" className="text-black">
        <Link href={"/favourites"}>
          <div className="relative">
            <FaHeart size={22} aria-label="Favorites" />
            <span className="absolute top-[-14px] right-[-12px] bg-red-600 text-xs rounded-full p-[2px] px-[6px]">
              0
            </span>
          </div>
        </Link>
      </Tooltip>
      <Tooltip showArrow={true} content="Check Compare" className="text-black">
        <div className="relative">
          <GoArrowSwitch size={22} aria-label="Compare" />
          <span className="absolute top-[-15px] right-[-14px] bg-red-600 text-xs rounded-full py-[2px] px-[6px]">
            18
          </span>
        </div>
      </Tooltip>

      <Dropdown radius="sm" className="text-gray-900 bg-[#CCCCCC]">
        <DropdownTrigger>
          <Button isIconOnly className="bg-transparent p-0">
            <CgProfile
              size={22}
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
          {/* <DropdownItem
            className="hover:bg-[#BED1BE] inline-block hover:text-gray-100"
            key="copy"
          >
            <Link className="w-full" href={"/dashboard"}>
              Store purchase history
            </Link>
          </DropdownItem> */}
          <DropdownItem className=" inline-block " key="copy">
            {user ? (
              <>
                <div
                  className="w-full hover:text-gray-200 p-1 rounded-md"
                  onClick={() => router.push("/user-profile")}
                >
                  {user?.name ? user.name : "User"}
                </div>
                <button
                  onClick={() => {
                    toast.success("Sign out successful!");
                    handleSignout();
                    router.push("/");
                  }}
                  className="w-full p-1 mt-2 rounded-md font-bold bg-gray-200 hover:bg-gray-100 text-center"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link className="w-full" href={"/login"}>
                Login
              </Link>
            )}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
