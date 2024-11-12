import React from 'react'
import Card from '@/components/Card'

function page() {
  return (
    <div className='flex'>
        <div className='bg-black text-white p-5 w-1/5 self-stretch'>
<h2 className='font-bold text-center text-2xl'>Sidebar</h2>
        </div>
        <div className=' flex gap-5 flex-wrap p-5'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
        </div>
    </div>
  )
}

export default page