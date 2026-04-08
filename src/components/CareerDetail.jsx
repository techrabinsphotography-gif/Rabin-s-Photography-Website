import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, Share2, ArrowLeft, CheckCircle, Upload, Loader2, X } from 'lucide-react';
import finalLogo from '../assets/recent/final logo.png';
import { fetchCareerPost, submitApplication, uploadResume } from '../api';

// ── Apply Modal (same as Careers.jsx) ────────────────────────────────────────
function ApplyModal({ job, onClose }) {
  const [step, setStep] = useState('form');
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
            <div className="bg-gradient-to-r from-[#ff4f5a] to-orange-500 p-6">
              <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Applying for</p>
              <h2 className="text-white text-2xl font-black">{job.title}</h2>
              <p className="text-white/70 text-sm mt-1">{job.department} · {job.type}</p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4f5a]/30 focus:border-[#ff4f5a] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4f5a]/30 focus:border-[#ff4f5a] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Contact Number</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4f5a]/30 focus:border-[#ff4f5a] transition-all" />
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
              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-[#ff4f5a] to-orange-500 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#ff4f5a]/20 disabled:opacity-60">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : 'Submit Application →'}
              </button>
            </form>
          </>
        ) : (
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
              has been submitted successfully. Our team will review your application and get back to you soon!
            </p>
            <button onClick={onClose} className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-[#ff4f5a] transition-colors">Done</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── Career Detail Page ────────────────────────────────────────────────────────
export default function CareerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    fetchCareerPost(id)
      .then(data => setJob(data))
      .catch(() => navigate('/careers'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: job?.title, text: `Check out this job at Rabin's Photography: ${job?.title}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#ff4f5a] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!job) return null;

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

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back */}
        <Link to="/careers" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to all jobs
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Job Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-10">
            <p className="text-[#ff4f5a] font-bold uppercase tracking-widest text-xs mb-3">{job.department}</p>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-sm font-medium">
                <Briefcase className="w-4 h-4" /> {job.type}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${job.status === 'OPEN' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {job.status}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setApplyOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-[#ff4f5a] to-orange-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#ff4f5a]/20"
              >
                Apply Now
              </button>
              <button
                onClick={handleShare}
                className="px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 font-medium"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>

          {/* Job Body */}
          <div className="p-8 md:p-10 space-y-8">
            <div>
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-wider mb-4">About This Role</h2>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">{job.description}</p>
            </div>

            {job.requirements && job.requirements.length > 0 && (
              <div>
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-wider mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#ff4f5a]/10 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f5a]" />
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">Ready to join our creative team?</p>
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="px-5 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:border-[#ff4f5a] hover:text-[#ff4f5a] transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Share2 className="w-4 h-4" /> Share Job
                </button>
                <button
                  onClick={() => setApplyOpen(true)}
                  className="px-8 py-2.5 bg-black text-white font-bold rounded-xl hover:bg-[#ff4f5a] transition-colors text-sm"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {applyOpen && <ApplyModal job={job} onClose={() => setApplyOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
