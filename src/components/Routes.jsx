import { MapPin, ArrowRight, Compass, ShieldCheck } from "lucide-react";

export default function Routes() {
  const routes = [
    { 
      from: "Pune", 
      to: "Mumbai", 
      price: "₹2,999", 
      img: "/src/assets/Mumbai.jpg",
      duration: "Express Route"
    },
    { 
      from: "Pune", 
      to: "Nashik", 
      price: "₹2,199", 
      img: "/src/assets/Nashik.jpg",
      duration: "Scenic Drive" 
    },
    { 
      from: "Pune", 
      to: "Karnataka", 
      price: "₹3,199", 
      img: "/src/assets/Karnataka.jpg",
      duration: "Highway Travel"
    },
  ];

  return (  
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <h2 className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">
              <Compass size={18} /> Explore Destinations
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Our Most Popular Routes
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm md:text-right hidden md:block">
            Enjoy safe, sanitized, and comfortable intercity travels with our experienced outstation chauffeurs.
          </p>
        </div>

        {/* Routes Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((r, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              
              {/* Image with Overlay */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10 transition-opacity duration-500"></div>
                <img 
                  src={r.img} 
                  alt={`${r.from} to ${r.to}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                
                {/* Image Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Safe Travel
                  </span>
                </div>

                {/* Bottom Route Details overlaying Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-blue-300 font-semibold text-sm mb-2">{r.duration}</p>
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-300 uppercase tracking-widest">From</span>
                      <span className="text-xl font-bold">{r.from}</span>
                    </div>
                    
                    <div className="flex bg-white/20 p-2 rounded-full backdrop-blur-sm mx-2">
                       <ArrowRight size={20} className="text-white" />
                    </div>

                    <div className="flex flex-col text-right">
                      <span className="text-xs text-gray-300 uppercase tracking-widest">To</span>
                      <span className="text-xl font-bold">{r.to}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Card Section */}
              <div className="p-6 bg-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Starting At</p>
                  <p className="text-2xl font-black text-gray-900">{r.price}</p>
                </div>
                
                <button className="bg-gray-50 hover:bg-blue-600 text-blue-700 hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 border border-gray-200 hover:border-blue-600 active:scale-95 shadow-sm">
                  Book Now
                </button>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}