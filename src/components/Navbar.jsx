import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 shadow-md sticky top-0 bg-white z-[99]">
      {/* Logo */}
      <img src='/images/logo.png' alt="Logo" className="h-8 md:h-10" />

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-900 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-900 transition-colors">About</Link>
        <Link to="/services" className="hover:text-blue-900 transition-colors">Services</Link>
        <Link to="/fleet" className="hover:text-blue-900 transition-colors">Fleet</Link>
        <Link to="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors">
          +91 9322900618
        </button>
        <button className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-all font-medium" onClick={() => {
          window.location.href = "/login";
        }}>
          Login
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="md:hidden flex items-center mb-1">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col items-center pt-8 pb-10 gap-6 transition-all duration-300 origin-top md:hidden
        ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-blue-900 w-full text-center py-1">Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-blue-900 w-full text-center py-1">About</Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-blue-900 w-full text-center py-1">Services</Link>
        <Link to="/fleet" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-blue-900 w-full text-center py-1">Fleet</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-blue-900 w-full text-center py-1">Contact</Link>
        
        <div className="flex flex-col gap-3 w-4/5 max-w-sm mt-4">
          <button className="w-full px-4 py-3 border border-gray-300 rounded-lg font-medium text-gray-800 active:bg-gray-50">
            +91 9322900618
          </button>
          <button className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-medium shadow-md active:bg-blue-800" onClick={() => {
            window.location.href = "/login";
          }}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}