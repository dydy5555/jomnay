'use client'

import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";

import React, { useState, useEffect }  from 'react'

function SideBar({ show, setter }:any) {
    const router = useRouter();

    const className = "text-black transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    const MenuItem = ({ name, route }:any) => {
        const colorClass = router.usePathname === route ? "text-black" : "text-black/50 hover:text-black";

        return (
            // setter(oldVal => !oldVal);
            <Link
                href={route}
                onClick={() => {
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-black/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                  
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0  z-30`}
            onClick={() => {
            }}
            />
            // setter(oldVal => !oldVal);
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="flex flex-col">
                    <MenuItem
                        name="Home"
                        route="/"
                        
                    />
                    <MenuItem
                        name="T-Shirts"
                        route="/#"
                       
                    />
                    <MenuItem
                        name="Hats"
                        route="/#"
                       
                    />
                    <MenuItem
                        name="About Us"
                        route="/#"
                        
                    />
                    <MenuItem
                        name="Contact"
                        route="/#"
                        
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}

export default SideBar