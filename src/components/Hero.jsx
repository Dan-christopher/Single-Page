import React from 'react'

const Hero = () => {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden">

            {/* Floating decorative blurs — logo-matched colors */}
            <div className="absolute top-16 left-[10%] w-72 h-72 bg-gradient-to-br from-[#e8886f]/25 to-[#f0bfa0]/20 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float 8s ease-in-out infinite' }} />
            <div className="absolute bottom-20 right-[8%] w-64 h-64 bg-gradient-to-br from-[#f0bfa0]/25 to-[#fce8d5]/30 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float-delayed 10s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#f4a58e]/15 to-[#f7dcc8]/15 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'pulse-soft 6s ease-in-out infinite' }} />

            {/* Badge */}
            <div className="relative mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full
                               backdrop-blur-md border shadow-[0_2px_10px_rgba(232,136,111,0.06)]
                               transition-all duration-500"
                    style={{
                        backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 60%, transparent)',
                        borderColor: 'color-mix(in srgb, var(--peach, #f0bfa0) 30%, transparent)',
                        color: 'var(--text-medium)'
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#e8886f] to-[#f0bfa0] animate-pulse" />
                    Now Available
                </span>
            </div>

            {/* Heading */}
            <h1 className="relative max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                <span style={{ color: 'var(--text-dark)' }} className="transition-colors duration-500">Build Something</span>
                <br />
                <span className="bg-gradient-to-r from-[#e8886f] via-[#d4735c] to-[#f0bfa0] bg-clip-text text-transparent">
                    Extraordinary
                </span>
            </h1>

            {/* Subtitle */}
            <p className="relative max-w-2xl text-lg sm:text-xl leading-relaxed mb-10 font-normal transition-colors duration-500"
                style={{ color: 'var(--text-muted)' }}
            >
                Craft premium digital experiences with modern AI-powered design,
                seamless interactions, and intelligent creative tools.
            </p>

            {/* CTA Buttons */}
            <div className="relative flex flex-wrap items-center justify-center gap-4 mb-16">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white
                               bg-gradient-to-br from-[#e8886f] to-[#d4735c] rounded-xl
                               shadow-[0_4px_20px_rgba(232,136,111,0.35),0_2px_40px_rgba(212,115,92,0.15)]
                               hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,136,111,0.45),0_4px_50px_rgba(212,115,92,0.25)]
                               transition-all duration-300"
                >
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold
                               backdrop-blur-md border rounded-xl
                               shadow-[0_2px_8px_rgba(232,136,111,0.06)]
                               hover:-translate-y-0.5
                               hover:shadow-[0_4px_12px_rgba(232,136,111,0.12)]
                               transition-all duration-300"
                    style={{
                        color: 'var(--text-medium)',
                        backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 50%, transparent)',
                        borderColor: 'color-mix(in srgb, var(--peach, #f0bfa0) 40%, transparent)'
                    }}
                >
                    Learn More
                </a>
            </div>

            {/* Stats row */}
            <div className="relative flex flex-wrap items-center justify-center gap-12 sm:gap-16">
                {[
                    { value: '10K+', label: 'Active Users' },
                    { value: '99.9%', label: 'Uptime' },
                    { value: '4.9★', label: 'Rating' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#e8886f] to-[#f0bfa0] bg-clip-text text-transparent">
                            {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm font-medium mt-1 tracking-wide transition-colors duration-500"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hero
