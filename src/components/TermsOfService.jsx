import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff4f5a]/5 rounded-full blur-3xl animate-pulse" />

            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Terms of <span className="text-blue-500">Service</span>
                    </h1>
                    <p className="text-gray-400">Effective Date: February 2026</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12 text-gray-300 leading-relaxed"
                >
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Rabin's Photography website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
                        <p>
                            Rabin's Photography provides professional photography services, booking management, and photo delivery through our digital platform. We reserve the right to modify or discontinue any part of our services without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Booking & Cancellations</h2>
                        <p className="mb-4">
                            All bookings are subject to availability and confirmation.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>A deposit may be required to secure your booking.</li>
                            <li>Cancellations made less than 24 hours before the scheduled session may be subject to a cancellation fee.</li>
                            <li>Rescheduling is permitted based on availability.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                        <p>
                            While you retain ownership of your personal likeness, Rabin's Photography retains the copyright to all images produced. You are granted a license for personal use. Commercial use requires a separate agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. User Conduct</h2>
                        <p>
                            You agree not to misuse our services or help anyone else do so. This includes not attempting to access identifying information of other users or disrupting our systems.
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

export default TermsOfService;
