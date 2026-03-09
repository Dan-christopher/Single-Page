import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
    const [statsVisible, setStatsVisible] = useState(false)
    const [headerVisible, setHeaderVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        // Staggered entrance
        setTimeout(() => setHeaderVisible(true), 200)
        setTimeout(() => setStatsVisible(true), 800)
    }, [])

    const stats = [
        { value: '10K+', label: 'Active Users' },
        { value: '99.9%', label: 'Uptime' },
        { value: '4.9★', label: 'Rating' },
    ]

    return (
        <section
            ref={sectionRef}
            className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden"
        >
            {/* Floating decorative blurs */}
            <div className="absolute top-16 left-[10%] w-72 h-72 bg-gradient-to-br from-[#e8886f]/25 to-[#f0bfa0]/20 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float 8s ease-in-out infinite' }} />
            <div className="absolute bottom-20 right-[8%] w-64 h-64 bg-gradient-to-br from-[#f0bfa0]/25 to-[#fce8d5]/30 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float-delayed 10s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#f4a58e]/15 to-[#f7dcc8]/15 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'pulse-soft 6s ease-in-out infinite' }} />

            {/* Badge — slide down + fade */}
            <div
                className="relative mb-8"
                style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                }}
            >
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

            {/* Heading — word by word reveal */}
            <h1 className="relative max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                <span className="overflow-hidden inline-block">
                    <span
                        className="inline-block transition-colors duration-500"
                        style={{
                            color: 'var(--text-dark)',
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
                        }}
                    >
                        Build Something
                    </span>
                </span>
                <br />
                <span className="overflow-hidden inline-block">
                    <span
                        className="inline-block bg-gradient-to-r from-[#e8886f] via-[#d4735c] to-[#f0bfa0] bg-clip-text text-transparent"
                        style={{
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s',
                        }}
                    >
                        Extraordinary
                    </span>
                </span>
            </h1>

            {/* Subtitle */}
            <p
                className="relative max-w-2xl text-lg sm:text-xl leading-relaxed mb-10 font-normal transition-colors duration-500"
                style={{
                    color: 'var(--text-muted)',
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s, color 0.5s ease',
                }}
            >
                Craft premium digital experiences with modern AI-powered design,
                seamless interactions, and intelligent creative tools.
            </p>

            {/* CTA Buttons — with shimmer idle effect */}
            <div
                className="relative flex flex-wrap items-center justify-center gap-4 mb-16"
                style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s',
                }}
            >
                <a
                    href="#"
                    className="relative inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white
                               bg-gradient-to-br from-[#e8886f] to-[#d4735c] rounded-xl overflow-hidden
                               shadow-[0_4px_20px_rgba(232,136,111,0.35),0_2px_40px_rgba(212,115,92,0.15)]
                               hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,136,111,0.45),0_4px_50px_rgba(212,115,92,0.25)]
                               transition-all duration-300 group"
                >
                    {/* Shimmer sweep */}
                    <span
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                            backgroundSize: '200% 100%',
                            animation: 'shimmer 3s ease-in-out infinite',
                        }}
                    />
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

            {/* Stats row — staggered entrance */}
            <div className="relative flex flex-wrap items-center justify-center gap-12 sm:gap-16">
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className="text-center"
                        style={{
                            opacity: statsVisible ? 1 : 0,
                            transform: statsVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                        }}
                    >
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
