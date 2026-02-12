import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#ff4f5a]/10 to-transparent pointer-events-none" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 left-10 w-72 h-72 bg-[#ff4f5a]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Privacy <span className="text-[#ff4f5a]">Policy</span>
                    </h1>
                    <p className="text-gray-400">Last updated: February 2026</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12 text-gray-300 leading-relaxed"
                >
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">01</span>
                            Information We Collect
                        </h2>
                        <p className="mb-4">
                            At Rabin's Photography, we collect information that you provide directly to us, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Name, email address, and phone number when you book a session.</li>
                            <li>Payment information processed securely through our payment providers.</li>
                            <li>Photographs and media content uploaded or created through our services.</li>
                            <li>Device information and usage data when you access our app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">02</span>
                            How We Use Your Information
                        </h2>
                        <p>
                            We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you technical notices and support messages, and communicate with you about products, services, offers, and events.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">03</span>
                            Data Security
                        </h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect the security of your personal information. Your photos are stored on secure cloud servers with strict access controls.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">04</span>
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:privacy@rabinsphotography.com" className="text-[#ff4f5a] hover:underline mt-2 inline-block">
                                privacy@rabinsphotography.com
                            </a>
                        </p>
                    </section>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
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

export default PrivacyPolicy;
