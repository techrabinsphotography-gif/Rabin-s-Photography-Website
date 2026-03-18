
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Bell, Sparkles, Clock } from 'lucide-react';
import finalLogo from '../assets/recent/final logo.png';

const Careers = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/">
                        <img src={finalLogo} alt="Rabin's Photography" className="h-20 w-auto object-contain" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-600 hover:text-black transition-colors font-medium">Home</Link>
                        <Link to="/careers" className="text-[#ff4f5a] font-bold">Careers</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#ff4f5a]/20 border border-[#ff4f5a]/40 text-[#ff4f5a] text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                            Careers
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f5a] to-orange-500">Creative Revolution.</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Be part of a team that's redefining photography and digital experiences.
                            We're looking for passionate individuals to build the future with us.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">

                {/* Animated icon cluster */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
                    className="relative mb-10"
                >
                    {/* Pulsing glow ring */}
                    <div className="absolute inset-0 rounded-full bg-[#ff4f5a]/20 blur-2xl animate-pulse" />

                    <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#ff4f5a] to-orange-500 flex items-center justify-center shadow-2xl shadow-[#ff4f5a]/30">
                        <Clock className="w-16 h-16 text-white" />
                    </div>

                    {/* Orbiting sparkles */}
                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2"
                            style={{
                                transform: `rotate(${deg}deg) translateX(80px) translateY(-50%)`,
                            }}
                            animate={{ rotate: [deg, deg + 360] }}
                            transition={{ duration: 8 + i, repeat: Infinity, ease: 'linear' }}
                        >
                            <Sparkles className="w-4 h-4 text-[#ff4f5a]" style={{ transform: `rotate(-${deg}deg)` }} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Jobs Coming
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f5a] to-orange-500">
                            Very Soon
                        </span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                        We're preparing exciting opportunities for talented individuals. 
                        New positions will be posted here shortly — stay tuned!
                    </p>
                </motion.div>

                {/* Info cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-12"
                >
                    {[
                        { icon: Camera, label: 'Photography Roles' },
                        { icon: Sparkles, label: 'Creative Positions' },
                        { icon: Bell, label: 'Tech & Design Jobs' },
                    ].map(({ icon: Icon, label }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#ff4f5a]/20 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#ff4f5a]/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-[#ff4f5a]" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA back home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold text-base hover:bg-[#ff4f5a] transition-colors duration-300 shadow-lg hover:shadow-[#ff4f5a]/30"
                    >
                        ← Back to Home
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Careers;
