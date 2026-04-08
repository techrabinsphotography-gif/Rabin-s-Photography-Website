import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Briefcase, Share2, X, Upload, CheckCircle, Loader2, Camera, Sparkles, Bell } from 'lucide-react';
import finalLogo from '../assets/recent/final logo.png';
import { fetchCareers, submitApplication, uploadResume } from '../api';

// ── Apply Modal ───────────────────────────────────────────────────────────────
function ApplyModal({ job, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) { setError('Please upload your resume'); return; }
    setError('');
    setLoading(true);
    try {
      const resumeUrl = await uploadResume(resumeFile);
      await submitApplication({ careerId: job._id, ...form, resumeUrl });
      setStep('success');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={step === 'success' ? onClose : undefined} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
      >
        {step === 'form' ? (
          <>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#ff4f5a] to-orange-500 p-6">
              <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Applying for</p>
              <h2 className="text-white text-2xl font-black">{job.title}</h2>
              <p className="text-white/70 text-sm mt-1">{job.department} · {job.type}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4f5a]/30 focus:border-[#ff4f5a] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4f5a]/30 focus:border-[#ff4f5a] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Contact Number</label>
                <input
                  name="phone" type="tel" value={form.phone} onChange={handleChange} required
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4f5a]/30 focus:border-[#ff4f5a] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Resume / CV</label>
                <label className={`flex items-center gap-3 border-2 border-dashed rounded-xl px-4 py-4 cursor-pointer transition-all ${resumeFile ? 'border-[#ff4f5a] bg-[#ff4f5a]/5' : 'border-gray-200 hover:border-[#ff4f5a]/50'}`}>
                  <Upload className={`w-5 h-5 flex-shrink-0 ${resumeFile ? 'text-[#ff4f5a]' : 'text-gray-400'}`} />
                  <span className={`text-sm ${resumeFile ? 'text-[#ff4f5a] font-semibold' : 'text-gray-400'}`}>
                    {resumeFile ? resumeFile.name : 'Upload PDF, DOC or DOCX (max 5MB)'}
                  </span>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => setResumeFile(e.target.files[0])} />
                </label>
              </div>

              {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-xl">{error}</p>}

              <button
                type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-[#ff4f5a] to-orange-500 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#ff4f5a]/20 disabled:opacity-60"
              >
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : 'Submit Application →'}
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="p-10 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </motion.div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Congratulations! 🎉</h2>
            <p className="text-gray-500 mb-2">Your application for</p>
            <p className="text-[#ff4f5a] font-bold text-lg mb-4">{job.title}</p>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              has been submitted successfully. Our team will review your application and get back to you soon. Keep an eye on your inbox!
            </p>
            <button
              onClick={onClose}
              className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-[#ff4f5a] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── Job Card ──────────────────────────────────────────────────────────────────
function JobCard({ job, onApply }) {
  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/careers/${job._id}`;
    if (navigator.share) {
      await navigator.share({ title: job.title, text: `Check out this job at Rabin's Photography: ${job.title}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Link to={`/careers/${job._id}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff4f5a]/20 transition-all duration-300 h-[280px] flex flex-col overflow-hidden"
      >
        {/* Card Top */}
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-black text-gray-900 group-hover:text-[#ff4f5a] transition-colors leading-tight line-clamp-2">{job.title}</h3>
              <p className="text-[#ff4f5a] font-bold uppercase tracking-widest text-[10px] mt-1">{job.department}</p>
            </div>
            <button
              onClick={handleShare}
              className="flex-shrink-0 p-2 rounded-xl text-gray-400 hover:text-[#ff4f5a] hover:bg-[#ff4f5a]/10 transition-all"
              title="Share this job"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              <Briefcase className="w-3 h-3" /> {job.type}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{job.description}</p>
        </div>

        {/* Card Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={(e) => { e.preventDefault(); onApply(job); }}
            className="w-full bg-black text-white text-sm font-bold py-2.5 rounded-xl hover:bg-[#ff4f5a] transition-colors"
          >
            Apply Now
          </button>
        </div>
      </motion.div>
    </Link>
  );
}

// ── Main Careers Page ─────────────────────────────────────────────────────────
const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyJob, setApplyJob] = useState(null);

  useEffect(() => {
    fetchCareers()
      .then(data => setJobs(data || []))
      .catch(err => console.error('Failed to load careers', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/"><img src={finalLogo} alt="Rabin's Photography" className="h-20 w-auto object-contain" /></Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-black transition-colors font-medium">Home</Link>
            <Link to="/careers" className="text-[#ff4f5a] font-bold">Careers</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-[#ff4f5a]/20 border border-[#ff4f5a]/40 text-[#ff4f5a] text-sm font-bold tracking-widest uppercase mb-6">
              Careers
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f5a] to-orange-500">Creative Revolution.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Be part of a team that's redefining photography and digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-12 h-12 border-4 border-[#ff4f5a] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : jobs.length > 0 ? (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-gray-900 mb-10 border-b pb-4"
            >
              Open Roles <span className="text-[#ff4f5a] text-2xl font-bold ml-2">({jobs.length})</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <JobCard key={job._id} job={job} onApply={setApplyJob} />
              ))}
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, type: 'spring' }} className="relative mb-10">
              <div className="absolute inset-0 rounded-full bg-[#ff4f5a]/20 blur-2xl animate-pulse" />
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#ff4f5a] to-orange-500 flex items-center justify-center shadow-2xl shadow-[#ff4f5a]/30">
                <Clock className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Jobs Coming <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f5a] to-orange-500">Very Soon</span></h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">We're preparing exciting opportunities. New positions will be posted here shortly.</p>
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mb-12">
              {[{ icon: Camera, label: 'Photography Roles' }, { icon: Sparkles, label: 'Creative Positions' }, { icon: Bell, label: 'Tech & Design Jobs' }].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4f5a]/10 flex items-center justify-center"><Icon className="w-5 h-5 text-[#ff4f5a]" /></div>
                  <span className="text-sm font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>
            <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-[#ff4f5a] transition-colors shadow-lg">← Back to Home</Link>
          </div>
        )}
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
