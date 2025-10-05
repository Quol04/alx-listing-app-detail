import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'

const Header = () => {
  return (
    <header className='bg-white text-black shadow-md'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
            <Image 
                src="/assets/logo_dark.png"
                alt="Logo"
                height={30} 
                width={30}
            />
            <div className='flex items-center gap-4'>
                <p className='flex-direction'>Location <span>Search for destination</span></p>
                <div className='flex justify-center border-l h-6'>
                    <p className='flex-col'>Check In <span>Add date</span></p>
                    <p className='flex-col'>Check Out <span>Add date</span></p>
                    <p className='flex-col'>People <span>Add guest</span></p>
                    <button>
                    
                    </button>
                </div>
            </div>
            <div>
                <Button buttonLabel="Sign In" buttonBackgroundColor="green" />
                <Button buttonLabel="Sign Up" buttonBackgroundColor="white" />
            </div>
        </div>

    </header> 
  )
}

export default Header