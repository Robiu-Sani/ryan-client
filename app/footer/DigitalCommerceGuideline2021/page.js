import React from "react";
import {
  FaUserTie,
  FaClipboardCheck,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

const DigitalCommerceGuideline2021 = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-600 mb-6">
          ডিজিটাল কমার্স নির্দেশিকা ২০২১
        </h2>

        {/* Buyer Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaUserTie className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              ক্রেতার দায়িত্বসমূহ
            </h3>
          </div>
          <p className="text-gray-700">
            ক্রেতাকে পণ্যের গুণমান ও পরিষেবা সম্পর্কে অবগত থাকতে হবে। ক্রেতারা
            সঠিক তথ্য প্রদান ও অর্ডার প্রক্রিয়া সম্পূর্ণ করতে সতর্কতা অবলম্বন
            করবেন। ক্রেতাদের ডিজিটাল পেমেন্টের ক্ষেত্রে সঠিক নির্দেশনা অনুসরণ
            করতেও নির্দেশ দেওয়া হয়েছে।
          </p>
        </div>

        {/* Seller Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaClipboardCheck className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              বিক্রেতার দায়িত্বসমূহ
            </h3>
          </div>
          <p className="text-gray-700">
            বিক্রেতাকে পণ্যের গুণমান ও সরবরাহ নিশ্চিত করতে হবে। বিজ্ঞাপন এবং
            ওয়েবসাইটে পণ্য সম্পর্কে স্বচ্ছতা বজায় রাখা আবশ্যক। অর্ডার অনুযায়ী
            সঠিক পণ্য এবং পরিষেবা প্রদানে দায়িত্বশীল ভূমিকা রাখতে হবে।
          </p>
        </div>

        {/* Transparency and Fairness */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaHandsHelping className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              স্বচ্ছতা এবং ন্যায়পরায়ণতা
            </h3>
          </div>
          <p className="text-gray-700">
            ডিজিটাল কমার্সের ক্ষেত্রে স্বচ্ছতা এবং ন্যায়পরায়ণতা অত্যন্ত
            গুরুত্বপূর্ণ। মূল্য, পণ্য বিবরণ, এবং রিটার্ন নীতিমালার মতো তথ্য
            স্পষ্টভাবে প্রদর্শন করতে হবে। ক্রেতার অধিকার সংরক্ষণে নির্দিষ্ট
            নিয়ম-কানুন মেনে চলা প্রয়োজন।
          </p>
        </div>

        {/* Data Security and Privacy */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaShieldAlt className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              তথ্য সুরক্ষা এবং গোপনীয়তা
            </h3>
          </div>
          <p className="text-gray-700">
            ক্রেতা ও বিক্রেতার ব্যক্তিগত তথ্যের সুরক্ষা একটি অগ্রাধিকার। সমস্ত
            তথ্য সুরক্ষা নির্দেশিকা এবং প্রযুক্তিগত নিরাপত্তা ব্যবস্থাগুলি
            অনুসরণ করে রক্ষা করতে হবে। গোপনীয়তার জন্য ডেটা এনক্রিপশন এবং
            সুরক্ষা নিশ্চিত করা প্রয়োজন।
          </p>
        </div>

        {/* Complaint Resolution */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaClipboardCheck className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">অভিযোগ নিরসন</h3>
          </div>
          <p className="text-gray-700">
            ক্রেতাদের অভিযোগ দ্রুত এবং কার্যকরভাবে সমাধান করা ডিজিটাল কমার্স
            নির্দেশিকার অংশ। নির্দিষ্ট সময়সীমার মধ্যে অভিযোগ পরিচালনা এবং
            সহানুভূতির সাথে ক্রেতার সমস্যা সমাধান করা প্রয়োজন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalCommerceGuideline2021;
