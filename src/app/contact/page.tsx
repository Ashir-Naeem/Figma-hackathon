
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  
 

  return (
    <>
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

  
    <h1 className="text-5xl font-bold">Contact Us</h1>

 
    <p className="text-xl mt-4">
      <Link href="/">Home</Link> &gt; Contact Us
    </p>
  </div>
</section>
    
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
        
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
              Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div className="border-4 border-blue-900 p-8 rounded-lg space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Address</h2>
                <br/>
                <p className="text-gray-600 font-bold">
                  Gulshan-e-iqbal, BLock-2 karachi.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">More Info</h2>
                <br/>
                <p className="text-gray-600 font-bold">
                  Mobile: +(92) 3343103502<br />
                 Email: coolashir786@gmail.com<br />
                 {/* LinkedIn: Syed Muhammad Ibad<br />
                 Github: Syed Muhammad Ibad<br /> */}

                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Governer House Timming </h2>
                <br/>
                <p className="text-gray-600 font-bold">
                  Friday: 9:00 - 12:00<br />
               
                </p>
              </div>
              
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-6" >
             
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Abc"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

               
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

               
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Reason
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

               
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="I'd like to ask about"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                
                <button
      type="submit"
      className="w-full py-3 bg-black text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition"
    >
                  Submit
                </button>
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
    </>
  );
};

export default ContactSection;
