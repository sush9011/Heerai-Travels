import BookingForm from "../components/BookingForm";

export default function Book() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-blue-950 to-blue-900 z-0 rounded-b-[4rem] md:rounded-b-[8rem] shadow-xl"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-md">
            Complete Your Booking
          </h1>
          <p className="text-blue-100 text-lg max-w-lg mx-auto">
            Secure your ride in just a few clicks. We ensure safe, comfortable, and timely travel.
          </p>
        </div>
        
        <div className="w-full flex justify-center mt-4">
          <BookingForm />
        </div>
      </div>
      
    </div>
  );
}
