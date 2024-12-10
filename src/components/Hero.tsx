import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
  
      <section className="bg-amber-100 flex items-center justify-center h-[100vh]">
      
        <div className="flex flex-col items-start justify-center w-1/2 pl-10">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
    Rocket Single <br />
    Seater
  </h1>
 
  <a 
    href="/shop"
    className=" text-center border-2 border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
    style={{ width: "200px", textAlign: "center" }}
  >
    Order Now
  </a>
        </div>

       
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image
            src="/image/rocket_chair.jpeg"
            alt="Rocket Single Seater"
            width={500} 
            height={500} 
            className="object-contain"
          />
        </div>
      </section>

    
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4">
          
          <div className="flex justify-between">
            <div className="w-1/2 pr-4">
            <Image
                src="/image/side_table.jpeg"
                alt="Side Table"
                width={400}
                height={400}
                className="object-contain"
              />
              <h3 className="text-3xl font-semibold mb-2">Side Table</h3>
              <a 
    href="/shop"
    className=" text-center  border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
    style={{ width: "200px", textAlign: "center" }}
  >
   View More
  </a>
              
            </div>
            <div className="w-1/2 pl-4">
            <Image
                src="/image/side_table_2.jpeg"
                alt="Another Side Table"
                width={400}
                height={400}
                className="object-contain"
              />

              <h3 className="text-3xl font-semibold mb-2">2 Seat Sofa</h3>
              <a 
    href="/shop"
    className=" text-center  border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
    style={{ width: "200px", textAlign: "center" }}
  >
   View More
  </a>
             
            </div>
          </div>
        </div>
      </section>

    
   

     
    


  
    </>
  );
};

export default Hero;
