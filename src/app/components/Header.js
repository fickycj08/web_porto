"use client";

import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
    const [languageMenu, setLanguageMenu] = useState(false);

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
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-500">My Portfolio</div>

                {/* Navigation */}
                <nav className="space-x-6 flex items-center">
                    <a href="/" className="text-gray-700 hover:text-blue-500">
                        Home
                    </a>
                    <a href="/cv.pdf" download className="text-gray-700 hover:text-blue-500">
                        Unduh CV
                    </a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-500">
                        Contact Me
                    </a>

                    {/* Dropdown untuk Bahasa */}
                    <div className="relative dropdown">
                        <button
                            onClick={() => setLanguageMenu(!languageMenu)}
                            className="text-gray-700 hover:text-blue-500 focus:outline-none flex items-center"
                        >
                            Bahasa <MdKeyboardArrowDown className="ml-1" />
                        </button>
                        {languageMenu && (
                            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10">
                                <ul>
                                    <li>
                                        <button
                                            onClick={() => alert("Bahasa Indonesia")}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Indonesia
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => alert("English")}
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
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
