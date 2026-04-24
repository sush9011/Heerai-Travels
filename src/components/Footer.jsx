export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 pt-10 pb-6 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Heerai Tours & Travels
          </h2>
          <p className="mt-3 text-sm">
            Reliable and affordable cab services across India. 
            Book your ride anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>One Way Trip</li>
            <li>Round Trip</li>
            <li>Airport Pickup</li>
            <li>Outstation Travel</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Pune, Maharashtra</p>
          <p className="text-sm mt-1">📞 +91 9322900618</p>
          <p className="text-sm mt-1">✉️ info@heeraitravels.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2026 Heerai Tours & Travels. All rights reserved.
      </div>
      
    </footer>
  );
}