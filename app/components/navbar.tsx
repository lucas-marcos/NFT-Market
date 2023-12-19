"use client"
import { UserRound, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }: any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md h-20"> {/*logo container*/}

            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium text-white my-4" href="#t" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Marketplace
                </a>
                <a className="text-xl font-normal text-white my-4" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Rankings
                </a>
                <a className="text-xl font-normal text-white my-4" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Connect a wallet
                </a>
               
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex filter drop-shadow-md px-12 py-5 h-25 items-center justify-between ">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="items-center gap-3 flex">
                <Store color="purple" size={24} />

                <Image
                    src="/NFT-Marketplace.png"
                    width={199}
                    height={19}
                    alt="Flowbite Logo"
                    className="hidden lg:inline-block"
                />

                <Image
                    src="/NFT-Marketplace.png"
                    width={144}
                    height={14}
                    alt="Flowbite Logo"
                    className="inline-block lg:hidden"
                />

            </div>
            <div className=" flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex gap-5">
                    <Link href="#" className="text-white px-5 py-3">
                        Marketplace
                    </Link>
                    <Link href="#" className="text-white px-5 py-3">
                        Rankings
                    </Link>
                    <Link href="#" className="text-white px-5 py-3">
                        Connect a wallet
                    </Link>
                    <button className='bg-purple rounded-xl px-8 py-4 flex justify-center items-center gap-3 text-white whitespace-nowrap' >
                        <UserRound color="#ffffff" />
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}