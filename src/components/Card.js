import React from 'react'
import Image from 'next/image'
import profile from '@/image/profile.jpg'
import Link from 'next/link'

function Card() {
  return (
    <Link href={'/dashboard/profile'} className='bg-gray-200 w-[30%] p-5 rounded shadow-lg cursor-pointer flex flex-col gap-4 hover:bg-gray-300 transition-all duration-300 ease-linear'>
<div 

>
       <Image
    className='h-28 w-28 rounded-full m-auto'
       src={profile}
          alt="Logo"
        /></div>

        <div className='flex flex-col gap-1 justify-center items-center p-2'>
            <p className='font-semibold text-xl'>Ritesh raghuwanshi</p>
            <p className='w-full text-nowrap text-ellipsis overflow-clip text-sm text-gray-700'><span className='font-semibold'>Profile</span> - Frontend Developer | react js</p>
            <p className='w-full text-nowrap text-ellipsis overflow-clip text-sm text-gray-700'><span className='font-semibold'>Address</span> - Bhopal, Madhya Pradesh</p>
            <p className='w-full text-nowrap text-ellipsis overflow-clip text-sm text-gray-700'><span className='font-semibold'>company</span> - xyz</p>
        </div>

    </Link>
  )
}

export default Card