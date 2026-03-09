import React from 'react'

const footerLinks = {
    Product: ['Features', 'Pricing', 'Case Studies', 'Integrations', 'API Docs'],
    Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
    Resources: ['Documentation', 'Community', 'Tutorials', 'Webinars', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

const socials = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'GitHub', icon: '⌥' },
    { name: 'Discord', icon: '💬' },
]

const Footer = () => {
    return (
        <footer className="relative z-10 pt-20 pb-8 px-6">
            {/* Gradient divider */}
            <div className="max-w-6xl mx-auto mb-16">
                <div
                    className="h-px w-full"
                    style={{
                        background: 'linear-gradient(to right, transparent, #e8886f, #f0bfa0, #e8886f, transparent)',
                        opacity: 0.3,
                        animation: 'shimmer-border 4s ease-in-out infinite',
                        backgroundSize: '200% 100%',
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-extrabold mb-4 bg-gradient-to-r from-[#e8886f] to-[#f0bfa0] bg-clip-text text-transparent">
                            AI Studio
                        </h3>
                        <p className="text-sm leading-relaxed mb-6 transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                            Building intelligent digital solutions for tomorrow's challenges.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href="#"
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold glass
                                               hover:scale-110 hover:-translate-y-0.5 active:scale-95
                                               transition-all duration-300 group"
                                    title={s.name}
                                >
                                    <span
                                        className="transition-colors duration-300 group-hover:text-[#e8886f]"
                                        style={{ color: 'var(--text-muted)' }}
                                    >
                                        {s.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4
                                className="text-sm font-bold mb-4 uppercase tracking-wider transition-colors duration-500"
                                style={{ color: 'var(--text-dark)' }}
                            >
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm transition-all duration-300 relative
                                                       hover:translate-x-1 inline-block group"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            <span className="group-hover:text-[#e8886f] transition-colors duration-300">
                                                {link}
                                            </span>
                                            <span
                                                className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#e8886f] to-[#f0bfa0]
                                                           group-hover:w-full transition-all duration-300 rounded-full"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="rounded-2xl p-8 glass mb-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <h4 className="text-lg font-bold mb-1 transition-colors duration-500" style={{ color: 'var(--text-dark)' }}>
                                Stay ahead with AI insights
                            </h4>
                            <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                                Weekly curated AI news, tutorials, and product updates.
                            </p>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="flex-1 sm:w-60 px-4 py-2.5 rounded-xl text-sm outline-none
                                           transition-all duration-300 glass
                                           focus:ring-2 focus:ring-[#e8886f]/30 focus:border-[#e8886f]/40"
                                style={{
                                    color: 'var(--text-dark)',
                                }}
                            />
                            <button
                                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white
                                           bg-gradient-to-br from-[#e8886f] to-[#d4735c]
                                           shadow-[0_4px_15px_rgba(232,136,111,0.3)]
                                           hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,136,111,0.4)]
                                           transition-all duration-300 cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                        © 2026 AI Studio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
