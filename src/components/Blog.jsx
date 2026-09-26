import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import finalLogo from '../assets/recent/final logo.png';
import { fetchBlogPosts, fetchSiteSettings } from '../api';
import SiteFooter from './SiteFooter';

const PhotoSlider = ({ images }) => {
    const SLIDER_IMAGES = images && images.length > 0 ? images : null;
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);

    const goTo = (index, dir) => {
        setDirection(dir);
        setCurrent(index);
    };

    const next = () => {
        if (!SLIDER_IMAGES) return;
        const nextIndex = (current + 1) % SLIDER_IMAGES.length;
        goTo(nextIndex, 1);
    };

    const prev = () => {
        if (!SLIDER_IMAGES) return;
        const prevIndex = (current - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length;
        goTo(prevIndex, -1);
    };

    useEffect(() => {
        if (!SLIDER_IMAGES) return;
        timerRef.current = setInterval(() => {
            setCurrent(c => {
                setDirection(1);
                return (c + 1) % SLIDER_IMAGES.length;
            });
        }, 4500);
        return () => clearInterval(timerRef.current);
    }, [SLIDER_IMAGES]);

    if (!SLIDER_IMAGES) return null;

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
    };

    return (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height: '420px' }}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <img
                        src={SLIDER_IMAGES[current].src}
                        alt={SLIDER_IMAGES[current].caption}
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Caption */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-lg md:text-2xl font-semibold tracking-wide text-center px-4 drop-shadow-lg"
                    >
                        {SLIDER_IMAGES[current].caption}
                    </motion.p>
                </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrows */}
            <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {SLIDER_IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i, i > current ? 1 : -1)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === current ? 'w-6 bg-white' : 'w-2 bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showPopup, setShowPopup] = useState(false);
    const [showAppStorePopup, setShowAppStorePopup] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sliderImages, setSliderImages] = useState(null);
    const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
        fetchSiteSettings().then(d => {
            const s = d?.blogSliderImages;
            if (s?.image1) {
                setSliderImages([
                    { src: s.image1, caption: 'Capturing Timeless Moments' },
                    { src: s.image2 || '', caption: 'Stories Behind Every Frame' },
                    { src: s.image3 || '', caption: 'Light, Lens & Emotion' },
                ].filter(img => img.src));
            }
        }).catch(() => {});
    }, []);

    const categories = ['All', 'Wedding', 'Pre-Wedding', 'Portrait', 'Events', 'Tips & Tricks', 'Behind the Scenes', 'Rice Ceremony', 'Fashion', 'Commercial', 'Corporate'];

    useEffect(() => {
        fetchBlogPosts()
            .then(data => {
                if (data && data.length > 0) {
                    const published = data.filter(p => p.published);
                    const featured = published.find(p => p.featured) || published[0];
                    setFeaturedPost(featured);
                    setBlogPosts(published.filter(p => p._id !== featured?._id));
                }
            })
            .catch(err => console.error("Failed to load blogs", err))
            .finally(() => setLoading(false));
    }, []);

    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    // Reset visible count whenever the category filter changes
    useEffect(() => { setVisibleCount(9); }, [selectedCategory]);

    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-lg bg-white/80">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img src={finalLogo} alt="Rabin's Photography" className="h-20 w-auto object-contain" />
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                            <Link to="/blog" className="text-gray-900 font-semibold">Blog</Link>
                            <Link to="/Aboutus" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left: Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 min-w-0"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff4f5a]/10 to-orange-100/10 border border-[#ff4f5a]/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#ff4f5a]"></span>
                                <span className="text-[#ff4f5a] font-bold tracking-widest text-xs uppercase">Photography Blog</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Stories, tips, and insights about photography
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Explore our collection of articles covering wedding photography, portrait techniques, 
                                and behind-the-scenes stories from Rabin's Photography.
                            </p>
                        </motion.div>

                        {/* Right: Photo Slider */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="w-full lg:w-[480px] flex-shrink-0"
                        >
                            <PhotoSlider images={sliderImages} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Categories - moved below Featured post */}

            {/* Featured Post */}
            {loading ? (
                <div className="py-20 flex justify-center"><div className="w-10 h-10 border-4 border-[#ff4f5a] border-t-transparent flex items-center justify-center rounded-full animate-spin"></div></div>
            ) : featuredPost ? (
            <section className="max-w-7xl mx-auto px-6 py-8 lg:py-16">
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-10 lg:mb-20"
                >
                    <Link to={`/blog/${featuredPost._id}`} className="relative group overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[4/3] block">
                        <img 
                            src={featuredPost.coverImage || featuredPost.image} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    <div className="space-y-4 lg:space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-[#ff4f5a] text-white text-xs font-bold uppercase tracking-wider">
                                Featured
                            </span>
                            <span className="text-sm text-gray-500">{featuredPost.category}</span>
                        </div>
                        <Link to={`/blog/${featuredPost._id}`}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight hover:text-[#ff4f5a] transition-colors cursor-pointer">
                                {featuredPost.title}
                            </h2>
                        </Link>
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-left line-clamp-4 lg:line-clamp-none lg:max-h-32 lg:overflow-hidden">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-sm text-gray-500">
                            <span className="font-semibold text-gray-900">{featuredPost.author}</span>
                            <span>·</span>
                            <span>{new Date(featuredPost.createdAt || featuredPost.date).toLocaleDateString()}</span>
                            <span>·</span>
                            <span>{featuredPost.readTime}</span>
                        </div>
                        <Link to={`/blog/${featuredPost._id}`} className="inline-block px-6 py-2.5 lg:px-8 lg:py-3 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-[#ff4f5a]/30 transition-all duration-300">
                            Read Full Story
                        </Link>
                    </div>
                </motion.article>
            </section>
            ) : null}

            {/* Categories — shown after featured post, before the grid */}
            <section className="border-y border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium ${
                                    selectedCategory === category
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

                {/* Divider */}
                <div className="mb-8"></div>

                {/* Blog Posts Grid */}
                {!loading && (
                <section className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visiblePosts.map((post, index) => (
                        <motion.article
                            key={post._id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden"
                        >
                            <Link to={`/blog/${post._id}`} className="relative overflow-hidden aspect-[3/2] block">
                                <img 
                                    src={post.coverImage || post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            
                            <div className="p-6 flex flex-col flex-1 space-y-4">
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500">{post.readTime}</span>
                                </div>
                                
                                <Link to={`/blog/${post._id}`} className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#ff4f5a] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed line-clamp-3 mt-3">
                                        {post.excerpt}
                                    </p>
                                </Link>
                                
                                
                                <div className="flex items-center gap-3 text-sm mt-auto pt-4 border-t border-gray-100">
                                    <span className="font-semibold text-gray-700">{post.author}</span>
                                    <span className="text-gray-400">·</span>
                                    <span className="text-gray-500">{new Date(post.createdAt || post.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
                </section>
                )}

                {/* Load More */}
                {!loading && hasMore && (
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setVisibleCount(c => c + 9)}
                        className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                        Load More Articles
                        <span className="ml-2 text-sm text-gray-500 font-normal">
                            ({filteredPosts.length - visibleCount} remaining)
                        </span>
                    </button>
                </div>
                )}

            {/* Newsletter Section */}
            <section className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Never miss a story
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Get our latest photography tips, behind-the-scenes content, and exclusive offers 
                            delivered straight to your inbox.
                        </p>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            const button = e.target.querySelector('button');
                            const statusDiv = document.getElementById('newsletter-status');
                            
                            button.disabled = true;
                            button.textContent = 'Subscribing...';
                            
                            try {
                                const API = import.meta.env.VITE_API_BASE_URL || 'https://app-server-maaw.onrender.com/api/v1';
                                // Save to our server (stores in DB for admin view)
                                const response = await fetch(`${API}/newsletter/subscribe`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ email, source: 'blog' }),
                                });
                                
                                const data = await response.json();
                                
                                if (response.ok && data.success) {
                                    statusDiv.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800 text-sm';
                                    statusDiv.textContent = data.message || 'Successfully subscribed!';
                                    e.target.reset();
                                } else {
                                    statusDiv.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800 text-sm';
                                    statusDiv.textContent = 'Failed to subscribe. Please try again.';
                                }
                            } catch (error) {
                                statusDiv.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800 text-sm';
                                statusDiv.textContent = 'Network error. Please try again.';
                            } finally {
                                button.disabled = false;
                                button.textContent = 'Subscribe';
                            }
                        }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input 
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:border-[#ff4f5a] focus:outline-none transition-colors"
                            />
                            <button type="submit" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff4f5a] to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-[#ff4f5a]/30 transition-all duration-300">
                                Subscribe
                            </button>
                        </form>
                        <div id="newsletter-status"></div>
                        <p className="text-sm text-gray-500 mt-4">
                            Join 2,000+ photographers and enthusiasts
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer Section */}
            <SiteFooter />
        </div>
    );
};

export default Blog;
