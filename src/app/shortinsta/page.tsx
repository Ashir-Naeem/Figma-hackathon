import React from 'react';


const Short = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center text-black py-10"
        style={{ backgroundImage: "url('/image/bgibad.jpg')" }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
          <p className="text-lg mb-4">
            Follow our store on Instagram
          </p>
          <div className="flex justify-center py-10">
            <a
              href="https://www.linkedin.com/in/syed-muhammad-ibad-56a28a293/"
              className="border-2 border-white py-2 px-6 text-lg font-semibold rounded-md hover:bg-white hover:text-black transition"
              style={{ width: "200px", textAlign: "center" }}
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Short;
