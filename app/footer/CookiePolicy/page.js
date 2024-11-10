import React from "react";
import {
  FaCookieBite,
  FaInfoCircle,
  FaLock,
  FaCog,
  FaHandPointRight,
} from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Cookie Policy
        </h2>

        {/* Introduction to Cookies */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaCookieBite className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              What are Cookies?
            </h3>
          </div>
          <p className="text-gray-700">
            Cookies are small text files that are stored on your device when you
            visit a website. They are used to remember information about you,
            such as your preferences, to enhance your browsing experience.
          </p>
        </div>

        {/* Types of Cookies */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaInfoCircle className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Types of Cookies We Use
            </h3>
          </div>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website`s
              functionality, such as logging in and navigating pages.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how users
              interact with our website by collecting anonymous data.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences to
              personalize your experience.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Track your browsing to show
              relevant advertisements on other platforms.
            </li>
          </ul>
        </div>

        {/* Why We Use Cookies */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaLock className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Why We Use Cookies
            </h3>
          </div>
          <p className="text-gray-700">
            We use cookies to improve your experience on our website, analyze
            performance, provide personalized content, and show relevant ads.
            These cookies help us understand user preferences and improve
            website functionality.
          </p>
        </div>

        {/* Managing Your Cookie Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaCog className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">
              Managing Your Cookie Preferences
            </h3>
          </div>
          <p className="text-gray-700">
            You can control and manage cookies through your browser settings.
            You can choose to disable cookies, but please note that this may
            affect some features on our website.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Go to your browser settings to adjust cookie preferences.</li>
            <li>You can choose to accept, reject, or delete cookies.</li>
            <li>
              Disabling cookies may affect certain functionalities of the
              website.
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="flex items-center space-x-4 mb-4">
            <FaHandPointRight className="text-red-600 text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold">Contact Us</h3>
          </div>
          <p className="text-gray-700">
            If you have any questions about our Cookie Policy, feel free to
            contact us at{" "}
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

export default CookiePolicy;
