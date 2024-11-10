"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import TopContact from "./NavChieldComponent/TopContact";
import SimpleIcons from "./NavChieldComponent/SimpleIcons";
import Search from "./NavChieldComponent/Search";
import Icons from "./NavChieldComponent/Icons";
import MobileIcons from "./NavChieldComponent/MobileIcons";
import SidebarForMobile from "./NavChieldComponent/SidebarForMobile";
import Sidebar from "./NavChieldComponent/Sidebar";
import Image from "next/image";
import LinksForDesktop from "./NavChieldComponent/LinksForDesktop";
import { toast } from "react-toastify";

export default function Navbar() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [search, setSearch] = useState(false);
  const [NavItems, setNavItems] = useState([]);
  const [slug, setSlug] = useState();
  const [extraInfo, setExtraInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/companyInfo/get`)
      .then((result) => setExtraInfo(result.data.data))
      .catch((err) => console.error("Error fetching navbar items", err));
  }, []);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    try {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistItems(savedWishlist);
    } catch (error) {
      console.error("Error loading wishlist from localStorage", error);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/show`)
      .then((result) => setNavItems(result.data[0].children))
      .catch((err) => console.error("Error fetching navbar items", err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
  //     .then((result) => setNavItems(result.data.map(item)=>item.slug))
  //     .catch((err) => console.error("Error fetching navbar items", err));
  // }, []);

  // Function to toggle sidebar
  const toggleSidebarMobile = () => {
    setIsSidebarOpenMobile(!isSidebarOpenMobile);
  };

  const handleSearch = (data) => {
    setSearch(data);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const removeWishlistItem = (id) => {
    const NewData = wishlistItems.filter((item) => item._id !== id);
    localStorage.setItem("wishlist", JSON.stringify(NewData));
    toast.success(` has been deleted from to your Cart!`);
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(savedWishlist);
  };

  // Set up event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="bg-black  text-white">
        {/* Top contact bar */}
        <TopContact />

        {/* Main navigation bar */}
        <div
          className={` ${
            isSticky ? "fixed top-0 z-[500]" : ""
          } flex justify-between  items-center lg:px-6 px-2 py-1 md:py-2  bg-black  w-full`}
        >
          {/* Logo */}
          {/* Hamburger Menu for Mobile */}
          <label
            htmlFor="menu-toggle"
            className="lg:hidden block cursor-pointer"
          >
            <RxHamburgerMenu
              onClick={toggleSidebarMobile}
              className="w-6 h-6 text-white"
            />
          </label>

          <Link href="/">
            {extraInfo?.logo ? (
              <Image
                className="lg:w-[130px] ml-6 h-auto w-[76px]"
                src={extraInfo.logo}
                alt="logo"
                width={100}
                height={100}
              />
            ) : (
              <span>{extraInfo?.name}</span>
            )}
          </Link>

          <div className="w-9/12  gap-5 hidden lg:flex">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center w-[52%] ml-[67px]">
              <input
                type="text"
                placeholder="Enter Your Keyword..."
                className="px-7 py-1 h-10 w-full rounded-l-lg focus:outline-none outline-none text-black focus:ring-2 "
              />
              <button className="bg-[#72BF44] text-white px-4 py-1 h-10 rounded-r-md hover:bg-[#72BF44] transition duration-200">
                <FaSearch />
              </button>
            </div>

            {/* PC Builder Button */}
            <Link
              href="/pc-builder"
              className="invisible  border-2 font-semibold text-yellow-400 border-[#72BF44] px-3 py-[6px] rounded-md ml-4 transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
              style={{ pointerEvents: "none" }}
            >
              PC BUILDER
            </Link>

            {/* Icons */}
            <Icons
              toggleSidebar={toggleSidebar}
              wishlistItems={wishlistItems}
            />
          </div>

          {/* mobile icons */}
          <MobileIcons
            handleSearch={handleSearch}
            toggleSidebar={toggleSidebar}
            wishlistItems={wishlistItems}
          />
        </div>

        <Search search={search} />

        {/* Links for desktop */}
        <LinksForDesktop NavItems={NavItems} />

        <SimpleIcons />
      </header>

      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        wishlistItems={wishlistItems}
        removeWishlistItem={removeWishlistItem}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for mobile */}
      <SidebarForMobile
        toggleSidebarMobile={toggleSidebarMobile}
        isSidebarOpenMobile={isSidebarOpenMobile}
        NavItems={NavItems}
      />

      {isSidebarOpenMobile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebarMobile}
        ></div>
      )}
    </div>
  );
}
