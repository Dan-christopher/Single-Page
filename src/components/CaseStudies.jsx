import React, { useRef, useState, useEffect, useCallback } from 'react'

const cases = [
    {
        company: 'HealthFlow AI',
        metric: '+45% Efficiency',
        desc: 'Automated patient triage system reduced wait times and improved diagnostic accuracy across 12 clinics.',
        color: '#e8886f',
    },
    {
        company: 'RetailEdge',
        metric: '3x Revenue Growth',
        desc: 'AI-driven product recommendations and dynamic pricing engine boosted quarterly revenue by 210%.',
        color: '#d4735c',
    },
    {
        company: 'LogiSmart',
        metric: '60% Cost Reduction',
        desc: 'Predictive logistics optimization cut shipping costs and delivery times for a national supply chain.',
        color: '#f0bfa0',
    },
]

const CaseCard = ({ company, metric, desc, color, index }) => {
    const cardRef = useRef(null)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 150)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [index])

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setTilt({ x: (y - 0.5) * -10, y: (x - 0.5) * 10 })
        setMousePos({ x: x * 100, y: y * 100 })
    }, [])

    return (
        <div
            ref={cardRef}
            className="card-3d"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setTilt({ x: 0, y: 0 })
                setIsHovered(false)
            }}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(60px) rotateX(8deg)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
        >
            <div
                className="card-3d-inner rounded-2xl overflow-hidden border border-white/[0.06] cursor-default"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'translateZ(8px)' : ''}`,
                    boxShadow: isHovered
                        ? `0 20px 50px ${color}15, 0 10px 25px rgba(0,0,0,0.15)`
                        : '0 2px 20px rgba(0,0,0,0.2)',
                }}
            >
                {/* Image placeholder */}
                <div className="h-44 relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                    }}
                >
                    {/* Mouse follow spotlight */}
                    <div
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${color}30, transparent 50%)`,
                            opacity: isHovered ? 1 : 0,
                        }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white/80
                                       transition-all duration-500"
                            style={{
                                background: `linear-gradient(135deg, ${color}88, ${color}cc)`,
                                transform: isHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0)',
                                boxShadow: isHovered ? `0 8px 25px ${color}50` : 'none',
                            }}
                        >
                            {company[0]}
                        </div>
                    </div>
                </div>

                {/* Content with parallax effect */}
                <div
                    className="p-6 transition-transform duration-200"
                    style={{
                        transform: isHovered ? `translateX(${(tilt.y / 10) * 3}px) translateY(${(tilt.x / 10) * -3}px)` : 'none',
                    }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#a8887a] mb-2">
                        {company}
                    </p>

                    {/* Animated gradient metric */}
                    <div className="relative mb-3">
                        <p className="text-2xl font-extrabold bg-gradient-to-r from-[#e8886f] to-[#f0bfa0] bg-clip-text text-transparent">
                            {metric}
                        </p>
                        <div
                            className="h-0.5 rounded-full mt-2 transition-all duration-600"
                            style={{
                                width: isHovered ? '100%' : '0%',
                                background: `linear-gradient(to right, ${color}, ${color}40)`,
                            }}
                        />
                    </div>

                    <p className="text-sm leading-relaxed text-[#8a7a6e] mb-4">
                        {desc}
                    </p>
                    <a href="#"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8886f]
                                   hover:text-[#f0bfa0] transition-all duration-300 group/link">
                        View Case Study
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

const CaseStudies = () => {
    return (
        <section className="relative z-10 py-24 px-6"
            style={{
                background: 'linear-gradient(135deg, #2a2220 0%, #1e1a18 40%, #252020 100%)',
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#fef5ee]">
                        Success Stories
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-[#a8887a]">
                        Real impact. Real results. See how we've helped businesses transform with AI.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((c, i) => (
                        <CaseCard key={c.company} {...c} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
