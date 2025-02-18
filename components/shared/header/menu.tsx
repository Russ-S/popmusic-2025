import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/sign-in' className='flex items-center header-button'>
          Hello, Sign In
        </Link>
      </nav>
    </div>
  )
}
