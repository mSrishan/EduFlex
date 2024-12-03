import React from "react";
import heroImage from "../assets/hero.jpg"; // Adjust the path as needed

const Landing = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-16 px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to EduFlex</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Virtual Learning Environment
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Start your learning journey today with innovative tools and resources.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex justify-center mt-8">
        <img
          src={heroImage}
          alt="Hero"
          className="w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-6 mt-12 border-t">
        <div className="text-center text-gray-600 text-sm space-y-4">
          <p>© 2024 EduFlex. All Rights Reserved.</p>
          <div className="space-x-6">
            <a
              href="/terms"
              className="hover:text-blue-500 transition"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="hover:text-blue-500 transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
