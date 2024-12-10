import React from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          
       
          <div className='text-gray-500'>
            <br/>
            <br/>
            <p>Governer House , Karachi</p>
            <br/>
            <br/><br/><br/><br/>

            <br/>
            <p className='text-black'>2024 Syed Muhamaad Ibad. All rights reserved</p>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="footer-title  text-gray-500">Links</h6>
            <Link href="/" className="link link-hover">Home</Link>
            <Link href="/shop" className="link link-hover">Shop</Link>
            <Link href="/about" className="link link-hover">About</Link>
            <Link href="/contact" className="link link-hover">Contact</Link>
          </div>

         
          <div className="flex flex-col gap-4">
            <h6 className="footer-title  text-gray-500">Help</h6>
            <Link href="/payment-options" className="link link-hover">Payment Options</Link>
            <Link href="/returns" className="link link-hover">Returns</Link>
            <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
          </div>

        
          <div className="flex flex-col gap-4">
            <h6 className="footer-title text-gray-500">Newsletter</h6>
            <form>
              <fieldset className="form-control w-80">
                               <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your email Address"
                    className="input input-bordered join-item" />
                  <button className="btn btn-primary join-item">Subscribe</button>

                  
                </div>
              </fieldset>
            </form>
              <div className="hidden lg:flex gap-4 items-center">
            <Link
              target="_blank"
              href={"/"}
              className="header_top__icon_wrapper"
            >
              <BsFacebook className="text-xl hover:text-accent transition duration-200" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/ibadwaseem"}
              className="header_top__icon_wrapper"
            >
              <FaGithub className="text-xl hover:text-accent transition duration-200" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/syed-muhammad-ibad-56a28a293/"}
              className="header_top__icon_wrapper"
            >
              <FaLinkedin className="text-xl hover:text-accent transition duration-200" />
            </Link>
            <Link
              target="_blank"
              href={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"}
              className="header_top__icon_wrapper"
            >
              <SiGmail className="text-xl hover:text-accent transition duration-200" />
            </Link>
        </div>
          </div>
        
    
          </div>
      </footer>
    </div>
  )
}

export default Footer
