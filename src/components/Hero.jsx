import { ShieldCheck, CarFront, Clock } from "lucide-react";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: "url('/src/assets/Hero.png')"
      }}
    >
      {/* 🔥 Dark Overlay (only small screens, for text legibility) */}
      <div className="absolute inset-0 bg-black/60 lg:hidden"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center w-full pb-10 lg:pb-0 z-10">
        
        {/* Booking Card */}
        <div className="w-full lg:w-[28rem] min-h-[450px] flex items-center mx-auto lg:mx-0 z-50 relative mt-10 lg:mt-0">
          <div className="w-full lg:absolute lg:left-0 lg:z-50">
            <BookingForm />
          </div>
        </div>

        {/* Right Content (Now on top for mobile) */}
        <div className="mt-8 lg:mb-50 lg:mt-0 lg:ml-20 max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white lg:text-blue-950 drop-shadow-md lg:drop-shadow-none">
            Travel Comfortably, Arrive Happily
          </h1>

          <p className="mb-6 text-base sm:text-lg text-gray-200 lg:text-gray-700 drop-shadow-md lg:drop-shadow-none">
            Reliable cab services for local, outstation & airport rides.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-100 lg:text-gray-800">
            
            <div className="flex items-center gap-1 bg-white/10 lg:bg-transparent px-3 py-1.5 rounded-full lg:px-0 lg:py-0">
              <ShieldCheck size={18} />
              <span>Safe</span>
            </div>

            <div className="flex items-center gap-1 bg-white/10 lg:bg-transparent px-3 py-1.5 rounded-full lg:px-0 lg:py-0">
              <CarFront size={18} />
              <span>Clean Cars</span>
            </div>

            <div className="flex items-center gap-1 bg-white/10 lg:bg-transparent px-3 py-1.5 rounded-full lg:px-0 lg:py-0">
              <Clock size={18} />
              <span>On-time</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}