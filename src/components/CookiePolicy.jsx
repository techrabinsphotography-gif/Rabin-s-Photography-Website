import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
                        Cookie <span className="text-[#ff4f5a]">Policy</span>
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
                            What Are Cookies?
                        </h2>
                        <p className="mb-4">
                            Cookies are small text files that are stored on your device (computer or mobile device) when you visit certain websites. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">02</span>
                            How We Use Cookies
                        </h2>
                        <p className="mb-4">
                            Rabin's Photography uses cookies for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly, such as secure login and session management.</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                            <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced features.</li>
                            <li><strong>Advertising Cookies:</strong> Used to deliver advertisements more relevant to you and your interests.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">03</span>
                            Your Choices
                        </h2>
                        <p>
                            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">04</span>
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
