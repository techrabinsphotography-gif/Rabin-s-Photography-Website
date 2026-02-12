import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Camera, Smartphone, Video, Zap, Star, Rocket, Sparkles, Check, CheckCircle, Package, Truck, CreditCard, Bell, Headphones, Gift } from 'lucide-react';
import img1 from '../assets/recent/cameraa.png'
import img2 from '/571744774_1361610111985518_3207307785903951187_n.jpg'

import img4 from '/484042900_1180013106811887_2538291571904064716_n.jpg'
import video from "../assets/recent/video.mp4"
import finalLogo from '../assets/recent/final logo.png'




// Custom hook for counting animation
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

// Counter Stat Component
const CounterStat = ({ end, suffix = '', color, label }) => {
    const { count, countRef } = useCountUp(end, 2000);

    return (
        <div ref={countRef} className="text-center">
            <p className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {count}{suffix}
            </p>
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wider font-semibold mt-2">
                {label}
            </p>
        </div>
    );
};

const Demo = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [showDownloadPopup, setShowDownloadPopup] = useState(false);
    const [showPortfolioPopup, setShowPortfolioPopup] = useState(false);
    const [showGoldPopup, setShowGoldPopup] = useState(false);
    const [showAppStorePopup, setShowAppStorePopup] = useState(false);
    return (
        <>
            {/* Section ForHeader - Hero with Summary Style */}
            <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-20 pb-20">

                {/* Background Video with animated overlay */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

                {/* Animated Blur Circles Background */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff4f5a]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

                {/* Main Content - Summary Style Layout */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
                    
                    {/* Top Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 px-4 py-2 rounded-full border border-[#ff4f5a]/30 bg-[#ff4f5a]/10 backdrop-blur-md"
                    >
                        <p className="text-[#ff4f5a] text-sm font-semibold tracking-widest uppercase">Est. 2013 • Award-Winning Photography company</p>
                    </motion.div>

                    {/* Main Headline - Summary Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 tracking-tight">
                            Rabin's <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-[#ff4f5a] via-orange-500 to-[#ff4f5a] bg-clip-text text-transparent">
                                Photography
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 text-center"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white">
                            India's #1<br />
                            Photography app
                        </h2>
                    </motion.div>

                    {/* Subheading - Core Message */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10 max-w-2xl text-center text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                    >
                        <span className="font-semibold text-white">Book. Track. Deliver.</span> Professional photography <span className="text-[#ff4f5a] font-semibold">all in one app.</span>
                    </motion.p>

                    {/* CTA Buttons - Enhanced Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <div className="relative">
                            <button 
                                onClick={() => setShowDownloadPopup(true)}
                                onMouseEnter={() => setShowDownloadPopup(true)}
                                onMouseLeave={() => setShowDownloadPopup(false)}
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#ff4f5a]/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                            >
                                Download App
                            </button>
                            {showDownloadPopup && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white text-black p-4 rounded-xl shadow-2xl text-center z-50 pointer-events-none"
                                >
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                    <p className="font-bold text-lg mb-1">Coming Soon!</p>
                                    <p className="text-xs text-gray-500">We're launching soon. Stay tuned!</p>
                                </motion.div>
                            )}
                        </div>
                        <div className="relative">
                            <button 
                                onClick={() => setShowPortfolioPopup(true)}
                                onMouseEnter={() => setShowPortfolioPopup(true)}
                                onMouseLeave={() => setShowPortfolioPopup(false)}
                                className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:border-[#ff4f5a] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                            >
                                View Portfolio
                            </button>
                            {showPortfolioPopup && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white text-black p-4 rounded-xl shadow-2xl text-center z-50 pointer-events-none"
                                >
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                    <p className="font-bold text-lg mb-1">Coming Soon!</p>
                                    <p className="text-xs text-gray-500">Portfolio section under development.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-12 cursor-pointer"
                        onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-gray-400 text-center hover:text-white transition-colors"
                        >
                            <p className="text-xs uppercase tracking-widest mb-2">Scroll</p>
                            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>

                </div>

            </div>
            {/* =================================================== */}

            {/* About Section */}
            <div id="about-section">
                <AboutSection />
            </div>

            {/* ==================================================== */}


            {/* ============================================= */}
            {/* ============================================= */}
            <section id='phone' className="w-full min-h-screen bg-slate-50 flex flex-col items-center py-24 relative overflow-hidden">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl px-6 mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Professional Photography <br className="hidden md:block" /> <span className="bg-gradient-to-r from-blue-600 to-[#ff4f5a] bg-clip-text text-transparent">at Your Fingertips</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                        Experience professional capture, intelligent editing, and seamless delivery - all in one powerful app built for modern photographers.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="relative w-full max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

                    {/* LEFT FEATURES */}
                    <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center lg:items-end max-w-xs">
                        <FeatureCard
                            title="Package Customization"
                            desc="Tailor packages to your needs."
                            icon={<Package className="w-6 h-6" />}
                            delay={0.1}
                            align="right"
                        />
                        <FeatureCard
                            title="Delivery Tracking"
                            desc="Track your album delivery."
                            icon={<Truck className="w-6 h-6" />}
                            delay={0.2}
                            align="right"
                        />
                        <FeatureCard
                            title="Hassle-free Payment"
                            desc="Integrated secure payment gateway."
                            icon={<CreditCard className="w-6 h-6" />}
                            delay={0.3}
                            align="right"
                        />
                    </div>

                    {/* PHONE MOCKUP - Modern with Effects */}
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        className="relative z-10 flex flex-col items-center w-full lg:w-1/3"
                    >
                        {/* Glow Background Effect */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-[#ff4f5a]/20 to-purple-500/20 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Phone Device */}
                        <div className="relative w-[300px] h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[45px] p-3 shadow-2xl border-[8px] border-gray-900 group">
                            {/* Phone Shine Effect */}
                            <div className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

                            {/* Bezel & Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[25px] w-[120px] bg-black rounded-b-3xl z-20"></div>

                            {/* Screen */}
                            <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative shadow-inner">
                                {/* Modern Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

                                {/* Fake UI App Header - Modern */}
                                <div className="absolute top-0 w-full h-14 bg-gradient-to-r from-white via-white/95 to-white backdrop-blur-xl z-10 flex items-end justify-center pb-2 border-b border-gray-100/50">
                                    <span className="font-bold text-sm bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Rabin's Photography</span>
                                </div>

                                {/* Screen Content - Enhanced */}
                                <div className="w-full h-full bg-gradient-to-b from-blue-50 to-slate-100 flex flex-col items-center justify-center relative pt-6">
                                    {/* Floating Camera Icon with Glow */}
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#ff4f5a] rounded-full blur-2xl opacity-30 scale-150"></div>
                                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 relative z-10">
                                            <Camera className="w-16 h-16 text-white animate-pulse" />
                                        </div>
                                    </motion.div>

                                    {/* Recording Indicator */}
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute bottom-20 w-16 h-16 rounded-full border-4 border-[#ff4f5a] bg-gradient-to-br from-[#ff4f5a] to-red-600 shadow-lg shadow-[#ff4f5a]/50"
                                    ></motion.div>

                                    {/* Status Text */}
                                    <div className="absolute bottom-6 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#ff4f5a] animate-pulse"></div>
                                        <span className="text-xs font-semibold text-gray-700">Ready to Capture</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Under Phone - Glow & Reflection Effect */}
                        <div className="mt-6 flex flex-col items-center gap-4">
                            {/* Main Glow Effect */}
                            <motion.div
                                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-64 h-32 bg-gradient-to-r from-blue-500 via-[#ff4f5a] to-purple-500 rounded-full blur-3xl opacity-30"
                            ></motion.div>

                            {/* Floating Stats Cards Below Phone */}
                            <div className="flex gap-3 mt-4 justify-center flex-wrap px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200/50 backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-300"
                                >
                                    <p className="text-xs font-bold text-blue-900 flex items-center gap-2 whitespace-nowrap"><Package className="w-3 h-3" /> Package Customization</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4f5a]/10 to-orange-600/10 border border-[#ff4f5a]/50 backdrop-blur-sm hover:bg-[#ff4f5a]/20 transition-all duration-300"
                                >
                                    <p className="text-xs font-bold text-[#ff4f5a] flex items-center gap-2 whitespace-nowrap"><Headphones className="w-3 h-3" /> 24/7 Customer Support</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-200/50 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300"
                                >
                                    <p className="text-xs font-bold text-purple-900 flex items-center gap-2 whitespace-nowrap"><Gift className="w-3 h-3" /> Rewards</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>


                    {/* RIGHT FEATURES */}
                    <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center lg:items-start max-w-xs">
                        <FeatureCard
                            title="Priority Notification"
                            desc="Stay updated instantly."
                            icon={<Bell className="w-6 h-6" />}
                            delay={0.1}
                            align="left"
                        />
                        <FeatureCard
                            title="24/7 Customer Support"
                            desc="We're here to help anytime."
                            icon={<Headphones className="w-6 h-6" />}
                            delay={0.2}
                            align="left"
                        />
                        <FeatureCard
                            title="Rewards"
                            desc="Earn points with every booking."
                            icon={<Gift className="w-6 h-6" />}
                            delay={0.3}
                            align="left"
                        />
                    </div>

                </div>
            </section>

            {/* Why Rabin's Photography - Three Core Pillars */}
            <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Rabin's Photography
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need in one app—no hassles, no hidden fees, just professional photography made simple.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {/* Pillar 1: Premium Photography */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 text-2xl">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Premium Quality
                            </h3>
                            <p className="text-gray-700">
                                Professional photographers with years of experience. Every shoot delivers premium, publication-ready results—not amateur snapshots.
                            </p>
                        </motion.div>

                        {/* Pillar 2: Booking & Tracking */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200"
                        >
                            <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center mb-6 text-2xl">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Book & Track Seamlessly
                            </h3>
                            <p className="text-gray-700">
                                One-app experience from booking to delivery. Real-time updates, live project tracking, and instant access to your photos the moment they're ready.
                            </p>
                        </motion.div>

                        {/* Pillar 3: Technology-Driven */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-[#ff4f5a]/10 to-red-100/50 border border-red-200"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#ff4f5a] text-white flex items-center justify-center mb-6 text-2xl">
                                <Rocket className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Technology First
                            </h3>
                            <p className="text-gray-700">
                                Modern app-powered studio with transparent pricing, secure galleries, and hassle-free management. Photography made effortless through technology.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Banner
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Experience the Difference?
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg">
                            Download the app and book your first session today.
                        </p>
                        <button className="px-10 py-4 rounded-full bg-[#ff4f5a] text-white font-bold text-lg hover:bg-[#e63e48] transition-colors duration-300 shadow-lg">
                            Download App Now
                        </button>
                    </motion.div> */}
                </div>
            </section>

            {/* Gold Membership - Modern & Premium */}
            <section id='gold-membership' className="w-full min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-32 mx-4 rounded-[3rem]">

                {/* Animated Background Gradients */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-[150px]" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-l from-emerald-600/20 to-green-600/20 rounded-full blur-[130px]" 
                />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    {/* Premium Badge with Glow */}
                    <motion.div 
                        animate={{ 
                            boxShadow: [
                                "0 0 20px rgba(34, 197, 94, 0.3)",
                                "0 0 40px rgba(34, 197, 94, 0.5)",
                                "0 0 20px rgba(34, 197, 94, 0.3)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full border border-green-500/40 bg-gradient-to-r from-green-900/30 via-emerald-900/20 to-green-900/30 backdrop-blur-xl"
                    >
                        <Sparkles className="w-6 h-6 text-green-400" />
                        <span className="text-green-400 text-sm font-bold tracking-[0.3em] uppercase">100% FREE FEATURES</span>
                    </motion.div>

                    {/* Main Heading with Enhanced Gradient */}
                    <motion.h1 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight 
                        text-transparent bg-clip-text bg-gradient-to-b from-white via-green-400 to-green-600
                        drop-shadow-[0_0_60px_rgba(34,197,94,0.6)] mb-6"
                    >
                        Premium Features
                    </motion.h1>

                    {/* Subheading - App-Centric */}
                    <p className="mt-2 text-white/90 text-xl md:text-2xl font-medium tracking-wide max-w-2xl leading-relaxed">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold">All Premium Features Completely FREE</span> — 
                        Professional Services, Priority Booking & Unlimited Cloud Storage Included
                    </p>

                    {/* CTA Button */}
                    <div className="relative">
                        <motion.button
                            onClick={() => setShowGoldPopup(true)}
                            onMouseEnter={() => setShowGoldPopup(true)}
                            onMouseLeave={() => setShowGoldPopup(false)}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 197, 94, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300"
                        >
                            Get Started Free
                        </motion.button>
                        {showGoldPopup && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-56 bg-white text-black p-4 rounded-xl shadow-2xl text-center z-50 pointer-events-none"
                            >
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                <p className="font-bold text-lg mb-1">Coming Soon!</p>
                                <p className="text-xs text-gray-500">Premium memberships launching soon!</p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Benefits Cards Grid - Modernized */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-900/10 via-black/50 to-black/50 border border-green-700/30 backdrop-blur-xl hover:border-green-500/60 transition-all duration-500 overflow-hidden"
                    >
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Unlimited Bookings</h3>
                            <p className="text-gray-400 leading-relaxed">Book anytime through the app. No limits, no queues — the studio is always ready for you.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-900/10 via-black/50 to-black/50 border border-green-700/30 backdrop-blur-xl hover:border-green-500/60 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Pro Retouching</h3>
                            <p className="text-gray-400 leading-relaxed">40% off on premium editing & color grading. Get magazine-quality results every time.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-900/10 via-black/50 to-black/50 border border-green-700/30 backdrop-blur-xl hover:border-green-500/60 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Priority Access</h3>
                            <p className="text-gray-400 leading-relaxed">Skip the waitlist. Get instant booking confirmations and first-choice time slots.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-900/10 via-black/50 to-black/50 border border-green-700/30 backdrop-blur-xl hover:border-green-500/60 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Lifetime Cloud Storage</h3>
                            <p className="text-gray-400 leading-relaxed">All your photos securely stored forever. Access them anytime, anywhere through the app.</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Contact Us Section */}
            <ContactSection />

            {/* Download App Section */}
            <DownloadAppSection />

            {/* Footer Section */}
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

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">For Photographers</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer">Professional Services</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Booking System</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>

                            <li className="hover:text-white transition-colors cursor-pointer text-gray-400 group relative">
                                <Link to="/careers" className="relative group-hover:text-white transition-colors duration-300">
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
                            <li className="hover:text-white transition-colors cursor-pointer"><Link to="/blog" target="_blank" rel="noopener noreferrer">Blog</Link></li>
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
                            {/* LinkedIn */}
                            {/* <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a> */}
                            {/* Instagram */}
                            <a href="https://www.instagram.com/rabinsphotography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://www.youtube.com/@RabinsPhotography" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/RabinsPhotography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
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



        </>
    )
}

export default Demo


// =====================================================
// ====================================================

const VideoHero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6; // slow cinematic speed
        }
    }, []);

    return (
        <video
            ref={videoRef}
            src="/studio-video.mp4"
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
        />
    );
};


const FeatureCard = ({ title, desc, icon, delay, align = "left" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className={`flex items-center gap-4 p-4 bg-white
    rounded-2xl shadow-sm border border-gray-100 max-w-[280px] w-full hover:shadow-md transition-shadow duration-300
    ${align === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}
        >
            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <p className="font-bold text-gray-900 text-sm">
                    {title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    {desc}
                </p>
            </div>

        </motion.div>
    );
};

const BenefitCard = ({ title, desc, icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
        >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    )
}

const ContactSection = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:contact@rabinsphotography.com?subject=Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="w-full py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
            {/* Animated Background Effects */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff4f5a]/10 rounded-full blur-[130px]"
            />
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-4"
                    >
                        <span className="text-blue-400 text-sm font-bold tracking-wider uppercase">Get In Touch</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight"
                    >
                        Let’s start a <br /> conversation.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-gray-300 max-w-md leading-relaxed"
                    >
                        Whether you have a question about our features, pricing, or just want to say hello, we’re ready to answer all your questions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a href="tel:+919038858523" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 font-medium">Call Us</p>
                                <p className="text-white font-semibold">+9190388 58523</p>
                            </div>
                        </a>

                        <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 block">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4f5a] to-orange-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 font-medium">Visit Our Office</p>
                                <p className="text-white font-semibold">Kolkata, India</p>
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Right Form - Modern Glassmorphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-white ml-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
                                placeholder="Your name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-white ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
                                placeholder="you@example.com"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-white ml-1">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all resize-none backdrop-blur-sm"
                                placeholder="Tell us about your project..."
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-[#ff4f5a] text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            Send Message →
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

const DownloadAppSection = () => {
    const [showGooglePlayPopup, setShowGooglePlayPopup] = useState(false);
    const [showAppStorePopup2, setShowAppStorePopup2] = useState(false);
    
    return (
        <section id='download-app' className="w-full flex justify-center items-center py-24 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[95%] max-w-[90rem] bg-slate-50 rounded-[64px] 
    flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-24 py-20 md:py-32 relative overflow-hidden border border-slate-100 shadow-2xl"
            >
                {/* LEFT CONTENT */}
                <div className="max-w-2xl z-10 text-center md:text-left mt-12 md:mt-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Download the app now!
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        Experience seamless photo booking, live previews, and
                        professional editing only on the <span className="text-blue-600 font-semibold">Rabin's Photography app.</span>
                    </p>

                    {/* Store Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                        <div className="relative">
                            <img
                                onClick={() => setShowGooglePlayPopup(true)}
                                onMouseEnter={() => setShowGooglePlayPopup(true)}
                                onMouseLeave={() => setShowGooglePlayPopup(false)}
                                src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                                alt="Google Play"
                                className="h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity"
                            />
                            {showGooglePlayPopup && (
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
                        
                        <div className="relative">
                            <img
                                onClick={() => setShowAppStorePopup2(true)}
                                onMouseEnter={() => setShowAppStorePopup2(true)}
                                onMouseLeave={() => setShowAppStorePopup2(false)}
                                src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                                alt="App Store"
                                className="h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity"
                            />
                            {showAppStorePopup2 && (
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
                    </div>
                </div>

                {/* RIGHT PHONE + QR */}
                <div className="relative z-10 h-[270px] overflow-hidden">
                    <div className="w-[380px] h-[540px] rounded-[40px] bg-white border-4 border-gray-300 shadow-2xl flex items-start justify-center relative pt-12">
                        {/* Screen */}
                        <div className="w-[92%] h-[96%] bg-slate-50 rounded-[32px] flex flex-col items-center justify-start gap-6 px-6 overflow-hidden relative pt-8">
                            {/* Decorative header */}
                            <div className="absolute top-0 w-full h-20 bg-blue-50/50 z-0"></div>

                            <div className="relative z-10 text-center">
                                <p className="text-blue-600 font-bold mb-4 text-lg">
                                    Get the App
                                </p>
                                <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-100 mx-auto w-fit">
                                    <img
                                        src="https://b.zmtcdn.com/data/o2_assets/98cc4eba0a6f59e728e5223a70fd39551742471514.png"
                                        alt="QR Code"
                                        className="w-32 h-32 opacity-90"
                                    />
                                </div>
                                <p className="text-gray-400 text-sm mt-4 font-medium">
                                    Scan to download
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px] pointer-events-none" />

            </motion.div>
        </section>
    )
}



const AboutSection = () => {
    return (
        <section className="w-full py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff4f5a]/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content - Modern Card Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 relative z-10"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4f5a]/10 to-orange-100/10 border border-[#ff4f5a]/20">
                            <span className="w-2 h-2 rounded-full bg-[#ff4f5a]"></span>
                            <span className="text-[#ff4f5a] font-bold tracking-widest text-xs uppercase">Why Choose Rabin's Photography</span>
                        </div>

                        {/* Main Heading - Modern Style */}
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                            Booking Photography <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-[#ff4f5a] to-orange-600 bg-clip-text text-transparent">
                                Just Became Effortless
                            </span>
                        </h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-700 leading-relaxed font-light"
                        >
                            Since 2013, Rabin's Photography has been trusted by hundreds of clients across Kolkata. Now, we've revolutionized the experience with our app—one platform to book, track, and receive your photography deliverables without the complexity.
                        </motion.p>

                        {/* Three Key Points - Modern Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="space-y-3 pt-6"
                        >
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-200/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 flex items-center justify-center text-white text-sm font-bold"><Check className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Real-time Booking</p>
                                    <p className="text-sm text-gray-600">Schedule sessions in seconds</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-200/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white text-sm font-bold"><Check className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Live Project Tracking</p>
                                    <p className="text-sm text-gray-600">Monitor status from shoot to delivery</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-200/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center text-white text-sm font-bold"><Check className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Secure Delivery</p>
                                    <p className="text-sm text-gray-600">Professional gallery with instant access</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats - Modern Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
                        >
                            <CounterStat 
                                end={2000} 
                                suffix="+" 
                                color="from-[#ff4f5a] to-orange-600"
                                label="App Bookings"
                            />
                            <CounterStat 
                                end={800} 
                                suffix="+" 
                                color="from-blue-600 to-blue-400"
                                label="Cities Served"
                            />
                            <CounterStat 
                                end={24} 
                                suffix="h" 
                                color="from-purple-600 to-purple-400"
                                label="Avg Delivery"
                            />
                        </motion.div>

                        {/* CTA Button - Modern Style */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#ff4f5a]/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            Download App Now
                        </motion.button>
                    </motion.div>

                    {/* Right: Modern Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full hidden lg:flex items-center justify-center"
                    >
                        {/* Floating Card 1 - Main Image */}
                        <motion.div
                            initial={{ y: 0 }}
                            whileInView={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-0 right-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4f5a]/20 via-transparent to-transparent z-10" />
                            <img src={img4} alt="Photography Work" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            initial={{ y: 50, x: -50 }}
                            whileInView={{ y: [50, 40, 50], x: [-50, -45, -50] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                            className="absolute bottom-10 left-2 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white p-1"
                        >
                            <div className="w-full h-full rounded-xl overflow-hidden">
                                <img src={img2} alt="Cinematic Shot" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* Floating Badge Card */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute top-20 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-3 border-white bg-white p-1"
                        >
                            <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#ff4f5a] to-orange-600 flex items-center justify-center relative">
                                <img src={img1} alt="Detail Shot" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-[#ff4f5a]/10 rounded-3xl blur-3xl -z-10" />
                    </motion.div>

                    {/* Mobile Image Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:hidden flex flex-col gap-4"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 border border-white/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4f5a]/20 via-transparent to-transparent z-10" />
                            <img src={img4} alt="Photography Work" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-40 w-1/2 border border-white/20">
                                <img src={img2} alt="Professional Camera" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-40 w-1/2 border border-white/20">
                                <img src={img1} alt="Detail Shot" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
