import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div>
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 ">Top Picks For You</h2>
          <p className="text-gray-500 text-lg mb-8">
            find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Image
                src="/image/product1.jpeg"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">
                Trenton modular sofa_3
              </h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
              
            </div>
            <div className="text-center">
              <Image
                src="/image/product2.jpeg"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">
                Granite dinning table with dining chair
              </h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product3.jpeg"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">
                Outdoor bar table and stool{" "}
              </h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product4.jpeg"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2 ">
                Plain console with teak mirror
              </h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div>
              <a
                href="/shop"
                className=" text-right border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
                style={{ width: "200px", textAlign: "center" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};
export default Product;
