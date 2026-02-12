import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => setShow(true), 2000); 
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 pointer-events-none"
                >
                    <div className="max-w-5xl mx-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white pointer-events-auto ring-1 ring-white/10">
                        <div className="flex-1 space-y-2">
                             <div className="flex items-center gap-3 mb-1">
                                <Cookie className="w-8 h-8 text-[#ff4f5a] animate-bounce" />
                                <h3 className="font-bold text-lg bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">We Value Your Privacy</h3>
                             </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
                                <Link to="/cookie-policy" className="text-[#ff4f5a] hover:text-[#ff4f5a]/80 font-medium ml-1 transition-colors underline decoration-[#ff4f5a]/30 underline-offset-4">Read our Cookie Policy</Link>
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <button 
                                onClick={() => setShow(false)}
                                className="flex-1 md:flex-none px-6 py-3 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 transition-all text-sm font-medium hover:text-white"
                            >
                                Maybe Later
                            </button>
                            <button 
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-8 py-3 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white hover:shadow-lg hover:shadow-[#ff4f5a]/20 transition-all text-sm font-bold transform hover:-translate-y-0.5"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
