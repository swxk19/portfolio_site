import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-50 rounded-xl shadow-md mx-auto mt-8 max-w-7xl px-4 mb-8">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-700 mb-4">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-xl font-semibold text-gray-900">Email: <a href="mailto:s.wxk19@gmail.com" className="text-blue-600 hover:underline">s.wxk19@gmail.com</a></p>
                    <p className="text-xl font-semibold text-gray-900">Phone: +65 9296 2763</p>
                    {/* You can add social media links here, e.g., LinkedIn */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
