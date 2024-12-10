import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
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

  
    <h1 className="text-5xl font-bold">Blog</h1>

 
    <p className="text-xl mt-4">
      <Link href="/">Home</Link> &gt; Blog
    </p>
  </div>
</section>


     
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
         
            <div className="md:col-span-3 space-y-8">
          
              {[
                {
                  title: 'Going all-in with millennial design',
                  image: '/image/2.jpeg',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam...',
                  link: '/',
                },
                {
                  title: 'Exploring new ways of decorating',
                  image: '/image/blog2.jpeg',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam...',
                  link: '/',
                },
                {
                  title: 'Handmade pieces that took time to make',
                  image: '/image/blog3.jpeg',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam...',
                  link: '/',
                },
              ].map((post, index) => (
                <div key={index} className="p-6 rounded-lg shadow hover:shadow-lg transition">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full object-cover rounded"
                  />
                  <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
                  <p className="text-gray-600 mt-2">{post.description}</p>
                  <Link href={post.link} className="text-red-500 hover:underline mt-4 block">
                    Read More
                  </Link>
                </div>
              ))}
            </div>

            
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
              {[
                {
                  title: 'Going all-in with millennial design',
                  date: '03 Aug 2022',
                  image: '/image/b1.png',
                },
                {
                  title: 'Exploring new ways of decorating',
                  date: '03 Aug 2022',
                  image: '/image/b2.png',
                },
                {
                  title: 'Handmade pieces that took time to make',
                  date: '03 Aug 2022',
                  image: '/image/b3.png',
                },
                {
                  title: 'Modern home in Milan',
                  date: '03 Aug 2022',
                  image: '/image/b4.png',
                },
              ].map((post, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                  <Image src={post.image} alt={post.title} width={80} height={80} className="object-cover rounded" />
                  <div>
                    <h2 className="text-black font-bold">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.date}</p>
                  </div>
                </div>
              ))}
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
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>
           
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                90 Days Return
              </h2>
              <p className="text-lg text-gray-700">
                If the product has an issue, consectetur adipiscing elit.
              </p>
            </div>
          
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                Secure Payments
              </h2>
              <p className="text-lg text-gray-700">
                100% secure payments, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
