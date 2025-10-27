import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
  Menu,
  X,
  Search,
  ArrowRight,
} from "lucide-react";

export default function ContactUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#21BFFF]/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2Fa51a8a05eccd4a50b67a510563e49ad1?format=webp&width=800"
                alt="HyperNexis logo"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="/"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Home
              </a>
              <a
                href="/#services"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Services
              </a>
              <a
                href="/#portfolio"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Portfolio
              </a>
              <a href="/contact-us" className="text-sm text-[#21BFFF]">
                Contact Us
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex p-2 hover:text-[#21BFFF] transition">
                <Search className="w-5 h-5 text-gray-300" />
              </button>
              <button className="hidden sm:flex w-10 h-10 rounded-lg bg-[#221040] border border-[#21BFFF]/20 items-center justify-center hover:border-[#21BFFF]/50 transition" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-[#21BFFF]"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-3 pb-4 border-t border-[#21BFFF]/10 pt-4">
              <a
                href="/"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Home
              </a>
              <a
                href="/#services"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Services
              </a>
              <a
                href="/#portfolio"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Portfolio
              </a>
              <a
                href="/contact-us"
                className="text-sm text-[#21BFFF] transition"
              >
                Contact Us
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Page Title */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 lg:px-8 border-b border-[#21BFFF]/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-gray-400">
            <a href="/" className="hover:text-[#21BFFF] transition">
              Home
            </a>
            <span>/</span>
            <span className="text-[#21BFFF]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-12 sm:mb-16">
            Book An Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="text-white text-sm font-semibold mb-2 block">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:border-[#21BFFF] focus:outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-white text-sm font-semibold mb-2 block">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:border-[#21BFFF] focus:outline-none transition"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm font-semibold mb-2 block">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:border-[#21BFFF] focus:outline-none transition"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="text-white text-sm font-semibold mb-2 block">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:border-[#21BFFF] focus:outline-none transition"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="bg-[#21BFFF] text-black px-6 py-3 rounded font-bold hover:bg-[#21BFFF]/90 transition"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 border-t border-[#21BFFF]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-12 sm:mb-16">
            Location
          </h2>

          <div className="bg-[#221040]/50 border border-[#21BFFF]/20 rounded-xl p-6 sm:p-8 lg:p-10">
            <p className="text-white text-base sm:text-lg font-semibold mb-6">
              Peoples Colony # 1, D Ground, Faisalabad.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-[#21BFFF] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Email:</p>
                  <p className="text-white">hypernexis@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-[#21BFFF] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Phone:</p>
                  <p className="text-white">+923308030163</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 border-t border-[#21BFFF]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-12 sm:mb-16">
            Find Us On Google Maps
          </h2>

          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="HyperNexis Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7289622123003!2d72.96167!3d31.41764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392f46b5d5b5d5b5%3A0x5b5b5b5b5b5b5b5b!2sFaisalabad%2C%20Punjab!5e0!3m2!1sen!2spk!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-[#21BFFF]/20 py-12 sm:py-14 lg:py-16 px-3 sm:px-4 lg:px-8 mt-8 sm:mt-12 lg:mt-20 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2Fd8fb8e39730349a69a3d84222866c7e4?format=webp&width=800)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Left Section - Subscribe */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2Fa51a8a05eccd4a50b67a510563e49ad1?format=webp&width=800"
                  alt="HyperNexis logo"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <p className="text-white text-xs sm:text-sm mb-6 leading-relaxed">
                Hypernexis where innovation meets exceptional experiences. Join
                us and elevate your online journey!
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-white text-sm mb-3">
                  Subscribe For More
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-3 py-2 text-xs sm:text-sm bg-gray-700/50 text-white placeholder-gray-400 rounded border border-gray-600 focus:border-[#21BFFF] focus:outline-none transition"
                  />
                  <button className="px-4 py-2 bg-[#21BFFF] text-black font-bold text-xs sm:text-sm rounded hover:bg-[#21BFFF]/90 transition">
                    Subscribe
                  </button>
                </div>
                <p className="text-white text-xs mt-2">
                  *We Will Not Share Your Personal Info
                </p>
              </div>
            </div>

            {/* Right Section - 3 Columns */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-4">
                  Find Us
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm">
                  <li className="flex gap-2 items-center">
                    <Linkedin className="w-4 h-4 text-[#21BFFF] flex-shrink-0" />
                    <span className="text-white">LinkedIn</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Facebook className="w-4 h-4 text-[#21BFFF] flex-shrink-0" />
                    <span className="text-white">Facebook</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Twitter className="w-4 h-4 text-[#21BFFF] flex-shrink-0" />
                    <span className="text-white">Instagram</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-4">
                  Menus
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-white text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#21BFFF]">-</span>
                    <a
                      href="/"
                      className="text-white hover:text-[#21BFFF] transition"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#21BFFF]">-</span>
                    <a
                      href="/#services"
                      className="text-white hover:text-[#21BFFF] transition"
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#21BFFF]">-</span>
                    <a
                      href="/#services"
                      className="text-white hover:text-[#21BFFF] transition"
                    >
                      SERVICES
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#21BFFF]">-</span>
                    <a
                      href="/contact-us"
                      className="text-white hover:text-[#21BFFF] transition"
                    >
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-4">
                  Contact Information
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm">
                  <li className="flex gap-2 items-start">
                    <Mail className="w-4 h-4 text-[#21BFFF] flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:hypernexis@gmail.com"
                      className="text-white hover:text-[#21BFFF] transition"
                    >
                      hypernexis@gmail.com
                    </a>
                  </li>
                  <li className="flex gap-2 items-start">
                    <MapPin className="w-4 h-4 text-[#21BFFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-xs">
                      Raypid Mall Civic Govt Pvt, Peshawar, Punjab 35000
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Phone className="w-4 h-4 text-[#21BFFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white">+923308314911</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#21BFFF]/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-white text-xs gap-4 sm:gap-6">
              <p>&copy; 2024 Hypernexis, All Rights Reserved.</p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-[#21BFFF] to-[#570C95] rounded-full flex items-center justify-center text-white hover:shadow-xl hover:shadow-[#21BFFF]/50 transition z-40">
        <ArrowRight className="w-5 h-5 rotate-90" />
      </button>
    </div>
  );
}
