
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Briefcase, IndianRupee, Clock, ArrowRight, CheckCircle, Upload, X } from 'lucide-react';
import finalLogo from '../assets/recent/final logo.png';
import { jobs } from '../data/careersData';
import AuthModal from './AuthModal';

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [applicationStatus, setApplicationStatus] = useState('idle'); // idle, submitting, success

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        if (isLoggedIn) {
            setShowApplicationForm(true);
        } else {
            setIsAuthOpen(true);
        }
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsAuthOpen(false);
        if (selectedJob) {
            setShowApplicationForm(true);
        }
    };

    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        setApplicationStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setApplicationStatus('success');
            setTimeout(() => {
                setShowApplicationForm(false);
                setSelectedJob(null);
                setApplicationStatus('idle');
            }, 3000);
        }, 2000);
    };

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
                    <div className="flex items-center gap-4">
                        {!isLoggedIn ? (
                            <button 
                                onClick={() => setIsAuthOpen(true)}
                                className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Login
                            </button>
                        ) : (
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Logged In
                            </div>
                        )}
                    </div>
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
                            We are hiring
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

            {/* Job Listings */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Positions</h2>
                        <p className="text-gray-500">Find the role that fits you best.</p>
                    </div>
                    
                    {/* Filters (Visual only for now) */}
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <button className="px-5 py-2 rounded-full bg-black text-white font-medium whitespace-nowrap">All Roles</button>
                        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium whitespace-nowrap transition-colors">Engineering</button>
                        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium whitespace-nowrap transition-colors">Design</button>
                        <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium whitespace-nowrap transition-colors">Photography</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff4f5a]/20 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-4 flex-1">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#ff4f5a] transition-colors">
                                            {job.title}
                                        </h3>
                                        {index === 0 && (
                                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                                            <Briefcase className="w-4 h-4" /> {job.type}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                                            <MapPin className="w-4 h-4" /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                                            <IndianRupee className="w-4 h-4" /> {job.salary}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {job.requirements.slice(0, 3).map((req, i) => (
                                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 md:min-w-[180px]">
                                    <button 
                                        onClick={() => handleApplyClick(job)}
                                        className="w-full px-6 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-[#ff4f5a] transition-colors shadow-lg shadow-gray-200 hover:shadow-[#ff4f5a]/20 active:scale-95 duration-200 flex items-center justify-center gap-2"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Application Modal */}
            <AnimatePresence>
                {showApplicationForm && selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
                        onClick={() => setShowApplicationForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
                                    <p className="text-gray-500 mt-1 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> {selectedJob.location}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setShowApplicationForm(false)}
                                    className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Success State */}
                            {applicationStatus === 'success' ? (
                                <div className="p-16 flex flex-col items-center justify-center text-center">
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle className="w-12 h-12" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h3>
                                    <p className="text-gray-500 max-w-md">
                                        Thank you for applying. We have received your application and will get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                /* Application Form */
                                <form onSubmit={handleApplicationSubmit} className="p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">First Name</label>
                                            <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#ff4f5a] focus:ring-4 focus:ring-[#ff4f5a]/10 outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                            <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#ff4f5a] focus:ring-4 focus:ring-[#ff4f5a]/10 outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#ff4f5a] focus:ring-4 focus:ring-[#ff4f5a]/10 outline-none transition-all" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Resume/CV</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:bg-gray-50 transition-colors cursor-pointer text-center group">
                                            <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#ff4f5a] mx-auto mb-3 transition-colors" />
                                            <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-400 mt-1">PDF, DOCX up to 5MB</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Cover Letter (Optional)</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#ff4f5a] focus:ring-4 focus:ring-[#ff4f5a]/10 outline-none transition-all resize-none"></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button 
                                            type="submit" 
                                            disabled={applicationStatus === 'submitting'}
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#ff4f5a]/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            {applicationStatus === 'submitting' ? (
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>Submit Application <Briefcase className="w-5 h-5" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AuthModal 
                isOpen={isAuthOpen} 
                onClose={() => setIsAuthOpen(false)} 
                onLoginSuccess={handleLoginSuccess}
            />
        </div>
    );
};

export default Careers;
