import axios from "axios";
import { getSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import authOptions from "@/pages/api/auth/[...nextauth]";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) return;

    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      email: email,
      password: password,
    });
  };
  return (
    <div className="max-w-[800px] mx-auto p-8">
      <div>
        {" "}
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
      </div>

      <form
        onSubmit={(e) => handleLoginSubmit(e)}
        className="space-y-4 md:space-y-6"
        action="#"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleLoginSubmit}
          type="submit"
          className="w-full bg-slate-600 hover:bg-slate-700 transition text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    // If there's no active session, redirect to the login page
    return {
      redirect: {
        destination: "/", // Replace with your login page URL
        permanent: false, // Set to true if this is a permanent redirect
      },
    };
  }

  return {
    props: {}, // Add any additional props you need for your page
  };
}
