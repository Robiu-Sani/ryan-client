import React from "react";
import {
  FaTruck,
  FaClock,
  FaMoneyBillWave,
  FaHandsHelping,
} from "react-icons/fa";

const HomeDeliveryPolicy = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-600 mb-6">
          হোম ডেলিভারি নীতিমালা
        </h2>

        {/* Delivery Time */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaClock className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">ডেলিভারি সময়</h3>
          </div>
          <p className="text-gray-700">
            অর্ডার সম্পূর্ণ হওয়ার পর, ডেলিভারি সময়সীমা নির্ধারণ করা হয় ৩-৫
            কার্যদিবসের মধ্যে। অর্ডার পরিস্থিতি ও অবস্থানের উপর নির্ভর করে কিছু
            ক্ষেত্রে ডেলিভারির সময় বাড়তে পারে।
          </p>
        </div>

        {/* Delivery Charges */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaMoneyBillWave className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              ডেলিভারি চার্জ
            </h3>
          </div>
          <p className="text-gray-700">
            বিভিন্ন এলাকার জন্য বিভিন্ন ডেলিভারি চার্জ প্রযোজ্য। স্থানীয় ও
            দূরবর্তী অঞ্চলে চার্জ ভিন্ন হতে পারে এবং অর্ডার নিশ্চিত হওয়ার সময়
            গ্রাহককে ডেলিভারি চার্জ জানানো হবে।
          </p>
        </div>

        {/* Customer Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaHandsHelping className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              গ্রাহকের দায়িত্ব
            </h3>
          </div>
          <p className="text-gray-700">
            ডেলিভারি সময় গ্রাহকের কাছে উপস্থিত থাকা বাধ্যতামূলক। পণ্য গ্রহণের
            সময়, পণ্যের গুণগত মান যাচাই করা গ্রাহকের দায়িত্ব। কোনো ক্ষতি বা
            ভুল পণ্যের ক্ষেত্রে তাৎক্ষণিকভাবে আমাদের সাপোর্ট টিমে যোগাযোগ করুন।
          </p>
        </div>

        {/* Delivery Coverage */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaTruck className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              ডেলিভারি কভারেজ এলাকা
            </h3>
          </div>
          <p className="text-gray-700">
            আমাদের ডেলিভারি সেবা দেশের বেশিরভাগ অঞ্চলে উপলব্ধ। নির্দিষ্ট অঞ্চলের
            ডেলিভারি সময় ও খরচ জানতে আমাদের ওয়েবসাইট বা সাপোর্ট টিমের সাথে
            যোগাযোগ করুন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeDeliveryPolicy;
