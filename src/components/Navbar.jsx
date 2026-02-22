import React from 'react'
import logo from '../assets/LOGO1.png'
import sunIcon from '../assets/SUN.svg'

const Navbar = () => {
    return (
        <nav className="relative z-10 w-full backdrop-blur-xl bg-white/65 border-b border-[#f0bfa0]/20 shadow-[0_1px_3px_rgba(61,44,34,0.04)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={logo}
                        alt="ai model logo"
                        className="h-14 w-auto object-contain hover:drop-shadow-[0_0_12px_rgba(232,136,111,0.3)] transition-all duration-300"
                    />
                </div>

                {/* Nav Links */}
                <ul className="flex items-center gap-8">
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="relative text-sm font-medium text-[#7a5c4f] tracking-wide hover:text-[#3d2c22] transition-colors duration-250
                                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                                           after:bg-gradient-to-r after:from-[#e8886f] after:to-[#f0bfa0] after:rounded-sm
                                           after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#fce8d5]/60 border border-[#f0bfa0]/30 cursor-pointer hover:bg-[#fce8d5] hover:border-[#f0bfa0]/50 transition-all duration-250">
                        <img
                            src={sunIcon}
                            alt="theme"
                            className="w-[18px] h-[18px] opacity-60 hover:opacity-100 transition-opacity duration-250"
                        />
                    </button>
                    <a
                        href="#"
                        className="inline-flex items-center px-5 py-2 text-sm font-semibold tracking-wide text-white
                                   bg-gradient-to-br from-[#e8886f] to-[#d4735c] rounded-xl
                                   shadow-[0_4px_15px_rgba(232,136,111,0.3),0_2px_30px_rgba(212,115,92,0.15)]
                                   hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,136,111,0.4),0_4px_40px_rgba(212,115,92,0.2)]
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