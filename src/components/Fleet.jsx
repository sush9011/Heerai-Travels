import { Users, Briefcase, Wind, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Fleet() {
  const cars = [
    {
      name: "Hatchback",
      models: "Swift, Baleno, i20",
      price: "₹10/km",
      img: "https://imgd.aeplcdn.com/1056x594/n/zill3ra_1429634.jpg?q=80",
      seats: 4,
      bags: 2,
      badge: "Economical",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      name: "Sedan",
      models: "Dzire, Etios, Aura",
      price: "₹12/km",
      img: "https://wallpapers.com/images/hd/suzuki-dzire-2022-sherwood-brown-y5e1vukdf48ljnb0.jpg",
      seats: 4,
      bags: 3,
      badge: "Most Popular",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "SUV / MPV",
      models: "Innova Crysta, Ertiga",
      price: "₹15/km",
      img: "https://www.carblogindia.com/wp-content/uploads/2020/10/2021-Toyota-Innova-Crysta-facelift-white-studio.jpg",
      seats: 6,
      bags: 4,
      badge: "Family Choice",
      badgeColor: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">
            Vehicle Options
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Premium Fleet
          </h3>
          <p className="text-gray-600 text-lg">
            Choose from our wide variety of immaculately maintained cars tailored to suit your specific travel needs and budget.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col"
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full z-10 shadow-sm backdrop-blur-md ${car.badgeColor}`}>
                {car.badge}
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{car.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{car.models}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Starting At</p>
                    <p className="text-xl font-bold text-blue-700">{car.price}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-5"></div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600 mb-6 flex-1">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-blue-500" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-blue-500" />
                    <span>{car.bags} Luggage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind size={16} className="text-blue-500" />
                    <span>A/C Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-blue-500" />
                    <span>Sanitized</span>
                  </div>
                </div>

                {/* Button */}
                <Link to={`/book?car=${encodeURIComponent(car.name)}`} className="w-full block text-center bg-gray-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-gray-200 hover:border-blue-600 font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-sm active:scale-[0.98]">
                  Book {car.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}