import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface PageFooterProps {
  showBackgroundImage?: boolean;
}

export default function PageFooter({ showBackgroundImage = false }: PageFooterProps) {
  return (
    <footer
      className="border-t border-[#21BFFF]/20 py-12 sm:py-14 lg:py-16 px-3 sm:px-4 lg:px-8 mt-8 sm:mt-12 lg:mt-20 relative overflow-hidden"
      style={
        showBackgroundImage
          ? {
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2Fd8fb8e39730349a69a3d84222866c7e4?format=webp&width=800)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      {showBackgroundImage && <div className="absolute inset-0 bg-black/70 -z-10" />}
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
                    href="/portfolio"
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
  );
}
