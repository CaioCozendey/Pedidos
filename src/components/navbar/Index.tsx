'use client'

import { Link } from "react-scroll"
import { useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ShoppingCart, ChefHat, Pizza, Sandwich } from 'lucide-react'
import Image from 'next/image'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-red-700 xl:px-40 lg:px-40 fixed w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-red-700" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image className="h-12 w-auto" src="/logo.png" width={256} height={256} alt="Logo Conceito Gourmet" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-10">
                    <Link className="text-md flex flex-row gap-2 font-semibold leading-7 text-white hover:bg-red-800 rounded-lg px-4 py-1 cursor-pointer" to='pizza' spy={true} smooth={true} offset={-100} duration={500}>
                        <Pizza />
                        Pizza
                    </Link>
                    <Link className="text-md flex flex-row gap-2 font-semibold leading-7 text-white hover:bg-red-800 rounded-lg px-4 py-1 cursor-pointer" to='hamburguer' spy={true} smooth={true} offset={-100} duration={500}>
                        <Sandwich />
                        Hamburguer
                    </Link>
                    <Link className="text-md flex flex-row gap-2 font-semibold leading-7 text-white hover:bg-red-800 rounded-lg px-4 py-1 cursor-pointer" to='petisco' spy={true} smooth={true} offset={-100} duration={500}>
                        <ChefHat />
                        Petisco
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm flex flex-row gap-2 font-semibold leading-7 text-white hover:bg-red-800 rounded-lg px-4 py-1">
                        <ShoppingCart />
                        Carrinho
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-red-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {...products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-800 cursor-pointer"
                                    to='pizza' spy={true} smooth={true} offset={-100} duration={500}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Pizza />
                                    Pizza
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-800 cursor-pointer"
                                    to='hamburguer' spy={true} smooth={true} offset={-100} duration={500}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Sandwich />
                                    Hamburguer
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg gap-2 px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-800 cursor-pointer"
                                    to='petisco' spy={true} smooth={true} offset={-100} duration={500}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <ChefHat />
                                    Petisco
                                </Link>
                            </div>
                            <div className=''>
                                <a
                                    href="#"
                                    className="-mx-3 flex flex-row gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-red-800"
                                >
                                    <ShoppingCart />
                                    Carrinho
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
