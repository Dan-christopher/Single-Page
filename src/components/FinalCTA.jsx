import React from 'react'

const FinalCTA = () => {
    return (
        <section className="relative z-10 py-28 px-6 overflow-hidden">
            {/* Floating blurred shapes */}
            <div className="absolute top-10 left-[5%] w-80 h-80 bg-gradient-to-br from-[#e8886f]/20 to-[#f0bfa0]/15 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float 10s ease-in-out infinite' }} />
            <div className="absolute bottom-10 right-[5%] w-72 h-72 bg-gradient-to-br from-[#f0bfa0]/20 to-[#fce8d5]/25 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'float-delayed 12s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#e8886f]/10 to-[#f0bfa0]/10 rounded-full blur-3xl pointer-events-none"
                style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />

            {/* Content */}
            <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 transition-colors duration-500"
                    style={{ color: 'var(--text-dark)' }}>
                    Ready to Build the Future{' '}
                    <span className="bg-gradient-to-r from-[#e8886f] via-[#d4735c] to-[#f0bfa0] bg-clip-text text-transparent">
                        with AI?
                    </span>
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-10 transition-colors duration-500"
                    style={{ color: 'var(--text-muted)' }}>
                    Let's transform your ideas into intelligent digital solutions.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white
                                   bg-gradient-to-br from-[#e8886f] to-[#d4735c] rounded-xl
                                   shadow-[0_4px_20px_rgba(232,136,111,0.35),0_2px_40px_rgba(212,115,92,0.15)]
                                   hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,136,111,0.45),0_4px_50px_rgba(212,115,92,0.25)]
                                   transition-all duration-300"
                    >
                        Schedule a Consultation
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
