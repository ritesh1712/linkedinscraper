'use client'
import React,{useState} from 'react'
import backGround from '@/image/bg.jpg'
import profile from '@/image/profile.jpg'
import Image from 'next/image'

function page() {

    const [seeMore, setSeeMore] = useState(false)

  return (
    <div className='flex'>


<div className='bg-black text-white p-5 w-1/5 self-stretch'>
<h2 className='font-bold text-center text-2xl'>Sidebar</h2>
        </div>
<div className=' w-4/5 flex flex-col gap-2 m-5'>
<div className='bg-gray-200 rounded '>
<div className='h-96'>
       <Image
    className='h-80 w-full m-auto'
       src={backGround}
          alt="Logo"
        />
       <Image
    className='h-32 w-32 -top-20 left-10 relative inline rounded-full'
       src={profile}
          alt="Logo"
        />
        
</div>

<div className='p-5 pt-0'>
<p className='font-semibold text-2xl'>Ritesh raghuwanshi</p>
<p className='w-full text-nowrap text-ellipsis overflow-clip text-sm'>Frontend Developer | react js</p>
            <p className='w-full text-nowrap text-ellipsis overflow-clip text-sm text-gray-500'> Bhopal, Madhya Pradesh</p>
</div>
    
</div>
{/* about */}
<div className='bg-gray-200 p-5 rounded'>
    <h2 className='text-xl font-semibold'>About</h2>
    <div className={`overflow-hidden ${seeMore?'':'h-28'}`}>
    <p className='py-5 px-2'>I'm a Frontend Developer with 1.5 years of experience in building responsive, user-friendly web applications. I've honed my skills in React.js, Next.js, JavaScript, TypeScript, and Redux, focusing on creating efficient and high-performing code. I'm passionate about solving problems and delivering seamless user experiences.</p>
    <p className='pb-5 px-2'>I'm a Frontend Developer with 1.5 years of experience in building responsive, user-friendly web applications. I've honed my skills in React.js, Next.js, JavaScript, TypeScript, and Redux, focusing on creating efficient and high-performing code. I'm passionate about solving problems and delivering seamless user experiences.</p>
    </div>
    
    <span className='text-gray-700 float-right cursor-pointer' onClick={()=>setSeeMore(!seeMore)}>{seeMore?'...see less':'...see more'}</span>
    
</div>




{/* Interest  */}
<div className='bg-gray-200 p-5 rounded'>
    <h2 className='text-xl font-semibold'>Interest </h2>
    <div className='p-2'>
    <p className='px-2'>Frontend development</p>
    <p className='px-2'>React.js</p>
    <p className='px-2'> User experience improvement</p>
    </div>
</div>

{/* Personal Attributes */}
<div className='bg-gray-200 p-5 rounded'>
    <h2 className='text-xl font-semibold'>Personal Attributes </h2>

    <div className='p-2'>
    <h2 className='font-semibold text-lg'>Likes  👍</h2>
    <p className='px-2'>Offering opportunities for career growth, Flexible working options, Supporting freshers and entry-level candidates, Work from home.</p>
    </div>

    <div className='p-2'>
    <h2 className='font-semibold text-lg'>Dislikes 👎</h2>
    <p className='px-2'>Unclear job roles</p>
    </div>
</div>

{/* Experience */}
<div className='bg-gray-200 p-5 rounded'>
    <h2 className='text-xl font-semibold'>Experience</h2>
    
</div>


</div>
    </div>
  )
}

export default page