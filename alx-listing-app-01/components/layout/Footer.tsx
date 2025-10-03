import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='px-4 mt-3 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4'>
            <div>
                <Image 
                    src="/assets/logo_light.png"
                    alt="Logo"
                    height={30}
                    width={58}
                />
                <p className='text-16 flex'>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    <h3>Explore</h3>
                    <ul>
                        <li>Apartments in Dubai</li>
                        <li>Hotels in New York</li>
                        <li>Villa in Spain</li>
                        <li>Mansion in Indonesia</li>

                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Customers</li>
                        <li>Brand</li>

                    </ul>
                </div>
                <div>
                    <h3>Help</h3>
                    <ul>
                        <li>Support</li>
                        <li>Cancel booking</li>
                        <li>Refunds Process</li>

                    </ul>
                </div>
            </div>
        </div>
        <div className='container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center'>
            <p>Some hotel requires you to cancel more than 24 hours before check-in. Details <span className='text-green-500'>Here</span></p>
            <ul className='flex space-x-4 mt-4 md:mt-0'>
                <li>Terms of Service</li>
                <li>Policy service</li>
                <li>Cookies Policy</li>
                <li>Partners</li>

            </ul>
        </div>

      
    </footer>

  )
}

export default Footer