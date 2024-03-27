import { useStore } from '@nanostores/react';
import { isNavOpen } from '../navStore';

export default function NavHamburger() {
    const $isNavOpen = useStore(isNavOpen);

    return (
        <button
            onClick={() => isNavOpen.set(!$isNavOpen)}
            className="md:hidden h-5 w-8 mr-6 mt-4 cursor-pointer z-40 transition ease-in relative group"
        >
            <span
                className={`${
                    $isNavOpen ? "bg-black rotate-45 top-2" : "bg-white top-0"
                } h-1 w-full rounded-lg transition absolute left-0`}
            ></span>
            <span
                className={`${
                    $isNavOpen ? "hidden" : "bg-white top-2"
                } h-1 w-full rounded-lg transition absolute left-0`}
            ></span>
            <span
                className={`${
                    $isNavOpen
                        ? "bg-black -rotate-45 top-2"
                        : "bg-white top-4"
                } h-1 w-full rounded-lg transition absolute left-0`}
            ></span>
        </button>
    )
}