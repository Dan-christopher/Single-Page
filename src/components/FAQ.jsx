import React, { useState } from 'react'

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

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <section className="relative z-10 py-24 px-6" id="faq">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-500"
                        style={{ color: 'var(--text-dark)' }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg max-w-xl mx-auto transition-colors duration-500"
                        style={{ color: 'var(--text-muted)' }}>
                        Everything you need to know before getting started.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={i}
                                className="rounded-xl border overflow-hidden backdrop-blur-sm transition-all duration-300"
                                style={{
                                    backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 60%, transparent)',
                                    borderColor: isOpen
                                        ? 'color-mix(in srgb, var(--peach, #f0bfa0) 50%, transparent)'
                                        : 'color-mix(in srgb, var(--peach, #f0bfa0) 15%, transparent)',
                                    boxShadow: isOpen ? '0 4px 20px rgba(232,136,111,0.08)' : 'none',
                                }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between text-left px-6 py-5 cursor-pointer"
                                >
                                    <span className="text-sm sm:text-base font-semibold pr-4 transition-colors duration-500"
                                        style={{ color: 'var(--text-dark)' }}>
                                        {faq.q}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#e8886f"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <div
                                    className="overflow-hidden transition-all duration-400 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? '200px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <p className="px-6 pb-5 text-sm leading-relaxed transition-colors duration-500"
                                        style={{ color: 'var(--text-muted)' }}>
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ
