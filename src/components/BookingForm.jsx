import { useMemo, useState, useCallback } from "react";

/* ---------- Reusable styles (outside component) ---------- */
const inputStyle =
  "w-full min-w-0 appearance-none px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 text-gray-700 placeholder-gray-400";

const btnPrimary =
  "w-full py-3 px-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold rounded-xl hover:shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

const btnSecondary =
  "w-full py-3 px-6 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:shadow-sm transition-all duration-300 active:scale-[0.98]";

/* ---------- Static data ---------- */
const CAR_OPTIONS = [
  { type: "Hatchback", icon: "🚗", desc: "Small & economical", seats: 4 },
  { type: "Sedan", icon: "🚕", desc: "Comfort & space", seats: 4 },
  { type: "SUV", icon: "🚙", desc: "Perfect for groups", seats: 6 },
];

const TRIP_TYPES = ["One Way", "Round Trip", "Airport"];

/* ---------- Small components ---------- */
function StepIndicator({ step }) {
  return (
    <div className="flex items-center justify-between mb-8 px-2">
      {[1, 2, 3].map((num, i) => (
        <div key={num} className="flex items-center w-full">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold transition-colors duration-300
            ${
              step >= num
                ? "bg-blue-900 text-white border-blue-900 shadow-md"
                : "bg-white border-gray-200 text-gray-400"
            }`}
          >
            {step > num ? "✓" : num}
          </div>

          {i < 2 && (
            <div
              className={`flex-1 h-1 mx-3 rounded-full transition-colors duration-500
              ${step > num ? "bg-blue-900" : "bg-gray-100"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function CarCard({ option, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.type)}
      className={`relative p-5 rounded-2xl border-2 transition-all duration-300 text-left
      ${
        active
          ? "bg-blue-50/50 border-blue-600 shadow-md ring-4 ring-blue-600/10 scale-[1.02]"
          : "bg-white border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm"
      }`}
      aria-pressed={active}
    >
      {active && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-0.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      <div className="text-4xl mb-3 text-center">{option.icon}</div>
      <h3 className={`text-lg font-bold text-center ${active ? "text-blue-900" : "text-gray-800"}`}>
        {option.type}
      </h3>
      <p className="text-xs text-gray-500 text-center mt-1">{option.desc}</p>
      <div className="mt-4 flex justify-center items-center gap-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg py-1">
        <span>👤</span> {option.seats} Seats
      </div>
    </button>
  );
}

/* ---------- Main component ---------- */
export default function BookingForm() {
  const [step, setStep] = useState(1);

  // single state object → fewer setters, cleaner updates
  const [form, setForm] = useState({
    tripType: "One Way",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    persons: "",
    address: "",
    car: "",
  });

  const setField = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const selectTripType = useCallback((type) => {
    setForm((prev) => ({ ...prev, tripType: type, pickup: "" }));
  }, []);

  /* ---------- Validation (memoized) ---------- */
  const isStep1Valid = useMemo(
    () => form.pickup && form.drop && form.date && form.time,
    [form.pickup, form.drop, form.date, form.time]
  );

  const isStep2Valid = useMemo(
    () => form.name && form.phone && form.email && form.persons,
    [form.name, form.phone, form.email, form.persons]
  );

  const isStep3Valid = useMemo(() => !!form.car, [form.car]);

  /* ---------- Derived UI ---------- */

  const title = useMemo(() => {
    if (step === 1) return "Plan Your Journey";
    if (step === 2) return "Passenger Details";
    if (step === 3) return "Select Your Ride";
    return "Booking Confirmed";
  }, [step]);

  const subtitle = useMemo(() => {
    if (step === 1) return "Tell us where you're going.";
    if (step === 2) return "Let us know who is traveling.";
    if (step === 3) return "Choose the perfect car for your trip.";
    return "Thank you for choosing Heerai Travels.";
  }, [step]);

  /* ---------- Handlers ---------- */
  const goNext = useCallback(() => setStep((s) => Math.min(3, s + 1)), []);
  const goBack = useCallback(() => setStep((s) => Math.max(1, s - 1)), []);

  return (
    <div
      className={`
        relative z-30
        bg-white/90 backdrop-blur-xl 
        p-6 sm:p-8 rounded-3xl
        border border-white/40 
        
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        
        transition-all duration-500 ease-in-out mx-auto
        
        overflow-hidden
        w-full
        ${step === 1 && "md:w-[28rem]"}
        ${step === 2 && "md:w-[42rem]"}
        ${step === 3 && "md:w-[56rem]"}
        ${step === 4 && "md:w-[28rem]"}
        
        ${step === 2 && "scale-[1.01]"}
        ${step === 3 && "scale-[1.02]"}
        ${step === 4 && "scale-[1.00]"}
      `}
    >
      {step !== 4 && (
        <>
          <StepIndicator step={step} />
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
          </div>
        </>
      )}

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          {/* Tabs */}
          <div className="flex bg-gray-100/80 p-1.5 rounded-xl">
            {TRIP_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => selectTripType(type)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300
                ${
                  form.tripType === type
                    ? "bg-white text-blue-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-200/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            {form.tripType === "Airport" ? (
              <select
                value={form.pickup}
                onChange={(e) => setField("pickup", e.target.value)}
                className={inputStyle}
              >
                <option value="" disabled>
                  Select Airport
                </option>
                <option>Pune Airport (PNQ)</option>
                <option>Mumbai Airport (BOM)</option>
              </select>
            ) : (
              <input
                value={form.pickup}
                onChange={(e) => setField("pickup", e.target.value)}
                placeholder="Pickup Location"
                className={inputStyle}
              />
            )}

            <input
              value={form.drop}
              onChange={(e) => setField("drop", e.target.value)}
              placeholder="Drop Location"
              className={inputStyle}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                value={form.date}
                onChange={(e) => setField("date", e.target.value)}
                className={inputStyle}
              />
              <input
                type="time"
                value={form.time}
                onChange={(e) => setField("time", e.target.value)}
                className={inputStyle}
              />
            </div>
          </div>

          <button onClick={goNext} disabled={!isStep1Valid} className={btnPrimary}>
            Continue to Details →
          </button>
        </div>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <div className="animate-fade-in space-y-6 md:space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Full Name"
              className={inputStyle}
            />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="Phone Number"
              className={inputStyle}
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="Email"
              className={inputStyle}
            />
            <input
              type="number"
              min="1"
              value={form.persons}
              onChange={(e) => setField("persons", e.target.value)}
              placeholder="Passengers"
              className={inputStyle}
            />
            <input
              value={form.address}
              onChange={(e) => setField("address", e.target.value)}
              placeholder="Address / Notes"
              className={`${inputStyle} md:col-span-2`}
            />
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <button onClick={goBack} className={btnSecondary}>
              ← Back
            </button>
            <button onClick={goNext} disabled={!isStep2Valid} className={btnPrimary}>
              Choose Car →
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 3 ================= */}
      {step === 3 && (
        <div className="animate-fade-in space-y-6 md:space-y-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAR_OPTIONS.map((c) => (
              <CarCard
                key={c.type}
                option={c}
                active={form.car === c.type}
                onSelect={(val) => setField("car", val)}
              />
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <button onClick={goBack} className={btnSecondary}>
              ← Back
            </button>
            <button onClick={() => setStep(4)} disabled={!isStep3Valid} className={btnPrimary}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 4 ================= */}
      {step === 4 && (
        <div className="flex flex-col items-center justify-center py-12 transition-all duration-500 min-h-[350px]">
          <style>{`
            .gpay-circle { animation: gcirclePop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; transform-origin: center; }
            .gpay-check { stroke-dasharray: 48; stroke-dashoffset: 48; animation: gstroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards; }
            
            @keyframes gcirclePop { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            @keyframes gstroke { 100% { stroke-dashoffset: 0; } }
            
            .delay-text { animation: gfadeInUp 0.5s ease-out 0.6s both; }
            @keyframes gfadeInUp { 0% { opacity: 0; transform: translateY(15px); } 100% { opacity: 1; transform: translateY(0); } }
          `}</style>

          <svg className="w-28 h-28 mb-8" viewBox="0 0 52 52">
            <circle className="gpay-circle" cx="26" cy="26" r="25" fill="#2563eb" />
            <path className="gpay-check" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
          
          <div className="delay-text text-center space-y-4 w-full">
            <h3 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h3>
            <p className="text-gray-500 text-base max-w-sm mx-auto">Your ride has been successfully booked. We will contact you shortly.</p>
            <button 
              onClick={() => {
                setStep(1);
                setForm({
                  tripType: "One Way", pickup: "", drop: "", date: "", time: "", name: "", phone: "", email: "", persons: "", address: "", car: ""
                });
              }} 
              className={btnPrimary + " mt-8 max-w-xs mx-auto block"}
            >
              Book Another Ride
            </button>
          </div>
        </div>
      )}
    </div>
  );
}