import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff4f5a]/5 rounded-full blur-3xl animate-pulse" />

            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Terms of <span className="text-blue-500">Service</span>
                    </h1>
                    <p className="text-gray-400">Effective Date: February 2026</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12 text-gray-300 leading-relaxed"
                >
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Rabin's Photography website and services, you agree to be legally bound by these Terms of Service. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Company Information</h2>
                        <p className="mb-2">Rabin's Photography is a brand of Nozze Arte Pvt. Ltd.</p>
                        <p className="mb-2">CIN: U74999WB2020PTC236330</p>
                        <p>We provide professional photography and videography services across India.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Services Description</h2>
                        <p className="mb-4">We offer services including but not limited to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Wedding & Pre-wedding Photography</li>
                            <li>Cinematic Videography</li>
                            <li>Event Coverage (Haldi, Reception, Engagement, etc.)</li>
                            <li>Fashion & Portfolio Shoots</li>
                            <li>Corporate & Private Events</li>
                        </ul>
                        <p className="mt-4">
                            We reserve the right to modify, update, or discontinue any service without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Booking & Payment Policy</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Booking is confirmed only after 50% advance payment</li>
                            <li>Advance is non-refundable and non-transferable</li>
                            <li>Deliverables will be shared only after full payment clearance</li>
                            <li>Delayed payments may impact delivery timelines</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Cancellation & Rescheduling</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Same-day cancellation → 100% advance will be retained</li>
                            <li>Rescheduling is allowed only in exceptional cases with valid proof and management approval</li>
                            <li>Any date change may incur additional charges</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Service Execution & Coverage</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Coverage will be provided as per the selected package</li>
                            <li>Any additional hours beyond agreed time will be charged at ₹4,000 per hour</li>
                            <li>Client must ensure smooth coordination and event schedule adherence</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Travel, Food & Logistics</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Client must provide food and refreshments for the entire crew</li>
                            <li>Travel costs (to & from locations and during shoot) must be borne by the client</li>
                            <li>For outstation shoots, accommodation must be arranged by the client</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Deliverables & Timelines</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Raw Photos: 1–10 days after full payment</li>
                            <li>Edited Photos: 45–60 days after selection</li>
                            <li>Cinematic Video: 60–90 days after event completion</li>
                            <li>Album Design: 20–30 days after photo selection</li>
                            <li>Album Delivery: 10–15 days after final approval</li>
                        </ul>
                        <p className="mt-4">Timelines may vary due to workload or unforeseen circumstances.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Selection & Editing Policy</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Clients must complete selection within 30 days of receiving raw data</li>
                            <li>Album includes 2 revisions, video includes 1 revision</li>
                            <li>Additional revisions are chargeable</li>
                        </ul>
                        <h3 className="text-xl font-medium text-white mt-4 mb-2">Song Policy:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Finalized songs cannot be changed</li>
                            <li>Any change will cost ₹2,000 per revision</li>
                        </ul>
                        <h3 className="text-xl font-medium text-white mt-4 mb-2">Submission Deadline:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Clients must submit selections within 3 months</li>
                            <li>Delay penalty: ₹200 per day</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Data Storage & Responsibility</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Raw data will be stored for 30 days only</li>
                            <li>After final delivery, the client is responsible for data backup</li>
                            <li>We are not liable for data loss beyond the storage period</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Intellectual Property Rights</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Rabin's Photography retains full copyright of all images and videos</li>
                            <li>Clients receive a license for personal use only</li>
                            <li>Commercial usage requires prior written permission</li>
                            <li>We reserve the right to use content for portfolio, marketing, and social media unless restricted by client agreement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Client Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Ensure timely communication and approvals</li>
                            <li>Provide necessary permissions at shooting locations</li>
                            <li>Maintain respectful behavior with the team</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Limitation of Liability</h2>
                        <p className="mb-4">We are not liable for delays or failure in service due to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Natural disasters</li>
                            <li>Equipment failure beyond control</li>
                            <li>Government restrictions</li>
                            <li>Unforeseen circumstances</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">14. Privacy & Confidentiality</h2>
                        <p>
                            Client data and media are handled with confidentiality. Personal information will not be shared with third parties without consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">15. Public Conduct & Defamation</h2>
                        <p>
                            Any form of public defamation, false allegations, or reputation damage attempts will be subject to legal action.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">16. Governing Law</h2>
                        <p>
                            These Terms shall be governed by the laws of India. Any disputes will be subject to the jurisdiction of Kolkata, West Bengal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">17. Amendments</h2>
                        <p>
                            We reserve the right to update or modify these Terms at any time without prior notice. Continued use of services implies acceptance of updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">18. Contact Information</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li><span className="font-semibold text-white">Email:</span> support@rabinsphotography.com</li>
                            <li><span className="font-semibold text-white">Phone/WhatsApp:</span> Available during office hours</li>
                            <li><span className="font-semibold text-white">Office Hours:</span> Monday to Saturday, 10 AM – 7 PM</li>
                        </ul>
                    </section>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                   <a href="/" onClick={() => sessionStorage.setItem('scrollTo', 'footer')} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                   </a>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
