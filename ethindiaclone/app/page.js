
import React from 'react'
import Image from 'next/image'
// import "./globals.css"

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center	my-20 ">
        <div>
          <a href="http://ethindia.com">
            <Image
              src="./ethindia.svg"
              alt="SVG Image"
              width={275} // Adjust the width as needed
              height={400} // Adjust the height as needed
            /></a>
        </div>
        <div className="mt-9">
          <div className='flex mt-5'>
            <div className="flex justify-around gap-2">
              <div className="text-2xl font-bold">Dec 8th - 10th, 2023</div>
              <div className="flex justify-center ">
                <div className="w-6 h-6 bg-[#6bb3f7] rounded-full"></div>
                </div>
              <div className="">IRL, Bengaluru</div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default page
