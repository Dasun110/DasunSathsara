import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#000000]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <div className="nav-link-mobile">Home</div>
                <div className="nav-link-mobile">About</div>
                <div className="nav-link-mobile">Project</div>
                <div className="nav-link-mobile">Contact</div>
            </div>
            <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-red-500 z-[100000]">
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNav;