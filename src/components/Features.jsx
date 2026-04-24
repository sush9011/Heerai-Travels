import { ShieldCheck, BadgeCheck, Headphones, IndianRupee } from "lucide-react";

export default function Features() {
  const data = [
    {
      title: "Best Price",
      icon: IndianRupee,
      desc: "Affordable rides with no hidden charges",
    },
    {
      title: "Verified Drivers",
      icon: BadgeCheck,
      desc: "Professional & trusted drivers",
    },
    {
      title: "Safe & Secure",
      icon: ShieldCheck,
      desc: "Your safety is our top priority",
    },
    {
      title: "24/7 Support",
      icon: Headphones,
      desc: "We’re here anytime you need us",
    },
  ];

  return (
    <section className="py-12 px-6 bg-linear-to-b from-white to-gray-50">
      
      {/* Single Container */}
      <div className="bg-white rounded-2xl shadow-sm px-6 py-5 flex flex-wrap md:flex-nowrap justify-between items-center gap-6">

        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center gap-4 flex-1 hover:bg-gray-50 p-2 rounded-lg transition">

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <Icon size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>
              </div>

              {/* Divider */}
              {index !== data.length - 1 && (
                <div className="hidden md:block h-10 w-px bg-gray-200 ml-6"></div>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}