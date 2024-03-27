import { isNavOpen } from "../navStore";
import { useStore } from '@nanostores/react';
import logo_black from "../../public/wm_logo_black.png"
import logo_white from "../../public/wm_logo_white.png"
import { useEffect } from "react";

export default function NavLogo() {
    const $isNavOpen = useStore(isNavOpen);

    useEffect(() => {
        if ($isNavOpen) {
            scrollTo({ top: 0, left: 0,  behavior: "smooth"});
            document.body.classList.add("overflow-hidden");
        }
        else {
            document.body.classList.remove("overflow-hidden");
    
        }
    }, [$isNavOpen])
    
    return (
        <div className="w-full grid place-items-center absolute top-5 z-30">
            <a
                href="/"
                className="px-4 hover:rotate-180 transition duration-200 cursor-pointer"
            >
                {$isNavOpen && (
                    <img
                        onClick={() => isNavOpen.set(!$isNavOpen)}
                        src={logo_black.src}
                        alt="WM Logo Black"
                        height={45}
                        width={45}
                    ></img>
                )}
                {!$isNavOpen && (
                    <img
                        src={logo_white.src}
                        alt="WM Logo White"
                        height={45}
                        width={45}
                    ></img>
                )}
            </a>
        </div>
    )  
}