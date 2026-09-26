import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchBlogPost } from '../api';
import finalLogo from '../assets/recent/final logo.png';
import { Camera } from 'lucide-react';
import SiteFooter from './SiteFooter';

// ── Share Bar ──────────────────────────────────────────────────────────────────
const ShareBar = ({ title }) => {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title || '');

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback
            const el = document.createElement('input');
            el.value = url;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const nativeShare = async () => {
        if (navigator.share) {
            await navigator.share({ title, url });
        }
    };

    return (
        <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Share this article</p>
            <div className="flex flex-wrap gap-3">

                {/* WhatsApp */}
                <a
                    href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.848L0 24l6.335-1.513A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.575-.5-5.065-1.37l-.362-.217-3.762.898.937-3.665-.236-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    WhatsApp
                </a>

                {/* Facebook */}
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1877F2] text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                </a>

                {/* X (Twitter) */}
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                    X
                </a>

                {/* Copy Link */}
                <button
                    onClick={copyLink}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 border ${
                        copied
                            ? 'bg-green-50 border-green-400 text-green-700'
                            : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {copied ? (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy Link
                        </>
                    )}
                </button>

                {/* Native Share — only shown on mobile/supported browsers */}
                {typeof navigator !== 'undefined' && navigator.share && (
                    <button
                        onClick={nativeShare}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ff4f5a] text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share
                    </button>
                )}
            </div>
        </div>
    );
};

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showAppStorePopup, setShowAppStorePopup] = useState(false);

    useEffect(() => {
        // Fetch post by ID
        fetchBlogPost(id)
            .then(data => setPost(data))
            .catch(err => console.error("Failed to load post", err));
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
                        <span className="text-sm text-gray-500">{new Date(post.createdAt || post.date).toLocaleDateString()}</span>
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
                            src={post.coverImage || post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div 
                        className="blog-content prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                    />

                    {/* ── Share Bar ── */}
                    <ShareBar title={post.title} />
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
            <SiteFooter />
        </div>
    );
};

export default BlogPost;
