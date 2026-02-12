import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HelpSupport = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I book a session?",
            answer: "You can book a session directly through our app or website by clicking the 'Book Now' button. Choose your preferred date, time, and package, and you'll receive an instant confirmation."
        },
        {
            question: "What is the cancellation policy?",
            answer: "We understand plans change. You can maximize flexibility by cancelling up to 24 hours before your session for a full refund. Cancellations within 24 hours may incur a small fee."
        },
        {
            question: "When will I receive my photos?",
            answer: "Our standard delivery time is 3-5 business days for edited photos. Premium members get priority editing with 24-hour turnaround."
        },
        {
            question: "Do you offer destination photography?",
            answer: "Yes! We travel worldwide. Please contact our support team for a custom quote for destination weddings or events outside our primary service areas."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />

            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Help & <span className="text-purple-500">Support</span>
                    </h1>
                    <p className="text-gray-400 text-lg">We're here to help. Find answers or contact us directly.</p>
                </motion.div>

                {/* FAQ Grid */}
                <div className="grid gap-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                            >
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Options */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-20 grid md:grid-cols-2 gap-8"
                >
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 text-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                        <p className="text-gray-400 mb-6">Get a response within 24 hours.</p>
                        <a href="mailto:support@rabinsphotography.com" className="text-blue-400 font-medium hover:underline">
                            rabinsphotography@gmail.com                        </a>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20 text-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">WhatsApp Support</h3>
                        <p className="text-gray-400 mb-6">Chat with us directly.</p>
                        <a 
                            href="https://wa.me/919038858523" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 rounded-full bg-green-600/20 text-green-400 border border-green-600/30 hover:bg-green-600/30 transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>

                 {/* Back Button */}
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                   <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                   </a>
                </motion.div>
            </div>
        </div>
    );
};

export default HelpSupport;
