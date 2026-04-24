import React from "react";
import { Users, Briefcase, Wind, CheckCircle, ShieldCheck, Map, CreditCard, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FleetDetails() {
  const cars = [
    {
      id: "hatchback",
      name: "Hatchback",
      description: "Perfect for solo travelers or couples looking for a budget-friendly ride around the city.",
      models: "Maruti Swift, Hyundai i20, Toyota Glanza",
      price: "₹10/km",
      img: "https://imgd.aeplcdn.com/1056x594/n/zill3ra_1429634.jpg?q=80",
      seats: 4,
      bags: 2,
      ac: true,
      badge: "Economical",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      id: "sedan",
      name: "Premium Sedan",
      description: "Travel in comfort and style. Ideal for business trips, small families, and outstation journeys.",
      models: "Maruti Dzire, Honda City, Hyundai Verna",
      price: "₹12/km",
      img: "https://wallpapers.com/images/hd/suzuki-dzire-2022-sherwood-brown-y5e1vukdf48ljnb0.jpg",
      seats: 4,
      bags: 3,
      ac: true,
      badge: "Most Popular",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "suv",
      name: "SUV / MPV",
      description: "Spacious seating and superior comfort. The perfect choice for family vacations and group trips.",
      models: "Toyota Innova Crysta, Maruti Ertiga, Tata Safari",
      price: "₹15/km",
      img: "https://www.carblogindia.com/wp-content/uploads/2020/10/2021-Toyota-Innova-Crysta-facelift-white-studio.jpg",
      seats: 6,
      bags: 4,
      ac: true,
      badge: "Family Choice",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      id: "tempo",
      name: "Traveller",
      description: "Luxury group travel made easy. Equipped with pushback seats and excellent air conditioning.",
      models: "Force Traveller 12-Seater, 17-Seater",
      price: "₹22/km",
      img: "https://tse4.mm.bing.net/th/id/OIP.JMH9gsNqV-6UPY5sTWwsxgHaFt?rs=1&pid=ImgDetMain&o=7&rm=3",
      seats: 12,
      bags: 8,
      ac: true,
      badge: "Group Tours",
      badgeColor: "bg-orange-100 text-orange-700",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Banner */}
      <section className="bg-blue-950 text-white py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Premium Fleet</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer a diverse range of immaculately maintained vehicles customized for your journey, promising safety, comfort, and reliability everywhere you go.
          </p>
        </div>
      </section>

      {/* Main Fleet Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 w-full">
        <div className="space-y-12">
          {cars.map((car, index) => (
            <div 
              key={car.id} 
              className={`bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col lg:flex-row transition-transform hover:shadow-xl duration-300
                ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
              `}
            >
              {/* Image Column */}
              <div className="lg:w-1/2 relative bg-gray-100 min-h-[300px]">
                <div className={`absolute top-6 ${index % 2 !== 0 ? 'right-6' : 'left-6'} px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-full shadow-md z-10 ${car.badgeColor}`}>
                  {car.badge}
                </div>
                <img src={car.img} alt={car.name} className="w-full h-full object-cover object-center" />
              </div>

              {/* Details Column */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">{car.name}</h3>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold text-gray-500 uppercase">Rate</p>
                    <p className="text-2xl font-bold text-blue-700">{car.price}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {car.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Popular Models</h4>
                  <p className="font-semibold text-gray-800 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 inline-block">
                    {car.models}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-50/0 hover:border-blue-100 transition-colors">
                    <Users size={24} className="text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-50/0 hover:border-blue-100 transition-colors">
                    <Briefcase size={24} className="text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">{car.bags} Bags</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-50/0 hover:border-blue-100 transition-colors">
                    <Wind size={24} className="text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">A/C Ready</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-50/0 hover:border-blue-100 transition-colors">
                    <CheckCircle size={24} className="text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">Sanitized</span>
                  </div>
                </div>

                <Link to="/" className="w-fit inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:filter hover:brightness-110 transition-all duration-300">
                  Book Now <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Factors / Policy Section */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Safe & Secure</h3>
            <p className="text-gray-600">All our drivers are background verified with high ratings to ensure supreme safety for your journey.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 -transform rotate-3">
              <Map size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Anytime, Anywhere</h3>
            <p className="text-gray-600">From local city drops to inter-state travel, we provide cabs exactly where and when you need them.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <CreditCard size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Billing</h3>
            <p className="text-gray-600">No hidden costs! Get accurate estimates for your journey before you sit inside the cab.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
