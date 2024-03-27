import { useStore } from '@nanostores/react';
import { isNavOpen } from '../navStore';

export default function NavFlyout() {
    const $isNavOpen = useStore(isNavOpen);

    return (
        <>
            <div
                aria-pressed={$isNavOpen}
                className="w-0 h-0 aria-pressed:h-[200vh] aria-pressed:w-[200vh] transition-all duration-1000 max-w-full md:hidden fixed -right-24 -top-32 bg-white rounded-full z-20 overflow-hidden"
            >
            </div>
            <div
                aria-pressed={$isNavOpen}
                className="hidden md:hidden fixed text-3xl text-right pr-4 top-0 left-0 w-screen h-screen text-black aria-pressed:flex flex-col gap-12 justify-center items-end z-20 overflow-hidden"
            >
                <FlyoutLink 
                    title="SERVICES"
                    link="/services"
                />
                <FlyoutLink 
                    title="CLIENTS"
                    link="/clients"
                />
                <FlyoutLink 
                    title="ABOUT US"
                    link="/about"
                />
                <FlyoutLink 
                    title="CONTACT"
                    link="/contact"
                />
            </div>
        </>
    )
}

interface FlyoutLinkProps {
    title: string;
    link: string;
}

function FlyoutLink({title, link}: FlyoutLinkProps) {
    const $isNavOpen = useStore(isNavOpen);

    return (
        <a
            onClick={() => isNavOpen.set(!$isNavOpen)}
            href={link}
            className="relative w-fit group transition py-2 px-1 opacity-0 animate-[fadeIn_0.5s_0.4s_forwards]"
        >
            <span className="relative group-hover:text-white transition z-10">            
                {title}
            </span>
            <div className="absolute top-0 left-0 group-hover:w-full w-0 bg-black h-full transition-all z-0"></div>
        </a>
    )   
}