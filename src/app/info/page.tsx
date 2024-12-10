import React from 'react'

export const info= () => {
  return (
    <div>
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
export default  info