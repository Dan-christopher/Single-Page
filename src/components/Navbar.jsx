import React from 'react'
import logo from '../assets/LOGO1.png'
import moonIcon from '../assets/MOON.svg'

const Navbar = () => {
    return (
        <nav className="relative z-10 w-full backdrop-blur-xl bg-[rgba(11,15,25,0.5)] border-b border-white/[0.06] transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-14 w-auto object-contain brightness-110 hover:brightness-130 hover:drop-shadow-[0_0_8px_rgba(79,110,247,0.3)] transition-all duration-300"
                    />
                </div>

                {/* Nav Links */}
                <ul className="flex items-center gap-8">
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="relative text-sm font-medium text-white/55 tracking-wide hover:text-white/90 transition-colors duration-250
                                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                                           after:bg-gradient-to-r after:from-[#4f6ef7] after:to-[#7c3aed] after:rounded-sm
                                           after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-white/[0.04] border border-white/[0.06] cursor-pointer hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-250">
                        <img
                            src={moonIcon}
                            alt="moon"
                            className="w-[18px] h-[18px] opacity-60 hover:opacity-100 transition-opacity duration-250"
                        />
                    </button>
                    <a
                        href="#"
                        className="inline-flex items-center px-5 py-2 text-sm font-semibold tracking-wide text-white
                                   bg-gradient-to-br from-[#4f6ef7] to-[#7c3aed] rounded-[10px]
                                   shadow-[0_0_20px_rgba(79,110,247,0.2),0_0_40px_rgba(124,58,237,0.1)]
                                   hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(79,110,247,0.35),0_0_50px_rgba(124,58,237,0.2)]
                                   transition-all duration-300"
                    >
                        Connect
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar