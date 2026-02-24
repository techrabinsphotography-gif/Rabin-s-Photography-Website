import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import img1 from '../assets/recent/cameraa.png'
import img2 from '../assets/recent/cenamatic camera.png'
import img3 from '../assets/recent/drone.jpeg'
import img4 from '../assets/recent/studioimgg.png'
import video from "../assets/recent/video.mp4"



const FrontPage = () => {
    return (
        <>
            {/* Section ForHeader */}
            <div className="relative w-full h-screen bg-black overflow-hidden">

                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Center Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">

                    <p className="tracking-[0.3em] text-sm text-gray-300 uppercase mb-4">
                        Est. 2012
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
    text-white tracking-wide">
                        Robin <span className="text-[#ff4f5a]">Photo Studio</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                        Crafting timeless portraits, cinematic visuals, and professional photography
                        experiences that tell your story with elegance and precision.
                    </p>

                    {/* Optional CTA */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                        <button className="px-8 py-3 rounded-full bg-[#ff4f5a] text-white font-semibold hover:scale-105 transition">
                            Book a Session
                        </button>
                        <button className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
                            View Portfolio
                        </button>
                    </div>

                </div>

            </div>
            {/* =================================================== */}

            {/* About Section */}
            <AboutSection />

            {/* ==================================================== */}

            <section className="w-full flex justify-center items-center py-8 md:py-10 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 px-8 py-8 md:px-12 md:py-6 rounded-3xl md:rounded-full 
  shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white w-[calc(100%-2rem)] md:w-fit mx-auto">

                    {/* Item 1 */}
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-2xl font-bold text-gray-800">3,00,000+</p>
                            <p className="text-gray-500 text-sm">Captures photos</p>
                        </div>
                        <img src={img1} alt="" className="w-10 h-10 object-cover rounded-full" />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px md:w-px md:h-10 bg-gray-200" />

                    {/* Item 2 */}
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-2xl font-bold text-gray-800">800+</p>
                            <p className="text-gray-500 text-sm">cities</p>
                        </div>
                        <img src={img2} alt="" className="w-10 h-10 object-cover rounded-full" />
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px md:w-px md:h-10 bg-gray-200" />

                    {/* Item 3 */}
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-2xl font-bold text-gray-800">3 billion+</p>
                            <p className="text-gray-500 text-sm">orders delivered</p>
                        </div>
                        <img src={img3} alt="" className="w-10 h-10 object-cover rounded-full" />
                    </div>

                </div>
            </section>


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
                        Your Studio, <br className="hidden md:block" /> <span className="text-blue-600">Pocket-Sized.</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                        Powerful tools designed to capture, edit, and deliver stunning photos directly from your device.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="relative w-full max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* LEFT FEATURES */}
                    <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center lg:items-end">
                        <FeatureCard
                            title="Studio Lighting"
                            desc="Virtual softboxes & rims."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>}
                            delay={0.1}
                            align="right"
                        />
                        <FeatureCard
                            title="Portrait Mode"
                            desc="Depth control enabled."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /></svg>}
                            delay={0.2}
                            align="right"
                        />
                        <FeatureCard
                            title="Makeup Preview"
                            desc="AR beauty filters."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>}
                            delay={0.3}
                            align="right"
                        />
                    </div>

                    {/* PHONE MOCKUP */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative z-10 flex-shrink-0"
                    >
                        <div className="w-full max-w-[300px] h-[600px] bg-black rounded-[45px] p-3 shadow-2xl border-[6px] border-gray-900 relative">
                            {/* Bezel & Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[25px] w-[120px] bg-black rounded-b-3xl z-20"></div>

                            {/* Screen */}
                            <div className="w-full h-full bg-white rounded-[38px] overflow-hidden relative">
                                {/* Fake UI App Header */}
                                <div className="absolute top-0 w-full h-14 bg-white/80 backdrop-blur-md z-10 flex items-end justify-center pb-2 border-b border-gray-100">
                                    <span className="font-semibold text-sm">Robin Cam</span>
                                </div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center relative">
                                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-gray-200 animate-pulse">
                                        <span className="text-4xl">📸</span>
                                    </div>
                                    <div className="absolute bottom-10 w-16 h-16 rounded-full border-4 border-white bg-red-500 shadow-lg"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* RIGHT FEATURES */}
                    <div className="flex flex-col gap-6 w-full lg:w-1/3 items-center lg:items-start">
                        <FeatureCard
                            title="4K Capture"
                            desc="Ultra-HD resolution."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>}
                            delay={0.1}
                            align="left"
                        />
                        <FeatureCard
                            title="Instant Editing"
                            desc="One-tap Enhancements."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>}
                            delay={0.2}
                            align="left"
                        />
                        <FeatureCard
                            title="Easy Sharing"
                            desc="Direct to Socials."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.287.696.287 1.093 0 .397-.107.769-.287 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>}
                            delay={0.3}
                            align="left"
                        />
                    </div>

                </div>
            </section>




            {/* Gold membership */}
            <section id='gold-membership' className="w-[calc(100%-2rem)] mx-auto min-h-screen  bg-neutral-950 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-24 rounded-3xl">

                {/* Background Gradients/Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    {/* Luxe Badge */}
                    <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-800/30 bg-yellow-900/10 backdrop-blur-md">
                        <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] uppercase">Premium Access</span>
                    </div>

                    {/* GOLD Title */}
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-bold tracking-tighter 
                        text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C3] via-[#D4AF37] to-[#886618]
                        drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
                        GOLD
                    </h1>

                    <p className="mt-4 text-white/80 text-lg md:text-xl font-light tracking-wide max-w-lg">
                        Elevate your personal brand with our most exclusive studio privileges.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4 relative z-10">

                    <BenefitCard
                        title="Unlimited Shoots"
                        desc="Walk in anytime. The studio is yours."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" /></svg>}
                        delay={0.1}
                    />

                    <BenefitCard
                        title="Pro Retouching"
                        desc="40% off on advanced color grading."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>}
                        delay={0.2}
                    />

                    <BenefitCard
                        title="Priority Access"
                        desc="Jump the queue. Always first."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>}
                        delay={0.3}
                    />

                    <BenefitCard
                        title="Cloud Vault"
                        desc="Lifetime visuals storage."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>}
                        delay={0.4}
                    />

                </div>
            </section>

            {/* Contact Us Section */}
            <ContactSection />

            {/* Download App Section */}
            <DownloadAppSection />

            {/* Footer Section */}
            <footer className="w-full bg-black text-gray-400 pt-20 pb-10 px-8">

                {/* Top Footer */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

                    {/* Brand */}
                    <div>
                        <h1 className="text-white text-3xl font-bold mb-6">
                            robin
                        </h1>
                    </div>

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Studio</h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Gallery</li>
                            <li>Behind the Scenes</li>
                            <li className="hover:text-black transition-colors cursor-pointer">
                                <Link to="/careers">Careers</Link>
                            </li>
                            <li>Investor Relations</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">For Clients</h3>
                        <ul className="space-y-2">
                            <li>Book a Shoot</li>
                            <li>Wedding Photography</li>
                            <li>Portrait Sessions</li>
                            <li>Commercial Shoots</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Learn More</h3>
                        <ul className="space-y-2">
                            <li>Privacy Policy</li>
                            <li>Security</li>
                            <li>Terms of Service</li>
                            <li>Help & Support</li>
                            <li>Report an Issue</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">in</div>
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">ig</div>
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">yt</div>
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">fb</div>
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">x</div>
                        </div>

                        {/* Store Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                        <button className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-80 transition-all flex items-center gap-2.5 cursor-default min-h-[44px]">
                            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 21,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <div className="text-left flex-1">
                                <div className="text-[8.5px] font-normal text-white leading-tight">GET IT ON</div>
                                <div className="text-[18px] font-semibold leading-tight">Google Play</div>
                            </div>
                        </button>
                        <button className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-80 transition-all flex items-center gap-2.5 cursor-default min-h-[44px]">
                            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.67 5.17-1.44 1.14.08 3.52.41 4.3 2.5a3.65 3.65 0 0 1-2 2 c-1.52.89-1.85 3.51.05 5.37.5 1.57.25 2.15 0 2.5ZM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.53-2.95 1.5-.83-4.17.65-3.19 1.05-3.19Z"/>
                            </svg>
                            <div className="text-left flex-1">
                                <div className="text-[8.5px] font-normal text-white leading-tight">Download on the</div>
                                <div className="text-[18px] font-semibold leading-tight">App Store</div>
                            </div>
                        </button>
                    </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-6 text-sm text-gray-500">
                    <p>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy,
                        Privacy Policy and Content Policies.
                    </p>
                    <p className="mt-2">
                        © 2013-2026 Robin Photo Studio. All rights reserved.
                    </p>
                </div>

            </footer>



        </>
    )
}

export default FrontPage


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
        const mailtoLink = `mailto:robin@gmail.com?subject=Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="w-full py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                    >
                        Let’s start a <br /> conversation.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-md leading-relaxed"
                    >
                        Whether you have a question about our features, pricing, or just want to say hello, we’re ready to answer all your questions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                            </div>
                            <span className="text-gray-700 font-medium">robin@gmail.com</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900 ml-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                placeholder="Your name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900 ml-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                placeholder="you@example.com"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900 ml-1">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                                placeholder="How can we help?"
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

const DownloadAppSection = () => {
    return (
        <section id='download-app' className="w-full flex justify-center items-center py-24 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[90%] max-w-6xl bg-slate-50 rounded-[48px] 
    flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-20 relative overflow-hidden border border-slate-100 shadow-lg"
            >
                {/* LEFT CONTENT */}
                <div className="max-w-lg z-10 text-center md:text-left mt-10 md:mt-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Download the app now!
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        Experience seamless photo booking, live previews, and
                        professional editing only on the <span className="text-blue-600 font-semibold">Robin Photo Studio app.</span>
                    </p>

                    {/* Store Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                            alt="Google Play"
                            className="h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity"
                        />
                        <img
                            src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                            alt="App Store"
                            className="h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity"
                        />
                    </div>
                </div>

                {/* RIGHT PHONE + QR */}
                <div className="relative z-10 h-[270px] overflow-hidden">
                    <div className="w-full max-w-[380px] h-[540px] rounded-[40px] bg-white border-4 border-gray-300 shadow-2xl flex items-start justify-center relative pt-12">
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
        <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text Content */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#ff4f5a] font-bold tracking-widest text-sm uppercase mb-4 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
                            We don't just take photos; we craft <span className="italic font-serif text-gray-500">visual legacies.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
                    >
                        Since 2012, Robin Photo Studio has redefined the art of storytelling through the lens.
                        We blend cinematic techniques with timeless portraiture to create images that aren't just seen—they're felt.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-8 pt-4"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">10k+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Sessions</p>
                        </div>
                        <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">15+</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Awards</p>
                        </div>
                        <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Satisfaction</p>
                        </div>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    >
                        Read Our Story
                    </motion.button>
                </div>

                {/* Right: Image Grid */}
                <div className="relative h-[600px] w-full hidden md:block">
                    {/* Abstract Background Shape */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full blur-3xl -z-10"></div>

                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-0 right-0 w-[65%] h-[75%] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img src={img4} alt="Studio Work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>

                    {/* Secondary Floating Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute bottom-10 left-10 w-[45%] h-[45%] rounded-3xl overflow-hidden shadow-xl border-4 border-white"
                    >
                        <img src={img2} alt="Cinematic Shot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>

                    {/* Small Accent Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute top-20 left-0 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white"
                    >
                        <img src={img1} alt="Detail Shot" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                {/* Mobile Image Stack (Visible only on mobile) */}
                <div className="md:hidden flex flex-col gap-4">
                    <img src={img4} alt="Studio Work" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
                    <div className="flex gap-4">
                        <img src={img2} alt="Cinematic Shot" className="w-1/2 h-40 object-cover rounded-2xl shadow-lg" />
                        <img src={img1} alt="Detail Shot" className="w-1/2 h-40 object-cover rounded-2xl shadow-lg" />
                    </div>
                </div>

            </div>
        </section>
    );
};
