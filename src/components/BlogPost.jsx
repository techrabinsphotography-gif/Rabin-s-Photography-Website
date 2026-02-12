import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts, featuredPost } from '../data/blogData';
import finalLogo from '../assets/recent/final logo.png';
import { Camera } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showAppStorePopup, setShowAppStorePopup] = useState(false);

    useEffect(() => {
        // Find post by ID
        const postId = parseInt(id);
        if (featuredPost.id === postId) {
            setPost(featuredPost);
        } else {
            const foundPost = blogPosts.find(p => p.id === postId);
            setPost(foundPost);
        }
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 p-6 z-50">
                <Link 
                    to="/blog" 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm hover:bg-white hover:shadow-md transition-all text-gray-700 font-medium group"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                </Link>
            </header>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-[#ff4f5a]/10 text-[#ff4f5a] text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                            <Camera className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">Professional Photographer</p>
                        </div>
                    </div>

                    <div className="relative aspect-[16/9] mb-12 rounded-2xl overflow-hidden shadow-lg">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div 
                        className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                    />
                </motion.div>
            </article>

            {/* Newsletter Section */}
            <section className="border-t border-gray-200 bg-gray-50 py-20 mt-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Enjoyed this article?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Subscribe to our newsletter to get more photography tips and stories delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:border-[#ff4f5a] focus:outline-none transition-colors"
                            />
                            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-[#ff4f5a]/30 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

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

export default BlogPost;
