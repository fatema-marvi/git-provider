"use client";

import { SessionWrapper } from "@/components/SessionWrappper";
import SignOutPage from "@/components/login/SignOutComponent";
import SignInPage from "@/components/login/LoginComponent";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-900 via-gray-700 to-blue-300 text-white">
      <SessionWrapper>
        <div className="text-center">
          <h1 className="text-4xl font-bold blue-red-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-blue-300 mb-8">
            Sign in to access your account or create a new one!
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div>
                  <SignInPage/>
            <button
              onClick={() => signIn("github")}
              className="w-full py-2 px-4 text-white bg-gray-800 hover:bg-gray-700 rounded-md mb-4"
            >
              Sign in with GitHub
            </button>
          </div>
    
          <div className="border-t border-gray-200 my-6"></div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-500 rounded-md"
            >
              Create Account
            </button>
          </form>
          <SignOutPage />
              {/* Sign out button */}
              <button
                onClick={() => signOut()}
                className="absolute bottom-6 right-6 py-2 px-4 text-white bg-red-600 hover:bg-red-200 rounded-md">
                Sign Out
              </button>
        </div>
      </SessionWrapper>
    </div>
  );
}
