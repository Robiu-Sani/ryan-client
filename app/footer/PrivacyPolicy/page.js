import React from "react";
import {
  FaUserShield,
  FaDatabase,
  FaUserCheck,
  FaShareAlt,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Privacy Policy
        </h2>

        {/* Data Collection */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaDatabase className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Data Collection
            </h3>
          </div>
          <p className="text-gray-700">
            We collect personal data such as your name, email, and contact
            information when you register, place orders, or contact us.
            Additional data may be collected automatically, such as IP address,
            browser type, and usage patterns to improve our services.
          </p>
        </div>

        {/* How We Use Your Data */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaUserCheck className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              How We Use Your Data
            </h3>
          </div>
          <p className="text-gray-700">
            The data we collect is used to process orders, enhance user
            experience, send promotional offers, and improve our website. We
            also use data analytics to understand customer behavior and
            preferences.
          </p>
        </div>

        {/* Data Sharing and Disclosure */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaShareAlt className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Data Sharing and Disclosure
            </h3>
          </div>
          <p className="text-gray-700">
            We do not sell your personal data to third parties. However, we may
            share your information with trusted partners to assist with order
            fulfillment, payment processing, and analytics. These partners are
            bound by confidentiality agreements and cannot use your data for
            other purposes.
          </p>
        </div>

        {/* Security of Your Data */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaLock className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Security of Your Data
            </h3>
          </div>
          <p className="text-gray-700">
            We take the security of your personal data seriously and use
            advanced measures to protect it, including encryption and secure
            access protocols. However, no method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaUserShield className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Your Rights</h3>
          </div>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>
              <strong>Access:</strong> You have the right to request a copy of
              the data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can request corrections to any
              inaccurate or incomplete data.
            </li>
            <li>
              <strong>Deletion:</strong> You can request the deletion of your
              data, subject to legal and operational limitations.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt out of marketing
              communications at any time.
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Contact Us</h3>
          </div>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at{" "}
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

export default PrivacyPolicy;
