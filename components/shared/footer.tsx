'use client'

import { ChevronUp } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center text-sm'>
          <p> © 2010-2025 {APP_NAME}</p>
        </div>
      </div>
    </footer>
  )
}
