import React from "react";
import {
  FaInfoCircle,
  FaUserShield,
  FaGavel,
  FaBalanceScale,
  FaEdit,
  FaEnvelope,
} from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Terms and Conditions
        </h2>

        {/* General Information */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaInfoCircle className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              General Information
            </h3>
          </div>
          <p className="text-gray-700">
            By accessing and using our website, you agree to abide by the terms
            and conditions outlined here. These terms apply to all visitors,
            users, and others who access or use our service.
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaUserShield className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              User Responsibilities
            </h3>
          </div>
          <p className="text-gray-700">
            Users are expected to use our website responsibly and ethically. Any
            misuse or illegal activity can result in restricted access or
            termination of your account.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>No unauthorized account sharing or access</li>
            <li>Respectful and lawful usage</li>
            <li>Non-interference with website operations</li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaGavel className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Intellectual Property
            </h3>
          </div>
          <p className="text-gray-700">
            All content, including logos, images, and text on this website, is
            protected by intellectual property laws. Unauthorized use of this
            content is strictly prohibited.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaBalanceScale className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Limitation of Liability
            </h3>
          </div>
          <p className="text-gray-700">
            We are not liable for any indirect or consequential damages arising
            from the use or inability to use our website or services. Liability
            is limited to the maximum extent permitted by law.
          </p>
        </div>

        {/* Modifications to Terms */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaEdit className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Modifications to Terms
            </h3>
          </div>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Continued
            use of the website after changes signifies acceptance of the updated
            terms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Contact Information
            </h3>
          </div>
          <p className="text-gray-700">
            If you have any questions about these terms, please contact us at{" "}
            <a
              href="mailto:support@productflow.com"
              className="text-red-600 hover:underline"
            >
              support@productflow.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
