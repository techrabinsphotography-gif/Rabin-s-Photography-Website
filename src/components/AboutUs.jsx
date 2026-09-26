import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import finalLogo from "../assets/recent/final logo.png";
import img2Fallback from "/samall.jpeg";
import img4Fallback from "/long.jpeg";
import SiteFooter from "./SiteFooter";
import teamImgFallback from "/Rabin_Ghosh.jpeg";

import { fetchTeam, fetchSiteSettings } from '../api';

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
      { threshold: 0.3 },
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

const CounterStat = ({ end, suffix = "", color, label }) => {
  const { count, countRef } = useCountUp(end, 2000);

  return (
    <div
      ref={countRef}
      className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
    >
      <p
        className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
      >
        {count}
        {suffix}
      </p>
      <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
        {label}
      </p>
    </div>
  );
};

// ── YouTube embed helper ──────────────────────────────────────────────────────
const getYouTubeId = (url) => {
  const match = url?.match(/(?:v=|youtu\.be\/|embed\/)([^&\s?/]+)/);
  return match ? match[1] : null;
};

// ── Commercial Video Slider ───────────────────────────────────────────────────
const CommercialSlider = ({ videos }) => {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  // Filter to only valid YouTube videos
  const validVideos = (videos || []).filter(v => getYouTubeId(v.url));
  if (validVideos.length === 0) return null;

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 420, behavior: 'smooth' });
  };

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  return (
    <section className="py-20 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Commercials</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">A glimpse into the cinematic world we create for our clients.</p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {canLeft && (
            <button onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-[#a855f7] text-white flex items-center justify-center shadow-lg hover:bg-[#9333ea] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          <div ref={scrollRef} onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {validVideos.map((v, i) => {
              const ytId = getYouTubeId(v.url);
              return (
                <div key={i} className="flex-shrink-0 w-[380px] md:w-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-xl hover:border-[#a855f7]/40 transition-all duration-300">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1`}
                      title={v.title || `Video ${i + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen loading="lazy"
                    />
                  </div>
                  {v.title && <div className="px-4 py-3"><p className="text-white text-sm font-semibold truncate">{v.title}</p></div>}
                </div>
              );
            })}
          </div>
          {canRight && validVideos.length > 1 && (
            <button onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-[#a855f7] text-white flex items-center justify-center shadow-lg hover:bg-[#9333ea] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// ── Team member card ──────────────────────────────────────────────────────────
const TeamCard = ({ name, imgSrc, initial, bio, position }) => {
  const [imgError, setImgError] = useState(false);
  const [tapped, setTapped] = useState(false);  // mobile tap state

  return (
    /* Outer wrapper — on mobile fills grid cell, on desktop fixed 11rem slot */
    <div
      className="relative flex-shrink-0 w-full md:w-[11rem]"
      style={{ height: '15rem' }}
    >
      {/* ── MOBILE CARD (visible only on <md screens) ── */}
      <div
        className="md:hidden w-full h-full rounded-2xl overflow-hidden bg-[#111] border border-[#a855f7]/20 cursor-pointer select-none relative"
        onClick={() => setTapped(t => !t)}
      >
        {/* Image side */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${tapped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          {imgSrc && !imgError ? (
            <img
              src={imgSrc}
              alt={name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-[#a855f7] text-4xl font-bold">
              {initial}
            </div>
          )}
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3">
            <p className="text-white font-bold text-sm leading-tight truncate">{name}</p>
            {position && <p className="text-[#a855f7] text-xs font-semibold capitalize mt-0.5">{position}</p>}
          </div>
          {/* Tap hint */}
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#a855f7]/80 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
            </svg>
          </div>
        </div>

        {/* Info side — shown after tap */}
        <div
          className={`absolute inset-0 bg-[#0d0d0d] p-4 flex flex-col justify-center transition-opacity duration-300 ${tapped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <p className="text-white font-bold text-sm leading-tight mb-1 break-words">{name}</p>
          {position && <p className="text-[#a855f7] text-xs font-semibold capitalize mb-2 break-words">{position}</p>}
          {bio
            ? <p className="text-gray-400 text-xs leading-relaxed line-clamp-6 break-words">{bio}</p>
            : <p className="text-gray-600 text-xs italic">Rabin's Photography Team</p>
          }
          <p className="text-gray-600 text-[10px] mt-3">Tap to go back</p>
        </div>
      </div>

      {/* ── DESKTOP CARD (visible only on md+ screens, hover-expand) ── */}
      <div
        className="group hidden md:flex absolute top-0 left-0 rounded-2xl overflow-hidden bg-[#111] shadow-lg border border-[#a855f7]/20
          hover:border-[#a855f7]/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
          hover:z-10
          transition-all duration-300 ease-in-out cursor-pointer"
        style={{ width: '11rem', height: '15rem' }}
        onMouseEnter={e => { e.currentTarget.style.width = '23rem'; }}
        onMouseLeave={e => { e.currentTarget.style.width = '11rem'; }}
      >
        {/* Image */}
        <div className="flex-shrink-0 transition-all duration-300 relative"
          style={{ width: '11rem', minWidth: '11rem', height: '100%' }}
        >
          <div className="absolute inset-0 transition-all duration-300 h-full">
            {imgSrc && !imgError ? (
              <img
                src={imgSrc}
                alt={name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-[#a855f7] text-4xl font-bold">
                {initial}
              </div>
            )}
          </div>
          {/* Name overlay — fades on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3
            opacity-100 group-hover:opacity-0 transition-opacity duration-200 z-10">
            <p className="text-white font-bold text-sm leading-tight truncate">{name}</p>
            {position && <p className="text-[#a855f7] text-xs font-semibold capitalize mt-0.5">{position}</p>}
          </div>
        </div>

        {/* Info panel — slides in on hover */}
        <div className="flex flex-col justify-center px-4 py-4 bg-[#0d0d0d]
          w-0 overflow-hidden group-hover:w-[12rem]
          transition-all duration-300 ease-in-out flex-shrink-0 min-w-0">
          <p className="text-white font-bold text-sm leading-tight mb-1 break-words">{name}</p>
          {position && <p className="text-[#a855f7] text-xs font-semibold capitalize mb-2 break-words">{position}</p>}
          {bio
            ? <p className="text-gray-400 text-xs leading-relaxed line-clamp-5 break-words">{bio}</p>
            : <p className="text-gray-600 text-xs italic">Rabin's Photography Team</p>
          }
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAppStorePopup, setShowAppStorePopup] = useState(false);
  const [teamData, setTeamData] = useState({ backbone: {}, crew: {}, core: {} });
  const [teamLoading, setTeamLoading] = useState(true);
  const [activeTier, setActiveTier] = useState('core');
  const [siteImages, setSiteImages] = useState({ heroBg: '', portrait: '', founder: '', heroVideo: '' });

  useEffect(() => {
    fetchTeam()
      .then(data => {
        if (data && typeof data === 'object') setTeamData(data);
      })
      .catch(err => console.error("Failed to load team data", err))
      .finally(() => setTeamLoading(false));

    fetchSiteSettings()
      .then(d => {
        if (d?.aboutImages) setSiteImages({ ...d.aboutImages, commercialVideos: d.commercialVideos || [] });
      })
      .catch(() => {});
  }, []);

  const heroBg   = siteImages.heroBg   || img4Fallback;
  const portrait = siteImages.portrait || img2Fallback;
  const founder  = siteImages.founder  || teamImgFallback;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff4f5a] selection:text-white">
      {/* Header */}
      {/* Header */}
      <header className="border-b border-white/10 bg-black sticky top-0 z-50 backdrop-blur-lg bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src={finalLogo}
                alt="Rabin's Photography"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link to="/Aboutus" className="text-white font-semibold">
                About Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" style={{ minHeight: '100vh' }}>
        {/* Background — video only, black if not set */}
        <div className="absolute inset-0 overflow-hidden">
          {siteImages.heroVideo ? (
            <video
              src={siteImages.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-black via-gray-950 to-black" />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff4f5a] animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Capturing Moments, <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-[#ff4f5a] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Creating Art's
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Rabin's Photography, we believe that every moment has a story — and every story deserves to be captured beautifully. Based in Kolkata, we are a team of passionate photographers and visual storytellers dedicated to transforming real emotions into timeless memories. With over a decade of experience in the industry, we specialize in creating cinematic, elegant, and emotionally rich visuals that you can cherish forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Who We Are & What We Do */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl skew-y-3 border border-white/10">
              <img
                src={heroBg}
                alt="Photography Session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black rounded-2xl border border-white/10 p-4 shadow-xl -skew-y-3 hidden md:block">
              <img
                src={portrait}
                alt="Rabin Ghosh"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who We Are
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-4">
                Rabin's Photography is a premium photography brand under Nozze Arte Pvt. Ltd., built with a vision to deliver high-quality, artistic, and meaningful visual content.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Led by Rabin Ghosh, a professional photographer with 10+ years of experience, our team combines creativity, technical expertise, and storytelling to deliver exceptional results across every project.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Do
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-4">
                We offer a wide range of professional photography and videography services:
              </p>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Wedding & Pre-Wedding Photography
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Cinematic Wedding Films
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Engagement, Haldi, Reception & Private Events
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Fashion & Portfolio Shoots
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Corporate & Brand Shoots
                </li>
              </ul>
              <p className="text-gray-400 leading-relaxed text-lg mt-6">
                Whether it's a grand wedding or an intimate celebration, we focus on capturing authentic emotions, candid moments, and fine details.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach & Mission/Vision */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Our Approach */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10"
            >
                <h2 className="text-3xl font-bold mb-6 text-[#ff4f5a]">Our Approach</h2>
                <p className="text-xl font-medium text-white mb-6">We don't just take photos — we tell stories.</p>
                <ul className="space-y-4 text-gray-400 text-lg">
                    <li className="flex items-start gap-3">
                        <span className="text-[#ff4f5a] mt-1">✦</span>
                        We understand your vision before the shoot
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[#ff4f5a] mt-1">✦</span>
                        We create a comfortable and natural environment
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[#ff4f5a] mt-1">✦</span>
                        We focus on candid emotions and real expressions
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[#ff4f5a] mt-1">✦</span>
                        We deliver premium quality with attention to detail
                    </li>
                </ul>
                <p className="text-white font-medium text-lg mt-8 pt-6 border-t border-white/10">
                    Our goal is simple: to make you relive your special moments every time you look at your photos.
                </p>
            </motion.div>

            {/* Why Choose Us & MV */}
            <div className="space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl -z-10" />
                    <h2 className="text-2xl font-bold mb-6 text-blue-400">Why Choose Us</h2>
                    <ul className="space-y-3 text-gray-300 font-medium">
                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          10+ Years of Professional Experience
                        </li>
                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          Creative & Cinematic Storytelling
                        </li>
                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          High-End Editing & Premium Output
                        </li>
                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          Dedicated Team Support
                        </li>
                        <li className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          Trusted by Hundreds of Happy Clients
                        </li>
                    </ul>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10"
                    >
                        <h3 className="text-xl font-bold mb-3 text-white">Our Mission</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            To create visually stunning and emotionally powerful memories that last a lifetime.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10"
                    >
                        <h3 className="text-xl font-bold mb-3 text-white">Our Vision</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            To become one of India's most trusted and premium photography brands, known for quality, creativity, and storytelling excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl"
          >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(255,79,90,0.15)] relative">
                    <img
                      src={founder}
                      alt="Rabin Ghosh"
                      className="w-full h-full object-cover"
                    />
                  </div>
              </div>
              
              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ff4f5a]/10 text-[#ff4f5a] mb-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">Rabin Ghosh</h2>
                  <p className="text-[#ff4f5a] font-bold tracking-widest uppercase text-sm -mt-2">
                    Founder & CEO
                  </p>
                  <div className="w-16 h-1 bg-[#ff4f5a]/30 my-4"></div>
                  <p className="text-2xl md:text-3xl text-gray-300 italic font-light leading-snug">
                    "Photography is the only language that can be understood anywhere in the world. My goal is to speak to your heart through my lens."
                  </p>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Team Hierarchy Section - Dark UI */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Meet The Team</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The creative minds and skilled professionals behind the magic.
                    </p>
                    <div className="w-24 h-1 bg-[#9333ea] mx-auto mt-6"></div>
                </motion.div>
            </div>

            {/* Tier Tab Buttons */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-[#111] border border-[#a855f7]/30 p-1 rounded-2xl gap-1">
                {['core', 'backbone', 'crew'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setActiveTier(tier)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeTier === tier
                        ? 'bg-[#a855f7] text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Tier Members */}
            {teamLoading ? (
              <div className="flex flex-wrap justify-center gap-4 py-2">
                {Array.from({length: 8}).map((_, i) => (
                  <div key={i} className="w-44 h-52 rounded-2xl bg-white/5 animate-pulse" />
                ))}
              </div>
            ) : (
              <motion.div
                key={activeTier}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center md:items-start gap-3 md:gap-4 py-2"
              >
                {(() => {
                  const tierData = teamData[activeTier] || {};
                  const allMembers = Object.values(tierData).flat();
                  if (allMembers.length === 0) return (
                    <p className="text-gray-500 py-12">No members in this tier yet.</p>
                  );
                  return allMembers.map((member, idx) => {
                    const imgSrc = member.image || member.imageUrl;
                    const initial = member.name ? member.name.charAt(0).toUpperCase() : '?';
                    return (
                      <TeamCard key={idx} name={member.name} imgSrc={imgSrc} initial={initial} bio={member.bio} position={member.position} />
                    );
                  });
                })()}
              </motion.div>
            )}

        </div>
      </section>

      {/* Commercial Videos Slider */}
      {siteImages.commercialVideos && siteImages.commercialVideos.length > 0 && (
        <CommercialSlider videos={siteImages.commercialVideos} />
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900 border-t border-white/10 text-center relative">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Beautiful</h2>
            <p className="text-xl text-gray-400 mb-2">Your moments are special — and they deserve more than just photographs.</p>
            <p className="text-2xl text-[#ff4f5a] font-medium italic mb-10">Let's turn them into art that speaks forever.</p>
        </div>
      </section>


      {/* Footer */}
      <SiteFooter />
    </div>
  );
};

export default AboutUs;
