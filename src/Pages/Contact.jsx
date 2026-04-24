import React from "react";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Banner */}
      <section className="bg-blue-950 text-white py-16 md:py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-blue-200 max-w-xl mx-auto text-lg">
          Have a question or need a custom travel package? Get in touch with our team today.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 -mt-10 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Our Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 font-bold rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Location</h4>
                      <p className="text-gray-600 mt-1">123 Travel Avenue, Pune, Maharashtra 411001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 font-bold rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                      <PhoneCall size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Phone</h4>
                      <p className="text-gray-600 mt-1">+91 9322900618</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 font-bold rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Email</h4>
                      <p className="text-gray-600 mt-1">bookings@heeraitravels.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 font-bold rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Working Hours</h4>
                      <p className="text-gray-600 mt-1">24x7 Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col justify-center">
            <div className="mb-8">
               <h3 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
               <p className="text-gray-500 text-lg">Fill out the form below and we securely aim to reply within an hour.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" required placeholder="+91 1234567890" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows="5" required placeholder="How can we help you today?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold rounded-xl hover:shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all duration-300 text-lg flex items-center justify-center gap-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
