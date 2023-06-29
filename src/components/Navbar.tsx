"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-red-700 flex">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16 gap-96">
                        <div className="flex items-center gap-64">
                            <div className="flex justify-start">
                                <a href=""> Logo </a>
                            </div>
                            <div className="hidden items-center md:block">
                                <div className="ml-10 flex items-center space-x-4">
                                    <a
                                        href="#"
                                        className="text-white hover:bg-red-800  px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Pizza's
                                    </a>

                                    <a
                                        href="#"
                                        className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Hamburguer's
                                    </a>

                                    <a
                                        href="#"
                                        className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Petiscos
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 block flex-col md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-red-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-900"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                            <div className="flex flex-col">
                                <Transition
                                    show={isOpen}
                                    enter="transition ease-out duration-100 transform"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="transition ease-in duration-75 transform"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    {(ref) => (
                                        <div className="md:hidden" id="mobile-menu">
                                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                <a
                                                    href="#"
                                                    className="hover:bg-red-800 text-white block px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    Pizza's
                                                </a>

                                                <a
                                                    href="#"
                                                    className="text-gray-300 hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    Hamburguer's
                                                </a>

                                                <a
                                                    href="#"
                                                    className="text-gray-300 hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    Petiscos
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </Transition>

                            </div>
                        </div>

                    </div>
                </div>


            </nav>
        </div>
    );
}