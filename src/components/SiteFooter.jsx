import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import finalLogo from '../assets/recent/final logo.png';

const SiteFooter = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showAppStorePopup, setShowAppStorePopup] = useState(false);

    return (
        <footer className="w-full bg-black text-gray-400 pt-20 pb-10 px-8 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff4f5a]/5 rounded-full blur-[120px]" />

            {/* Top Footer */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">

                {/* Brand */}
                <div>
                    <img src={finalLogo} alt="Rabin's Photography" className="w-64 mb-4 object-contain" />
                    <p className="text-white text-xs mt-4 leading-relaxed max-w-xs">Book. Track. Deliver. Professional photography management, all in one app.</p>
                </div>

                {/* Column 1 — Creative Hub */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Creative Hub</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <a href="https://www.behance.net/rabinsphotographyind" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <a href="https://www.google.com/maps/place/Rabin's+Photography%C2%AD/@22.5960327,88.3917177,18.33z/data=!4m8!3m7!1s0x3a0277b182fd5f73:0xc2d04a221fb9ff27!8m2!3d22.5941259!4d88.3943257!9m1!1b1!16s%2Fg%2F11kkmt3_np?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Testimonials</a>
                        </li>
                    </ul>
                </div>

                {/* Column 2 — For Clients */}
                <div>
                    <h3 className="text-white font-semibold mb-4">For Clients</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <a href="https://calendly.com/rabinsphotography" target="_blank" rel="noopener noreferrer">Schedule a Meeting</a>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <a href="https://g.page/r/CSf_uR8iStDCEBM/review" target="_blank" rel="noopener noreferrer">Give a Review</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 — Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link to="/Aboutus" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link to="/careers" onClick={() => window.scrollTo(0, 0)}>Careers</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>Terms of Service</Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link to="/help" onClick={() => window.scrollTo(0, 0)}>Help & Support</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4 — Social Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>

                    {/* Social Icons */}
                    <div className="flex gap-3 mb-8">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/RabinsPhotography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/rabinsphotography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                        </a>
                        {/* YouTube */}
                        <a href="https://www.youtube.com/@RabinsPhotography" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="https://x.com/Rabinsclick" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                        </a>
                    </div>

                    {/* App Buttons */}
                    <div className="space-y-3">

                        {/* App Store */}
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowAppStorePopup(true)}
                                onMouseLeave={() => setShowAppStorePopup(false)}
                                className="w-full px-4 py-3 rounded-xl bg-black border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3 cursor-default"
                            >
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium text-gray-400 leading-none">Download on the</div>
                                    <div className="text-lg font-bold leading-tight">App Store</div>
                                </div>
                            </button>
                            {showAppStorePopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white text-black p-4 rounded-xl shadow-2xl text-center z-50 pointer-events-none"
                                >
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                    <p className="font-bold text-lg mb-1">Coming Soon!</p>
                                    <p className="text-xs text-gray-500">iOS app launching soon!</p>
                                </motion.div>
                            )}
                        </div>

                        {/* Google Play */}
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowPopup(true)}
                                onMouseLeave={() => setShowPopup(false)}
                                className="w-full px-4 py-3 rounded-xl bg-black border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3 cursor-default"
                            >
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 21,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium text-gray-400 leading-none">GET IT ON</div>
                                    <div className="text-lg font-bold leading-tight">Google Play</div>
                                </div>
                            </button>
                            {showPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white text-black p-4 rounded-xl shadow-2xl text-center z-50 pointer-events-none"
                                >
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                    <p className="font-bold text-lg mb-1">Coming Soon!</p>
                                    <p className="text-xs text-gray-500">We are working on the Android version.</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* Divider + copyright */}
            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-6 text-sm text-gray-600 relative z-10">
                <p className="mb-2">
                    By continuing past this page, you agree to our{' '}
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>,{' '}
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> and Cookie Policy.
                </p>
                <p>© 2013-{new Date().getFullYear()} Rabin's Photography. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default SiteFooter;
