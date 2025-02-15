import React, { useState } from 'react';

const EnquiryForm = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="py-12 px-4 md:px-8 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2>
                {submitted ? (
                    <div className="text-center p-6 bg-green-100 rounded-lg">
                        <p className="text-green-700">Thank you for your enquiry! We'll get back to you soon.</p>
                    </div>
                ) : (
                    <form
                        action="https://formsubmit.co/YOUR_EMAIL_HERE" // Replace with your email
                        method="POST"
                        className="space-y-4"
                    >
                        {/* Honeypot */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        {/* Disable Captcha */}
                        <input type="hidden" name="_captcha" value="false" />

                        {/* Success page */}
                        <input type="hidden" name="_next" value={window.location.href} />

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full p-3 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full p-3 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border rounded-lg resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Submit Enquiry
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EnquiryForm;
