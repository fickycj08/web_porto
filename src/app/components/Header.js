"use client";

import { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

export default function Header() {
    const [languageMenu, setLanguageMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Event untuk menutup dropdown saat klik di luar menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest(".dropdown")) {
                setLanguageMenu(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-[#0F182D] shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">My Portfolio</div>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="text-3xl md:hidden text-gray-300"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    {mobileMenu ? <MdClose /> : <MdMenu />}
                </button>

                {/* Navigation */}
                <nav
                    className={`${
                        mobileMenu ? "block" : "hidden"
                    } md:flex space-x-6 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#0F182D] md:bg-transparent shadow-md md:shadow-none md:py-0 py-4 px-6 md:px-0 z-10`}
                >
                    <a
                        href="/"
                        className="block md:inline-block text-gray-300 hover:text-white py-2"
                    >
                        Home
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="block md:inline-block text-gray-300 hover:text-white py-2"
                    >
                        Unduh CV
                    </a>
                    <a
                        href="/contact"
                        className="block md:inline-block text-gray-300 hover:text-white py-2"
                    >
                        Contact Me
                    </a>

                    {/* Dropdown untuk Bahasa */}
                    <div className="relative dropdown block md:inline-block">
                        <button
                            onClick={() => setLanguageMenu(!languageMenu)}
                            className="text-gray-300 hover:text-white focus:outline-none flex items-center"
                        >
                            Bahasa <MdKeyboardArrowDown className="ml-1" />
                        </button>
                        {languageMenu && (
                            <div className="absolute right-0 mt-2 w-32 bg-[#1A2238] shadow-lg rounded-md z-10">
                                <ul>
                                    <li>
                                        <button
                                            onClick={() => alert("Bahasa Indonesia")}
                                            className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                        >
                                            Indonesia
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => alert("English")}
                                            className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                        >
                                            English
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
