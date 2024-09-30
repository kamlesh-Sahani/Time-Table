import { userLogin } from '@/app/actions/authAction'
import Link from 'next/link'
const LoginPage = () => {
  return (
    <div className="flex  justify-center h-full ">
    <div className="w-[610px] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Login</h2>
      <form action={userLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
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
          <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">
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
        <div className='mb-2 flex justify-end'>
          <Link href={"/register"} className='text-[#525252] font-semibold underline'>For Register Cick me</Link>

        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-black font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
        Login
        </button>

      </form>
    </div>
  </div>
  )
}

export default LoginPage