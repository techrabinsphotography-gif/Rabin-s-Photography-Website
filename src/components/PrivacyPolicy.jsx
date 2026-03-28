import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#ff4f5a]/10 to-transparent pointer-events-none" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 left-10 w-72 h-72 bg-[#ff4f5a]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Privacy <span className="text-[#ff4f5a]">Policy</span>
                    </h1>
                    <p className="text-gray-400">Last updated: February 2026</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12 text-gray-300 leading-relaxed"
                >
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p className="mb-2">
                            Rabin's Photography, a brand of Nozze Arte Pvt. Ltd. (CIN: U74999WB2020PTC236330), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website and services.
                        </p>
                        <p>
                            By accessing our website or booking our services, you agree to the terms of this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                        <p className="mb-2">We may collect the following types of information:</p>
                        
                        <h3 className="text-xl font-medium text-white mt-4 mb-2">a. Personal Information</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Full Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Address (if required for service delivery)</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-4 mb-2">b. Payment Information</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Payments are processed via secure third-party payment gateways</li>
                            <li>We do not store sensitive payment details like card numbers or CVV</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-4 mb-2">c. Media & Content</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Photos and videos captured during shoots</li>
                            <li>Media shared by clients for editing or album creation</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-4 mb-2">d. Technical & Usage Data</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Website usage behavior (cookies, analytics)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">We use your data to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>Process bookings and payments</li>
                            <li>Deliver photography and videography services</li>
                            <li>Communicate regarding your project</li>
                            <li>Provide customer support</li>
                            <li>Improve our services and website performance</li>
                            <li>Send updates, offers, or promotional content (only if opted in)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing & Disclosure</h2>
                        <p className="mb-4">We do not sell or rent your personal data.</p>
                        <p className="mb-4">We may share your information with:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Payment gateway providers (for transactions)</li>
                            <li>Cloud storage and delivery platforms</li>
                            <li>Internal team members or editors for project execution</li>
                        </ul>
                        <p>All third parties are obligated to maintain data confidentiality.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Data Storage & Retention</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Client data is stored securely on cloud systems</li>
                            <li>Raw data is stored for up to 90 days unless otherwise agreed</li>
                            <li>Final deliverables may be archived for future reference</li>
                        </ul>
                        <p>After the retention period, data may be permanently deleted without notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
                        <p className="mb-4">We implement industry-standard security measures including:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Secure cloud storage</li>
                            <li>Restricted access controls</li>
                            <li>Encryption where applicable</li>
                        </ul>
                        <p>However, no system is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies & Tracking Technologies</h2>
                        <p className="mb-4">Our website may use cookies to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Improve user experience</li>
                            <li>Analyze traffic and performance</li>
                            <li>Customize content</li>
                        </ul>
                        <p>Users can disable cookies through browser settings.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                            <li>Access your personal data</li>
                            <li>Request corrections or updates</li>
                            <li>Request deletion of your data (subject to legal and contractual obligations)</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                        <p>To exercise your rights, contact us at the details below.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Use of Photos & Media</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                            <li>We may use photos/videos for portfolio, social media, and marketing purposes</li>
                            <li>If you require privacy, you must inform us in writing before or during booking</li>
                            <li>Certain private or family images will not be shared without consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party platforms (Instagram, YouTube, etc.). We are not responsible for their privacy practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Children's Privacy</h2>
                        <p>
                            Our services are not directed toward individuals under 18. We do not knowingly collect data from minors without parental consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Policy Updates</h2>
                        <p>
                            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
                        <p className="mb-4">For any privacy-related concerns, contact us:</p>
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

export default PrivacyPolicy;
