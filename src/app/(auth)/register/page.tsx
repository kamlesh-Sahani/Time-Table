"use client";
import { registerUser } from "@/app/actions/authAction";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation"
const RegisterPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="flex  justify-center h-full ">
      <div className="w-[610px] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Register</h2>
        <form
          action={async (userData: FormData) => {
            setLoading(true);
            const response = await registerUser(userData);
            console.log(response);
            if (!response.success) {
              toast.error(
                response.message || "faild to register please try again"
              );
            }
            if (response.success) {
              toast.success(response.message);
              router.push("/login");
              setLoading(false);
            }
            setLoading(false);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 cursor-pointer"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-white text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 cursor-pointer"
            />
          </div>
          <div className="mb-2 flex justify-end">
            <Link
              href={"/login"}
              className="text-[#525252] font-semibold underline"
            >
              For Login Cick me
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-black font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? "loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
