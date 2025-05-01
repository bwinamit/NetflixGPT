import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="relative h-screen bg-cover bg-center">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="bg-black bg-opacity-100 p-8 rounded-lg w-full max-w-md text-white z-10">
          <h2 className="text-3xl font-bold mb-6">
            {signInForm ? "Sign In" : "Sign Up"}
          </h2>

          <div className="mb-4">
            {!signInForm && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            )}

            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold mb-4"
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="mt-6 text-gray-400 text-sm">
            {signInForm ? "New to Netflix?" : "Already have an account?"}
            <a
              onClick={toggleSignInForm}
              href="#"
              className="text-white hover:underline"
            >
              {signInForm ? " Sign up now." : " Sign in now"}
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
