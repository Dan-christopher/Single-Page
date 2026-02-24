import React from 'react'

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
                    {cases.map((c) => (
                        <div
                            key={c.company}
                            className="group rounded-2xl overflow-hidden border border-white/[0.06]
                                        hover:-translate-y-1 transition-all duration-400 cursor-default"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                boxShadow: '0 2px 20px rgba(0,0,0,0.2)',
                            }}
                        >
                            {/* Image placeholder */}
                            <div className="h-44 relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${c.color}22, ${c.color}44)`,
                                }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white/80"
                                        style={{ background: `linear-gradient(135deg, ${c.color}88, ${c.color}cc)` }}>
                                        {c.company[0]}
                                    </div>
                                </div>
                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 80%, ${c.color}30, transparent 70%)`,
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-[#a8887a] mb-2">
                                    {c.company}
                                </p>
                                <p className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-[#e8886f] to-[#f0bfa0] bg-clip-text text-transparent">
                                    {c.metric}
                                </p>
                                <p className="text-sm leading-relaxed text-[#8a7a6e] mb-4">
                                    {c.desc}
                                </p>
                                <a href="#"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8886f]
                                               hover:text-[#f0bfa0] transition-colors duration-300">
                                    View Case Study
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
