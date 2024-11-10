import React from "react";
import {
  FaExchangeAlt,
  FaUndoAlt,
  FaTimesCircle,
  FaHome,
} from "react-icons/fa";

const page = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <div className="flex justify-start  items-center gap-2 bg-white px-3 py-1 border mb-4 text-xs md:text-base">
        <FaHome /> Return, Refund & Cancellation Policies
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Return, Refund & Cancellation Policies
        </h2>

        {/* Return Policy */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaExchangeAlt className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Return Policy</h3>
          </div>
          <p className="text-gray-700">
            We want you to be completely satisfied with your purchase. You can
            return most items within <strong>30 days</strong> of receiving your
            order. Items must be in their original condition and packaging. Some
            items may have specific return conditions based on product type and
            usage.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Return within 30 days of delivery</li>
            <li>Item must be in original condition and packaging</li>
            <li>Shipping costs for returns may apply</li>
          </ul>
        </div>

        {/* Refund Policy */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaUndoAlt className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Refund Policy</h3>
          </div>
          <p className="text-gray-700">
            If your return is approved, a refund will be issued to your original
            payment method. Refund processing may take up to{" "}
            <strong>7-10 business days</strong> based on your bank or payment
            provider.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Refunds issued to the original payment method</li>
            <li>Processing time: 7-10 business days</li>
            <li>Shipping costs are non-refundable</li>
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaTimesCircle className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Cancellation Policy
            </h3>
          </div>
          <p className="text-gray-700">
            You can cancel your order within <strong>24 hours</strong> of
            placing it for a full refund. Orders that have already been
            processed or shipped cannot be canceled.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Cancel within 24 hours for a full refund</li>
            <li>Processed orders cannot be canceled</li>
            <li>For further assistance, contact our support team</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
