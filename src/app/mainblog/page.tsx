import React from 'react'
import Image from 'next/image';

import { CiClock2 } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';

const mainblog = () => {
  return (
    <div>
<section className="bg-white text-black py-10">
  <div>
    <h2 className="text-5xl mb-6 text-center">Our Blog</h2>
    <p className="text-center text-lg mb-8">Find a bright idea to suit your taste with our great selection.</p>
  </div>

  <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <Image
          src="/image/blog1.png"
          alt="Blog Post 1"
          width={300}
          height={300}
          className="object-contain mx-auto"
        />
        <br />
        <p className="text-lg">Going all-in with millennial design</p>
        <a href="/blog" className="underline font-bold text-xl mb-4">
          Read More
        </a>
        <div className="flex items-center justify-center gap-4">
  <span className="flex items-center gap-1">
    <CiClock2 /> 5 mins
  </span>
  <span className="flex items-center gap-1">
    <SlCalender /> {new Date().toLocaleDateString()}
  </span>
</div>

      </div>

      <div className="text-center">
        <Image
          src="/image/blog2.jpeg"
          alt="Blog Post 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <br />
        <p className="text-lg">Going all-in with millennial design</p>
        <a href="/blog" className="underline font-bold text-xl mb-4">
          Read More
        </a>
        <div className="flex items-center justify-center gap-4">
  <span className="flex items-center gap-1">
    <CiClock2 /> 5 mins
  </span>
  <span className="flex items-center gap-1">
    <SlCalender /> {new Date().toLocaleDateString()}
  </span>
</div>

      </div>

      <div className="text-center">
        <Image
          src="/image/blog3.jpeg"
          alt="Blog Post 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
            <br />
        <p className="text-lg">Going all-in with millennial design</p>
     
        <a href="/blog" className="underline font-bold text-xl mb-4">
          Read More
        </a>
        <div className="flex items-center justify-center gap-4">
  <span className="flex items-center gap-1">
    <CiClock2 /> 5 mins
  </span>
  <span className="flex items-center gap-1">
    <SlCalender /> {new Date().toLocaleDateString()}
  </span>
</div>

      </div>
    </div>

    
    <div className="text-center mt-8">
    <a 
    href="/blog"
    className=" text-center  border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
    style={{ width: "200px", textAlign: "center" }}
  >
   View All Post
  </a>
    </div>
  </div>
</section>


    </div>
  )
}

export default mainblog