import { Shield, Target, Users, MapPin, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="transparent" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">About Heerai Travels</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted travel partner setting new standards in safety, comfort, and reliability for all your journeys.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
            <p className="text-gray-500 font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15k+</h3>
            <p className="text-gray-500 font-medium">Happy Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-500 font-medium">Premium Cars</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-500 font-medium">Support</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
              <Target size={16} /> Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Setting the standard in transportation</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Heerai Travels, we believe that the journey is just as important as the destination. We strive to provide unparalleled travel experiences that combine luxury, safety, and punctuality. Our fleet of modern, meticulously maintained vehicles ensures you ride in style, while our professional chauffeurs guarantee peace of mind every step of the way.
            </p>
            <ul className="space-y-4 pt-4 text-gray-700 font-medium">
              <li className="flex items-center gap-3"><CheckCircle className="text-green-500" size={20} /> Uncompromising Safety Standards</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-green-500" size={20} /> Transparent & Fair Pricing</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-green-500" size={20} /> Customer-First Approach</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" alt="Premium Chauffeur Service" className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that drive us to deliver excellence every single day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">You can count on us to be there when you need us. On-time pickups and professionally planned routes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professionalism</h3>
              <p className="text-gray-600">Our chauffeurs are highly trained, courteous, and dedicated to providing a premium experience.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">We deeply understand the local terrain, ensuring you take the fastest, safest, and most scenic routes possible.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
