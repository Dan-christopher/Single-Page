import React, { useState, useRef, useEffect, useCallback } from 'react'

const faqs = [
    {
        q: 'What industries do you work with?',
        a: 'We work across healthcare, finance, retail, logistics, manufacturing, and more. Our AI solutions are tailored to each industry\'s unique challenges and regulatory requirements.',
    },
    {
        q: 'How long does AI implementation take?',
        a: 'Typical projects range from 4–12 weeks depending on complexity. We follow agile sprints so you see progress from week one, with a fully deployed solution by the end of the engagement.',
    },
    {
        q: 'Do you provide ongoing support?',
        a: 'Absolutely. We offer continuous monitoring, model retraining, and optimization packages. Our Growth and Enterprise plans include dedicated support channels and SLAs.',
    },
    {
        q: 'Is my data secure?',
        a: 'Security is our top priority. We follow SOC 2 compliance standards, use end-to-end encryption, and can work within your own infrastructure if needed. Your data never leaves your control.',
    },
    {
        q: 'Can you integrate with existing systems?',
        a: 'Yes — we specialize in integrating AI into existing tech stacks. Whether it\'s ERP, CRM, data warehouses, or custom APIs, we ensure seamless connectivity with minimal disruption.',
    },
]

const FAQItem = ({ faq, index, isOpen, onToggle, isVisible }) => {
    const contentRef = useRef(null)
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [isOpen])

    return (
        <div
            className="rounded-xl border overflow-hidden backdrop-blur-sm transition-all duration-500"
            style={{
                backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 60%, transparent)',
                borderColor: isOpen
                    ? 'color-mix(in srgb, var(--peach, #f0bfa0) 50%, transparent)'
                    : 'color-mix(in srgb, var(--peach, #f0bfa0) 15%, transparent)',
                boxShadow: isOpen ? '0 8px 30px rgba(232,136,111,0.1)' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, 
                            transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s,
                            border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease`,
            }}
        >
            {/* Glowing left accent when open */}
            <div
                className="absolute left-0 top-0 w-1 rounded-r-full transition-all duration-500"
                style={{
                    height: isOpen ? '100%' : '0%',
                    background: 'linear-gradient(to bottom, #e8886f, #f0bfa0)',
                    opacity: isOpen ? 1 : 0,
                    boxShadow: isOpen ? '2px 0 15px rgba(232,136,111,0.2)' : 'none',
                }}
            />

            <button
                onClick={() => onToggle(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer relative"
            >
                {/* Question number badge */}
                <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mr-4
                               transition-all duration-500"
                    style={{
                        background: isOpen
                            ? 'linear-gradient(135deg, #e8886f, #d4735c)'
                            : 'color-mix(in srgb, var(--peach, #f0bfa0) 15%, transparent)',
                        color: isOpen ? '#fff' : 'var(--text-muted)',
                        boxShadow: isOpen ? '0 4px 12px rgba(232,136,111,0.3)' : 'none',
                        transform: isOpen ? 'scale(1.05)' : 'scale(1)',
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>

                <span className="text-sm sm:text-base font-semibold pr-4 transition-colors duration-500 flex-1"
                    style={{ color: 'var(--text-dark)' }}>
                    {faq.q}
                </span>

                {/* Animated icon */}
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                               transition-all duration-500"
                    style={{
                        background: isOpen
                            ? 'linear-gradient(135deg, #e8886f20, #f0bfa020)'
                            : 'transparent',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e8886f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </button>

            {/* Smooth height animation */}
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="px-6 pb-5 pl-[4.25rem] text-sm leading-relaxed transition-colors duration-500"
                    style={{ color: 'var(--text-muted)' }}>
                    {faq.a}
                </p>
            </div>
        </div>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)
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
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const toggle = useCallback((i) => setOpenIndex(prev => prev === i ? null : i), [])

    return (
        <section ref={sectionRef} className="relative z-10 py-24 px-6" id="faq">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div
                    className="text-center mb-14"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
                    }}
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-500"
                        style={{ color: 'var(--text-dark)' }}>
                        Frequently Asked{' '}
                        <span className="bg-gradient-to-r from-[#e8886f] via-[#d4735c] to-[#f0bfa0] bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg max-w-xl mx-auto transition-colors duration-500"
                        style={{ color: 'var(--text-muted)' }}>
                        Everything you need to know before getting started.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            faq={faq}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={toggle}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
