import React, { useRef, useState, useEffect } from 'react'

const steps = [
    {
        step: '01',
        title: 'Discovery & Strategy',
        desc: 'We analyze your business, data landscape, and goals to identify the highest-impact AI opportunities.',
        icon: '🔍',
        color: '#e8886f',
    },
    {
        step: '02',
        title: 'Design & Prototype',
        desc: 'Our team builds rapid prototypes and validates AI models with your real data in agile sprints.',
        icon: '🎨',
        color: '#d4735c',
    },
    {
        step: '03',
        title: 'Build & Integrate',
        desc: 'Production-grade AI systems deployed seamlessly into your existing tech stack and workflows.',
        icon: '⚙️',
        color: '#f0bfa0',
    },
    {
        step: '04',
        title: 'Monitor & Optimize',
        desc: 'Continuous model monitoring, retraining, and optimization to maximize long-term ROI.',
        icon: '📈',
        color: '#f4a58e',
    },
]

const StepCard = ({ step, title, desc, icon, color, index }) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const isEven = index % 2 === 0

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 200)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [index])

    return (
        <div
            ref={ref}
            className="relative flex items-center gap-8 md:gap-12"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? 'translateX(0)'
                    : `translateX(${isEven ? '-60px' : '60px'})`,
                transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
        >
            {/* Timeline dot and connector */}
            <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
                {/* Glow ring */}
                <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm z-10
                               transition-all duration-500"
                    style={{
                        background: `linear-gradient(135deg, ${color}ee, ${color}aa)`,
                        boxShadow: `0 0 ${isHovered ? '25px' : '10px'} ${color}40`,
                        animation: isVisible ? 'glow-pulse 3s ease-in-out infinite' : 'none',
                        animationDelay: `${index * 0.5}s`,
                        transform: `scale(${isHovered ? 1.15 : 1})`,
                    }}
                >
                    {step}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                    <div
                        className="w-0.5 flex-1 min-h-[60px] transition-all duration-1000"
                        style={{
                            background: `linear-gradient(to bottom, ${color}80, ${steps[index + 1]?.color || color}40)`,
                            opacity: isVisible ? 1 : 0.2,
                            transform: `scaleY(${isVisible ? 1 : 0})`,
                            transformOrigin: 'top',
                        }}
                    />
                )}
            </div>

            {/* Card */}
            <div
                className="flex-1 rounded-2xl p-7 glass cursor-default
                           transition-all duration-400"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    boxShadow: isHovered
                        ? `0 16px 40px ${color}15, 0 8px 20px rgba(0,0,0,0.08)`
                        : '0 4px 20px rgba(0,0,0,0.04)',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    borderLeft: `3px solid ${isHovered ? color : 'transparent'}`,
                }}
            >
                <div className="flex items-start gap-4">
                    {/* Mobile step number */}
                    <div
                        className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${color}ee, ${color}aa)` }}
                    >
                        {step}
                    </div>
                    <div className="flex-1">
                        {/* Icon */}
                        <span
                            className="text-2xl block mb-3 transition-transform duration-500"
                            style={{
                                transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                                filter: isHovered ? `drop-shadow(0 4px 8px ${color}40)` : 'none',
                            }}
                        >
                            {icon}
                        </span>
                        <h3
                            className="text-lg font-bold mb-2 transition-colors duration-500"
                            style={{ color: 'var(--text-dark)' }}
                        >
                            {title}
                        </h3>
                        <p
                            className="text-sm leading-relaxed transition-colors duration-500"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HowItWorks = () => {
    return (
        <section className="relative z-10 py-24 px-6" id="how-it-works">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-500"
                        style={{ color: 'var(--text-dark)' }}
                    >
                        How It{' '}
                        <span className="bg-gradient-to-r from-[#e8886f] via-[#d4735c] to-[#f0bfa0] bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p
                        className="text-lg max-w-xl mx-auto transition-colors duration-500"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        A proven four-step process from concept to production AI.
                    </p>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-6">
                    {steps.map((s, i) => (
                        <StepCard key={s.step} {...s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
