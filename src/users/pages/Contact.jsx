import React from 'react'
import Header from '../components/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function Contact() {
  return (
    <>
    <Header/>
    <div className='mx-5'>
      <h1 className='text-4xl text-center p-5'>CONTACTS</h1>
         <div style={{width:'90%'}} className='flex justify-center mx-5'>
           <p className='text-2xl p-5 text-center'>Thank you for visiting our bookstore! If you need help with book orders, store information, recommendations, or any general queries, please reach out to us. Our team is dedicated to providing quick and friendly assistance to every reader. You can contact us via email, phone, or through our online form—we’re always here to help you find your next great read.</p>
         </div>
         <div className="md:grid grid-cols-3 m-5 sm:grid-cols-1">
          <div className='flex items-center justify-center'>
              <FaLocationDot className='text-2xl' />
              <h1 className='text-2xl'> 123 Main Street,Apt 4B, Anytown, CA 9876</h1>
          </div>
          <div className='flex items-center justify-center '>
              <FaPhoneAlt className='text-2xl' />
              <h1 className='text-2xl'> +91 9753451621897</h1>
          </div>
           <div className='flex items-center justify-center'>
              <MdEmail className='text-2xl' />
              <h1 className='text-2xl'>Bookstore@gmail.com</h1>
          </div>
         </div>
         <div className="md:grid grid-cols-2 m-5 px-30 py-20 sm:grid grid-cols-1">
            <div style={{width:'600px',height:'400px'}} className='bg-gray-300 text-white p-5 flex flex-col justify-center items-center m-5 '>
              <h1 className='text-center text-black text-2xl'>Send me Message</h1>
              <input type="text" placeholder='Name' className='bg-white p-2 w-full border rounded placeholder-gray-500 text-xl'/>
                <input type="text" placeholder='Email Id' className='bg-white p-2 w-full border rounded placeholder-gray-500 my-3 text-xl'/>
                <textarea id="about" name="about" placeholder='Message' rows="3" className="block w-full rounded-md bg-white px-3 py-1.5 placeholder-gray-500 my-3 text-xl"></textarea>
                <button className='bg-black w-full p-3 text-xl flex items-center justify-center gap-1'>Send<FaPaperPlane/></button>
           </div>
           <div className='flex justify-center items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720318!2d76.30948101195872!3d10.008813464713272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764169476306!5m2!1sen!2sin"     
            style={{ width:"600px" ,height:"400px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
         </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact