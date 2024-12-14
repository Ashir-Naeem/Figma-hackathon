import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Account = () => {
  return (
    <div>
     
     
<section
  className="relative h-[60vh] bg-cover bg-center"
  style={{ backgroundImage: "url('/image/bgibad1.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
 
    <div className="mb-4">
      <Image
        src="/image/ibad3.png"
        alt="Shop Icon"
        width={100}
        height={100}
        className="object-cover rounded-full"
      />
    </div>

  
    <h1 className="text-5xl font-bold">Login / Register</h1>

 
    <p className="text-xl mt-4">
      <Link href="/">Home</Link> &gt; login
    </p>
  </div>
</section>

   
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
  <h1 className="text-4xl font-extrabold text-center text-gray-800">Login</h1>
  <form className="space-y-6">
    
    <div>
      <label
        className="block text-lg font-medium mb-2 text-gray-700"
        htmlFor="email"
      >
        Username or Email Address
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
  
    <div>
      <label
        className="block text-lg font-medium mb-2 text-gray-700"
        htmlFor="password"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="rememberMe" className="ml-2 text-gray-700">
          Remember Me
        </label>
      </div>
      <Link href="#" className="text-blue-600 hover:underline text-sm">
        Lost your password?
      </Link>
    </div>
   
    <button
      type="submit"
      className="w-full py-3 bg-black text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition"
    >
      Login
    </button>
   
    <div className="text-center mt-4">
      <p className="text-gray-500 text-sm">
        Don't have an account?{' '}
        <Link href="#" className="text-blue-600 font-medium hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </form>
</div>

          
<div className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">
  <h1 className="text-4xl font-extrabold text-center text-gray-800">Register</h1>
  <form className="space-y-6">
  
    <div>
      <label
        className="block text-lg font-medium mb-2 text-gray-700"
        htmlFor="registerEmail"
      >
        Email Address
      </label>
      <input
        type="email"
        id="registerEmail"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      />
      <label
        className="block text-lg font-medium mb-2 text-gray-700"
        htmlFor="registerpassword"
      >
        Password
      </label>
       <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
    
    <div className="text-sm text-gray-600 bg-gray-100 p-4 rounded-md">
      <p className="mb-2">
        A link to set a new password will be sent to your email address&#46;
      </p>
      <p>
      Your personal data will be used to support your experience throughout&#10;this website&#44; to manage access to your account&#44; and for other purposes&#10;described in our privacy policy&#46;

      </p>
    </div>
   
    <button
      type="submit"
      className="w-full py-3 bg-black text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition"
    >
      Register
    </button>
   
    <div className="text-center">
      <p className="text-gray-500 text-sm">
        Already have an account?{' '}
        <Link href="#" className="text-blue-600 font-medium hover:underline">
          Login here
        </Link>
      </p>
    </div>
  </form>
</div>

          </div>
        </div>
      </section>

      
      <section className="bg-amber-100 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                Free Delivery
              </h2>
              <p className="text-lg text-gray-700">
                For all orders over $50&#44; consectetur adipiscing elit&#46;
              </p>
            </div>
           
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                90 Days Return
              </h2>
              <p className="text-lg text-gray-700">
                If the product has an issue&#44; consectetur adipiscing elit&#46;
              </p>
            </div>
          
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                Secure Payments
              </h2>
              <p className="text-lg text-gray-700">
                100% secure payments&#44; consectetur adipiscing elit&#46;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Account
