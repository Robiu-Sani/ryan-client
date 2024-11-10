"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiEnvelope } from "react-icons/pi";

export default function TopContact() {
  const [extraInfo, setExtraInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/companyInfo/get`)
      .then((result) => setExtraInfo(result.data.data))
      .catch((err) => console.error("Error fetching navbar items", err));
  }, []);

  return (
    <div className="hidden md:flex justify-between items-center px-4 text-sm">
      <div className="flex items-center w-full justify-center pt-2">
        <div className="flex items-center justify-center">
          <AiOutlinePhone className="mr-2 border border-white rounded-full text-xl p-[1px]" />
          <span className="text-base">{extraInfo?.phone || "N/A"}</span>
        </div>
        <div className="flex items-center">
          <PiEnvelope className="ml-4 mr-2 border border-white rounded-full text-xl p-[2px]" />
          <span className="text-base">{extraInfo?.email || "N/A"}</span>
        </div>
        <div className="flex items-center">
          <MdOutlineAttachMoney className="ml-4 mr-2 border border-white rounded-full text-xl p-[1px]" />
          <span className="text-base">Big Sale</span>
        </div>
      </div>
    </div>
  );
}
