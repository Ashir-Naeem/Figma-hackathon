import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className='about'>

      

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

  
    <h1 className="text-5xl font-bold">About Us</h1>

 
    <p className="text-xl mt-4">
      <Link href="/">Home</Link> &gt; About us
    </p>
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
  )
}

export default About