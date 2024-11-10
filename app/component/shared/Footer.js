"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const [extraInfo, setExtraInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/companyInfo/get`)
      .then((result) => setExtraInfo(result.data.data))
      .catch((err) => console.error("Error fetching footer info", err));
  }, []);

  return (
    <footer className="bg-black text-white pt-10 px-3 md:px-8 pb-5">
      <div className="container mx-auto  flex justify-center items-center flex-col lg:flex-row gap-5">
        {/* Logo and Social Icons */}
        <div className="space-y-4 lg:w-3/12  text-center lg:text-left">
          <Link href="/">
            {extraInfo?.logo ? (
              <Image
                src={extraInfo.logo}
                alt="logo"
                width={100}
                height={100}
                className="mx-auto lg:mx-0"
              />
            ) : (
              <span>{extraInfo?.name}</span>
            )}
          </Link>
          <div className="flex justify-center lg:justify-start space-x-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-gray-700 hover:bg-green-600 p-1 rounded-full text-white transition"
                >
                  <Icon className="text-sm" />
                </a>
              )
            )}
          </div>
          <a
            href="#"
            className="inline-block bg-red-500 hover:underline font-semibold text-white px-3 py-1 rounded-lg transition"
          >
            Complaint Box
          </a>
        </div>
        <div className="mx-4 border-l h-full border-white hidden lg:grid"></div>

        {/* Link Columns */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:w-6/12">
          <div className="space-y-2">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["About us", "Blog", "Order Procedure", "Home Delivery"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-sm hover:underline hover:text-green-600 transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mx-4 border-l h-full border-white hidden lg:grid"></div>
          <div className="space-y-2">
            <h4 className="text-base font-semibold">Policies</h4>
            <ul className="space-y-2">
              {[
                {
                  href: "/footer/ReturnRefundCancellation",
                  label: "Return, Refund & Cancellation",
                },
                {
                  href: "/footer/TermsAndConditions",
                  label: "Terms & Conditions",
                },
                { href: "/footer/PrivacyPolicy", label: "Privacy Policy" },
                { href: "/footer/CookiePolicy", label: "Cookie Policy" },
                {
                  href: "/footer/DigitalCommerceGuideline2021",
                  label: "ডিজিটাল কমার্স নির্দেশিকা ২০২১",
                },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:underline hover:text-green-600 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-4 border-l h-full border-white hidden lg:grid"></div>

        {/* Contact Information */}
        <div className="text-center lg:text-left lg:w-3/12">
          <h4 className="text-base font-semibold">Contact Us</h4>
          <p className="text-sm hover:underline">
            Head office <br />
            {extraInfo?.address}
          </p>
          <p className="text-sm hover:underline flex items-center justify-center lg:justify-start gap-1">
            <FaPhone /> {extraInfo?.phone}
          </p>
          <Link
            href={`https://wa.me/${extraInfo?.phone}`}
            className="text-sm hover:underline flex items-center justify-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="whatsapp">
              <FaWhatsapp className="text-green-600" />
            </span>{" "}
            {extraInfo?.phone} (Message only)
          </Link>
          <div className="text-sm">
            <IoLocationSharp className="inline-block text-red-600" /> Map Link:{" "}
            <a
              href="https://tinyurl.com/ryans-head-office"
              className="text-blue-400 hover:underline"
            >
              https://tinyurl.com/ryans-head-office
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
