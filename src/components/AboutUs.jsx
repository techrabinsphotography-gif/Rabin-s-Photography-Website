import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import finalLogo from "../assets/recent/final logo.png";
import img2 from "/samall.jpeg"; // Assuming this is a good image to use
import img4 from "/long.jpeg"; // Another image
import teamImg from "/Rabin_Ghosh.jpeg"; // Avatar

const teamData = {
  core: [
    { name: "Amit Roy", image: "/Team/Core/Copy of Amit Roy.jpg" },
    { name: "Anirban Das", image: "/Team/Core/Copy of Anirban Das.jpg" },
    { name: "Debdibs Daw", image: "https://lh3.googleusercontent.com/d/1XtZA2i1fdNiKfqxhaxzX9HWLejJOfpNu" },
    { name: "Diponkor Paul", image: "/Team/Core/Copy of Diponkor Paul.JPG" },
    { name: "Jayanta Das", image: "/Team/Core/Copy of Jayanta Das.jpg" },
    { name: "Kiron Das Ghosh", image: "/Team/Core/Copy of Kiron Das Ghosh.jpg" },
    { name: "Prosenjit Mondal", image: "/Team/Core/Copy of Prosenjit Mondal.jpeg" },
    { name: "Puspal Bhattacharya", image: "/Team/Core/Copy of Puspal Bhattacharya.jpeg" },
    { name: "Rohan Roy", image: "/Team/Core/Copy of Rohan Roy.jpg" },
    { name: "Rohit Saha", image: "/Team/Core/Copy of Rohit Saha.webp" },
    { name: "Sabyasachi Mondal", image: "/Team/Core/Copy of Sabyasachi Mondal.JPG" },
    { name: "Samit Das", image: "/Team/Core/Copy of Samit Das.jpg" },
    { name: "Sayan Mukherjee", image: "/Team/Core/Copy of Sayan Mukherjee.jpeg" },
    { name: "Sk Salim", image: "/Team/Core/Copy of Sk Salim.jpg" },
    { name: "Suman Bhattacharjee", image: "/Team/Core/Copy of Suman Bhattacharjee.jpg" }
  ],
  backbone: [
    { name: "Kushal Saha", image: "/Team/Backbone/Copy of  Kushal Saha.jpeg" },
    { name: "Tridib Purkait", image: "/Team/Backbone/Copy of  Tridib Purkait.jpg" },
    { name: "Swarup Das", image: "/Team/Backbone/Copy of  swarup das.jpg" },
    { name: "Arup Halder", image: "/Team/Backbone/Copy of ARUP HALDER.jpeg" },
    { name: "Arpan Goswami", image: "/Team/Backbone/Copy of Arpan Goswami.jpg" },
    { name: "Ayan Bagchi", image: "/Team/Backbone/Copy of Ayan Bagchi.jpg" },
    { name: "Chinmoy Paul", image: "/Team/Backbone/Copy of Chinmoy Paul.jpeg" },
    { name: "Dinesh Kumar Ghosh", image: "/Team/Backbone/Copy of Dinesh Kumar Ghosh.jpg" },
    { name: "Gopal Das", image: "/Team/Backbone/Copy of Gopal Das.jpg" },
    { name: "Manotosh Das", image: "/Team/Backbone/Copy of Manotosh Das.jpg" },
    { name: "Niladri Das", image: "/Team/Backbone/Copy of Niladri Das.JPG" },
    { name: "Samrat Manna", image: "/Team/Backbone/Copy of Samrat Manna.JPG" },
    { name: "Shreyankan Dey", image: "/Team/Backbone/Copy of Shreyankan Dey.jpg" },
    { name: "Souvik Ganguli", image: "/Team/Backbone/Copy of Souvik Ganguli.jpg" },
    { name: "Souvik Mitra", image: "/Team/Backbone/Copy of Souvik Mitra.jpeg" },
    { name: "Surya Sekhar", image: "/Team/Backbone/Copy of Surya Sekhar.jpg" }
  ],
  crew: [
    { name: "Debdibs Daw", image: "https://lh3.googleusercontent.com/d/1XtZA2i1fdNiKfqxhaxzX9HWLejJOfpNu" },
    { name: "Rohan Banik", image: "/Team/Crew/Copy of ROHAN BANIK.jpg" },
    { name: "Sanat Bardolai", image: "/Team/Crew/Copy of Sanat Bardolai.jpg" },
    { name: "Shreyan Roychowdhury", image: "/Team/Crew/Copy of Shreyan Roychowdhury.jpg" }
  ]
};

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
              <Link to="/about" className="text-white font-semibold">
                About Us
              </Link>
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
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Capturing Moments, <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-[#ff4f5a] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Creating Art
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                src={img4}
                alt="Photography Session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black rounded-2xl border border-white/10 p-4 shadow-xl -skew-y-3 hidden md:block">
              <img
                src={img2}
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
                      src={teamImg}
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

      {/* Team Hierarchy Section - White UI */}
      <section className="py-24 px-6 bg-white text-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet The Team</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The creative minds and skilled professionals behind the magic.
                    </p>
                    <div className="w-24 h-1 bg-[#ff4f5a] mx-auto mt-6"></div>
                </motion.div>
            </div>

            {/* Core Team */}
            <div className="mb-20">
                <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-widest text-gray-800">1. Core</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamData.core.map((member, idx) => (
                        <div key={idx} className="group flex flex-col items-center w-36 md:w-48">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-gray-100 group-hover:border-[#ff4f5a] transition-all duration-300 mb-4 bg-gray-100">
                                <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h4 className="text-lg font-bold text-center group-hover:text-[#ff4f5a] transition-colors">{member.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Backbone */}
            <div className="mb-20">
                <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-widest text-gray-800">2. Backbone</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamData.backbone.map((member, idx) => (
                        <div key={idx} className="group flex flex-col items-center w-36 md:w-48">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-gray-100 group-hover:border-[#ff4f5a] transition-all duration-300 mb-4 bg-gray-100">
                                <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h4 className="text-lg font-bold text-center group-hover:text-[#ff4f5a] transition-colors">{member.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Crew */}
            <div>
                <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-widest text-gray-800">3. Crew</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamData.crew.map((member, idx) => (
                        <div key={idx} className="group flex flex-col items-center w-36 md:w-48">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-gray-100 group-hover:border-[#ff4f5a] transition-all duration-300 mb-4 bg-gray-100">
                                <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h4 className="text-lg font-bold text-center group-hover:text-[#ff4f5a] transition-colors">{member.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900 border-t border-white/10 text-center relative">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Beautiful</h2>
            <p className="text-xl text-gray-400 mb-2">Your moments are special — and they deserve more than just photographs.</p>
            <p className="text-2xl text-[#ff4f5a] font-medium italic mb-10">Let's turn them into art that speaks forever.</p>
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
            <img
              src={finalLogo}
              alt="Rabin's Photography"
              className="w-64 mb-4 object-contain"
            />
            {/* Added brightness-0 invert if the logo is black text, but usually finalLogo is an image. Assuming it works on dark bg. If not, I'll remove the filter.*/}
            {/* Actually, the logo likely contains black text 'Rabin's Photography'. If so, it won't be visible on black bg.
                           In Blog.jsx footer (black bg), the logo seemed to be used as is? Let me check Blog.jsx footer.
                           In Blog.jsx footer, it's <img src={finalLogo} ... className="w-64 mb-4 object-contain" /> inside a dark footer.
                           Wait, if the logo is black text, it won't show on black footer.
                           Let's assumed it's visible or has light text. But wait, `Demo.jsx` uses it in a black footer too. So it must be compatible.
                        */}
            <p className="text-white text-xs mt-4 leading-relaxed max-w-xs">
              Book. Track. Deliver. Professional photography management, all in
              one app.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Photographers</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">
                Professional Services
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Booking System
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Portfolio
              </li>

              <li className="hover:text-white transition-colors cursor-pointer text-gray-400 group relative">
                <Link
                  to="/careers"
                  className="relative group-hover:text-white transition-colors duration-300"
                >
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
              <li className="hover:text-white transition-colors cursor-pointer">
                Book a Session
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Track Project
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Wedding Photography
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <Link to="/help">Help & Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.instagram.com/rabinsphotography/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@RabinsPhotography"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/RabinsPhotography/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://x.com/Rabinsclick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
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
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.67 5.17-1.44 1.14.08 3.52.41 4.3 2.5a3.65 3.65 0 0 1-2 2 c-1.52.89-1.85 3.51.05 5.37.5 1.57.25 2.15 0 2.5ZM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.53-2.95 1.5-.83-4.17.65-3.19 1.05-3.19Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-medium text-gray-400 leading-none">
                      Download on the
                    </div>
                    <div className="text-lg font-bold leading-tight">
                      App Store
                    </div>
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
                    <p className="text-xs text-gray-500">
                      iOS app launching soon!
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Google Play - With Popup */}
              <div className="relative">
                <button
                  onClick={() => setShowPopup(true)}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 21,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-medium text-gray-400 leading-none">
                      GET IT ON
                    </div>
                    <div className="text-lg font-bold leading-tight">
                      Google Play
                    </div>
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
                    <p className="text-xs text-gray-500">
                      We are working on the Android version.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-6 text-sm text-gray-600 relative z-10">
          <p className="mb-2">
            By continuing past this page, you agree to our{" "}
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            ,{" "}
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            and Cookie Policy.
          </p>
          <p>© 2013-2026 Rabin's Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
