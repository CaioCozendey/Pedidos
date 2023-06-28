import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='bg-gray-900 w-full h-20 flex p-2 px-64 justify-between items-center'>
            <a href="#">
                <Image src='/logo.jpg' className='rounded-full p-1' width={64} height={64} alt='Logo' />
            </a>
            <h1 className='text-white text-2xl pl-16'> Conceito Gourmet </h1>
            <div className='text-white items-center flex p-4 gap-4 text-base'>
                <a href="" className='hover:text-red-200 duration-200'> Petiscos </a>
                <a href="" className='hover:text-red-200 duration-200'> Pizza </a>
                <a href="" className='hover:text-red-200 duration-200'> Hamburguer </a>
            </div>
        </nav>
    )
}