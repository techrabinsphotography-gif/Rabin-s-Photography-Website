import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import finalLogo from '../assets/recent/final logo.png';
import img2 from '/571744774_1361610111985518_3207307785903951187_n.jpg'; // Assuming this is a good image to use
import img4 from '/484042900_1180013106811887_2538291571904064716_n.jpg'; // Another image

const useCountUp = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [isInView, setIsInView] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [isInView]);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * (end - start) + start);
            
            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isInView, end, duration, start]);

    return { count, countRef };
};

const CounterStat = ({ end, suffix = '', color, label }) => {
    const { count, countRef } = useCountUp(end, 2000);

    return (
        <div ref={countRef} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
            <p className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
                {count}{suffix}
            </p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
                {label}
            </p>
        </div>
    );
};

const AboutUs = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showAppStorePopup, setShowAppStorePopup] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#ff4f5a] selection:text-white">
            
            {/* Header */}
            {/* Header */}
            <header className="border-b border-white/10 bg-black sticky top-0 z-50 backdrop-blur-lg bg-black/80">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img src={finalLogo} alt="Rabin's Photography" className="h-20 w-auto object-contain" />
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                            <Link to="/about" className="text-white font-semibold">About Us</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff4f5a]/20 rounded-full blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#ff4f5a] animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-white/90">Our Story</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Capturing Moments, <br />
                            <span className="bg-gradient-to-r from-[#ff4f5a] via-orange-500 to-yellow-500 bg-clip-text text-transparent">Creating Art.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We are simplified content creators in Kolkata, dedicated to turning your special moments into timeless memories.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section - Our Mission */}
            <section className="py-20 px-6 bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl skew-y-3 border border-white/10">
                            <img src={img4} alt="Photography Session" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black rounded-2xl border border-white/10 p-4 shadow-xl -skew-y-3 hidden md:block">
                             <img src={img2} alt="Rabin Das" className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Than Just Photography</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                At Rabin's Photography, we believe that every photograph tells a story. Founded with a passion for visual storytelling, we have grown into one of Kolkata's premier photography services. Our approach combines technical expertise with an artistic eye, ensuring that we capture the authentic emotion and atmosphere of every event.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                <h3 className="text-xl font-bold mb-2 text-[#ff4f5a]">Our Mission</h3>
                                <p className="text-gray-400 text-sm">To provide exceptional photography services that preserve your most cherished memories with creativity and professionalism.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                <h3 className="text-xl font-bold mb-2 text-blue-400">Our Vision</h3>
                                <p className="text-gray-400 text-sm">To be the leading photography brand known for innovation, quality, and customer satisfaction.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Analytics / Stats Section */}
            <section className="py-24 px-6 relative">
                 <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
                    <p className="text-gray-400">A glimpse into our journey and dedication.</p>
                </div>
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CounterStat 
                        end={15000} 
                        suffix="+" 
                        color="from-blue-400 to-purple-500" 
                        label="App Bookings" 
                    />
                    <CounterStat 
                        end={35} 
                        suffix="+" 
                        color="from-[#ff4f5a] to-orange-500" 
                        label="Cities Served" 
                    />
                    <CounterStat 
                        end={3} 
                        suffix=" Days" 
                        color="from-green-400 to-emerald-500" 
                        label="Avg Delivery Time" 
                    />
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                     <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#ff4f5a] shadow-[0_0_30px_rgba(255,79,90,0.3)] mb-8">
                        <img src={img2} alt="Rabin Das" className="w-full h-full object-cover" />
                     </div>
                     <h2 className="text-3xl font-bold mb-2">Rabin Das</h2>
                     <p className="text-[#ff4f5a] font-medium tracking-wide uppercase text-sm mb-6">Founder & Lead Photographer</p>
                     <p className="text-xl text-gray-400 italic font-light">
                        "Photography is the only language that can be understood anywhere in the world. My goal is to speak to your heart through my lens."
                     </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-black text-gray-400 pt-20 pb-10 px-8 relative overflow-hidden border-t border-white/10">
                {/* Subtle Gradient Background */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff4f5a]/5 rounded-full blur-[120px]" />

                {/* Top Footer */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">

                    {/* Brand */}
                    <div>
                        <img src={finalLogo} alt="Rabin's Photography" className="w-64 mb-4 object-contain" /> 
                        {/* Added brightness-0 invert if the logo is black text, but usually finalLogo is an image. Assuming it works on dark bg. If not, I'll remove the filter.*/}
                        {/* Actually, the logo likely contains black text 'Rabin's Photography'. If so, it won't be visible on black bg.
                           In Blog.jsx footer (black bg), the logo seemed to be used as is? Let me check Blog.jsx footer.
                           In Blog.jsx footer, it's <img src={finalLogo} ... className="w-64 mb-4 object-contain" /> inside a dark footer.
                           Wait, if the logo is black text, it won't show on black footer.
                           Let's assumed it's visible or has light text. But wait, `Demo.jsx` uses it in a black footer too. So it must be compatible.
                        */}
                        <p className="text-white text-xs mt-4 leading-relaxed max-w-xs">Book. Track. Deliver. Professional photography management, all in one app.</p>
                    </div>

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">For Photographers</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer">Professional Services</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Booking System</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>

                            <li className="hover:text-white transition-colors cursor-pointer text-gray-400 group relative">
                                <Link to="/careers" target="_blank" rel="noopener noreferrer" className="relative group-hover:text-white transition-colors duration-300">
                                    Careers
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4f5a] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">For Clients</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer">Book a Session</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Track Project</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Wedding Photography</li>

                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer"><Link to="/about" target="_blank" rel="noopener noreferrer">About Us</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link to="/blog">Blog</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link to="/privacy">Privacy Policy</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link to="/terms">Terms of Service</Link></li>
                            <li className="hover:text-white transition-colors cursor-pointer"><Link to="/help">Help & Support</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-8">
                             <a href="https://www.instagram.com/rabinsphotography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@RabinsPhotography" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/RabinsPhotography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                            <a href="https://x.com/Rabinsclick" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                            </a>
                        </div>

                        {/* App Buttons */}
                        <div className="space-y-3">
                            {/* App Store */}
                            <div className="relative">
                                <button 
                                    onClick={() => setShowAppStorePopup(true)}
                                    onMouseEnter={() => setShowAppStorePopup(true)}
                                    onMouseLeave={() => setShowAppStorePopup(false)}
                                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.67 5.17-1.44 1.14.08 3.52.41 4.3 2.5a3.65 3.65 0 0 1-2 2 c-1.52.89-1.85 3.51.05 5.37.5 1.57.25 2.15 0 2.5ZM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.53-2.95 1.5-.83-4.17.65-3.19 1.05-3.19Z"/>
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
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white text-black p-4 rounded-xl shadow-2xl text-center z-50 pointer-events-none"
                                    >
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                        <p className="font-bold text-lg mb-1">Coming Soon!</p>
                                        <p className="text-xs text-gray-500">iOS app launching soon!</p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Google Play - With Popup */}
                            <div className="relative">
                                <button 
                                    onClick={() => setShowPopup(true)}
                                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3"
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
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
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
                {/* Divider */}
                <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-6 text-sm text-gray-600 relative z-10">
                    <p className="mb-2">
                        By continuing past this page, you agree to our <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>, <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> and Cookie Policy.
                    </p>
                    <p>
                        © 2013-2026 Rabin's Photography. All rights reserved. 
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default AboutUs;
