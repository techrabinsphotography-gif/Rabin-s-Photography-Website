import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchCookiePolicy } from '../api';

const CookiePolicy = () => {
    const [policy, setPolicy] = useState(null);
    
    useEffect(() => {
        fetchCookiePolicy()
            .then(data => setPolicy(data))
            .catch(err => console.error("Failed to load policy", err));
    }, []);

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
                    <p className="text-gray-400">Last updated: {policy && policy.lastUpdated ? new Date(policy.lastUpdated).toLocaleDateString() : 'February 2026'}</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12 text-gray-300 leading-relaxed"
                >
                    {(!policy || !policy.sections || policy.sections.length === 0) ? (
                        <div className="py-20 flex justify-center"><div className="w-10 h-10 border-4 border-[#ff4f5a] border-t-transparent flex items-center justify-center rounded-full animate-spin"></div></div>
                    ) : (
                        policy.sections.map((section, idx) => (
                            <section key={idx}>
                                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#ff4f5a]/10 text-[#ff4f5a] flex items-center justify-center text-sm">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    {section.title}
                                </h2>
                                <div className="mb-4 whitespace-pre-wrap">
                                    {section.content}
                                </div>
                            </section>
                        ))
                    )}
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                   <a href="/" onClick={() => sessionStorage.setItem('scrollTo', 'footer')} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
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
