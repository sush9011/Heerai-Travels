import { Car, Plane, Briefcase, Map, Star, CalendarHeart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const servicesList = [
  {
    id: 1,
    title: "Local Sightseeing & City Rides",
    desc: "Explore the city at your own pace. Hire a cab for an entire day to visit historical spots, markets, and local attractions safely and comfortably.",
    icon: <Map className="text-blue-500" size={32} />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Airport Transfers",
    desc: "Never miss a flight. We track your flight schedules to ensure timely pickups and drop-offs to all major city airports.",
    icon: <Plane className="text-purple-500" size={32} />,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    color: "bg-purple-50"
  },
  {
    id: 3,
    title: "Outstation Trips",
    desc: "Planning a weekend getaway? We offer reliable multi-day outstation cabs equipped for highway driving with experienced chauffeurs.",
    icon: <Car className="text-emerald-500" size={32} />,
    image: "https://media.istockphoto.com/id/1166495580/photo/nature.jpg?s=612x612&w=0&k=20&c=87BBAjxAuX2f1z5pY_U2N4g7KfVM78d5T4RPA9r9yuc=",
    color: "bg-emerald-50"
  },
  {
    id: 4,
    title: "Corporate Travels",
    desc: "Impress your clients. Smooth and professional business travel management for executives and team shuttles.",
    icon: <Briefcase className="text-amber-500" size={32} />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    color: "bg-amber-50"
  },
  {
    id: 5,
    title: "Wedding & Events",
    desc: "Luxury cars for your big day. We ensure the bride, groom, and guests arrive in style with our premium fleet.",
    icon: <CalendarHeart className="text-rose-500" size={32} />,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    color: "bg-rose-50"
  },
  {
    id: 6,
    title: "Premium Luxury Rides",
    desc: "Experience ultimate comfort in our high-end SUVs and Sedans, available on request for VIP travel needs.",
    icon: <Star className="text-indigo-500" size={32} />,
    image: "https://media.istockphoto.com/id/2147522695/photo/professional-chauffeur-opening-luxury-car-door-for-service.jpg?s=612x612&w=0&k=20&c=a-vEarLqJjqpzFr-aXViQzzIYgq67501IvJ-iXP2Xzw=",
    color: "bg-indigo-50"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Services Header */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Premium Services
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From quick airport drops to luxury outstation vacations, Heerai Travels provides the perfect transport solution for every occasion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((svc) => (
              <div 
                key={svc.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className={`w-14 h-14 ${svc.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                    {svc.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group/btn"
                  >
                    Book This Service 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTE Banner */}
      <section className="bg-blue-900 py-16">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Book your ride online in less than 2 minutes and experience hassle-free travel.</p>
            <Link 
              to="/" 
              className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Go to Booking Form
            </Link>
         </div>
      </section>

    </div>
  );
}
