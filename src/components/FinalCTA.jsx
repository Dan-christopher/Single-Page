import React, { useState, useEffect, useRef, useMemo } from 'react'

const Sparkle = ({ style }) => (
    <div
        className="absolute pointer-events-none"
        style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e8886f, #f0bfa0)',
            boxShadow: '0 0 6px rgba(232,136,111,0.4)',
            animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            ...style,
        }}
    />
)

const FinalCTA = () => {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    // Generate sparkle positions
    const sparkles = useMemo(() =>
        Array.from({ length: 12 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.3 + Math.random() * 0.5,
        })), [])

    return (
        <section ref={sectionRef} className="relative z-10 py-28 px-6 overflow-hidden">
            {/* Floating blurred shapes */}
            <div className="absolute top-10 left-[5%] w-80 h-80 bg-gradient-to-br from-[#e8886f]/20 to-[#f0bfa0]/15 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float 10s ease-in-out infinite' }} />
            <div className="absolute bottom-10 right-[5%] w-72 h-72 bg-gradient-to-br from-[#f0bfa0]/20 to-[#fce8d5]/25 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float-delayed 12s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#e8886f]/10 to-[#f0bfa0]/10 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />

            {/* Sparkle particles */}
            {sparkles.map((pos, i) => (
                <Sparkle key={i} style={pos} />
            ))}

            {/* Content */}
            <div className="relative max-w-3xl mx-auto text-center">
                <h2
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 transition-colors duration-500"
                    style={{
                        color: 'var(--text-dark)',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), color 0.5s ease',
                    }}
                >
                    Ready to Build the Future{' '}
                    <span
                        className="bg-clip-text text-transparent relative"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #e8886f, #d4735c, #f0bfa0, #e8886f)',
                            backgroundSize: '200% 100%',
                            animation: 'shimmer-border 4s ease-in-out infinite',
                        }}
                    >
                        with AI?
                    </span>
                </h2>

                <p
                    className="text-lg sm:text-xl leading-relaxed mb-10 transition-colors duration-500"
                    style={{
                        color: 'var(--text-muted)',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s, color 0.5s ease',
                    }}
                >
                    Let's transform your ideas into intelligent digital solutions.
                </p>

                {/* Buttons */}
                <div
                    className="flex flex-wrap items-center justify-center gap-4"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s',
                    }}
                >
                    <a
                        href="#"
                        className="relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white
                                   bg-gradient-to-br from-[#e8886f] to-[#d4735c] rounded-xl overflow-hidden
                                   shadow-[0_4px_20px_rgba(232,136,111,0.35),0_2px_40px_rgba(212,115,92,0.15)]
                                   hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,136,111,0.45),0_4px_50px_rgba(212,115,92,0.25)]
                                   transition-all duration-300 group"
                    >
                        {/* Shimmer effect */}
                        <span
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 3s ease-in-out infinite',
                            }}
                        />
                        Schedule a Consultation
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold
                                   backdrop-blur-md border rounded-xl
                                   shadow-[0_2px_8px_rgba(232,136,111,0.06)]
                                   hover:-translate-y-0.5
                                   hover:shadow-[0_4px_12px_rgba(232,136,111,0.12)]
                                   transition-all duration-300"
                        style={{
                            color: 'var(--text-medium)',
                            backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 50%, transparent)',
                            borderColor: 'color-mix(in srgb, var(--peach, #f0bfa0) 40%, transparent)',
                        }}
                    >
                        Talk to an Expert
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
