import {
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Users,
  Award,
  TrendingUp,
  Search,
  Menu,
  X,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import AnimatedDots from "@/components/AnimatedDots";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#21BFFF]/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a
              href="#"
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
                href="/portfolio"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Portfolio
              </a>
              <a
                href="/contact-us"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
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
                href="/portfolio"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Portfolio
              </a>
              <a
                href="/contact-us"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Contact Us
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen pt-14 sm:pt-16 px-3 sm:px-4 lg:px-8 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 h-full">
          <AnimatedDots />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-b from-[#21BFFF]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-t from-[#570C95]/15 to-transparent rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10 w-full px-2 sm:px-4">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
            {/* Text Section */}
            <div className="hero-text-section">
              <p className="text-[#21BFFF] text-xs sm:text-sm font-bold tracking-widest mb-4 sm:mb-6">
                * IT SOLUTIONS *
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-6 leading-tight">
                Empowering Your{" "}
                <span className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                  Digital Vision
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Transform your ideas into reality with our innovative solutions.
                Let's create a vibrant online presence that stands out and
                drives success!
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                <button className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-bold text-xs sm:text-sm lg:text-lg hover:shadow-xl hover:shadow-[#21BFFF]/50 transition flex items-center justify-center gap-2 group">
                  Book An Appointment
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
                <div className="text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#21BFFF]">
                    500+
                  </p>
                  <p className="text-gray-400 text-xs sm:text-xs lg:text-sm">
                    Happy Clients
                  </p>
                </div>
                <div className="hidden sm:block h-10 sm:h-12 w-px bg-gradient-to-b from-[#21BFFF] to-transparent" />
                <div className="text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#21BFFF]">
                    98%
                  </p>
                  <p className="text-gray-400 text-xs sm:text-xs lg:text-sm">
                    Success Rate
                  </p>
                </div>
              </div>

              {/* Image under Fun Facts / Happy Clients */}
              <div className="mt-8 flex justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2Fedc8659797b04427bf074cf1327423c1?format=webp&width=1200"
                  alt="Fun facts illustrative"
                  className="w-full max-w-4xl rounded-lg object-cover shadow-md"
                />
              </div>
            </div>

            {/* Image Section */}
            <div className="hero-image-section relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F993004ca17a64c4995496305eee3c3eb%2F1a420b9415dd4ea193cf56c123ebfd45?format=webp&width=800"
                alt="Digital Marketing Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-[#21BFFF] text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4">
              * SERVICES *
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 lg:mb-6">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-2">
              Comprehensive Services Designed to Elevate Your Brand!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              {
                icon: Zap,
                title: "Web Development",
                description:
                  "Transform your ideas into stunning websites with our expert web development services. From sleek designs to seamless functionality, we bring your vision to life!",
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                description:
                  "Transform your brand with our expert digital marketing expertise. We create impactful strategies that drive measurable results and target audience effectively!",
              },
              {
                icon: Shield,
                title: "Shopify/ E-Commerce",
                description:
                  "Create a stunning Shopify store that boosts sales. From intuitive design to seamless functionality, we transform your e-commerce vision to life!",
              },
              {
                icon: Rocket,
                title: "Apps Development",
                description:
                  "Craft intuitive and engaging mobile apps that enhance user experience and drive engagement. We turn your app vision into reality with cutting-edge technology and design!",
              },
              {
                icon: Award,
                title: "SEO Services",
                description:
                  "Elevate your website's ranking and attract targeted traffic with our SEO strategies. We optimize your online presence for sustainable growth!",
              },
              {
                icon: Users,
                title: "Graphic Designing",
                description:
                  "Create stunning visuals that capture attention and convey your message effectively. We transform your ideas into captivating designs that lasting impact!",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 lg:p-7 rounded-xl bg-[#221040]/50 border border-[#21BFFF]/20 hover:border-[#21BFFF]/50 hover:bg-[#221040]/80 transition"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#21BFFF] to-[#570C95] rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:shadow-lg group-hover:shadow-[#21BFFF]/50 transition">
                  <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-[#21BFFF] text-xs sm:text-sm font-semibold mt-3 inline-flex items-center gap-2 hover:gap-3 transition"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { number: "750+", label: "Finished Projects", icon: Award },
              { number: "23+", label: "Created Jobs", icon: Users },
              { number: "200+", label: "Happy Customers", icon: Rocket },
              { number: "28+", label: "Years Of Experience", icon: Shield },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 lg:p-8 rounded-xl bg-[#221040]/50 border border-[#21BFFF]/20 text-center hover:border-[#21BFFF]/50 transition group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#21BFFF] to-[#570C95] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#21BFFF]/50 transition">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#21BFFF] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2F8fba583c60d24e17a53fe53c675052a9?format=webp&width=800)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 -z-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-[#21BFFF] text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4">
              * TESTIMONIALS *
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
              Customers Testimonials
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="p-8 sm:p-10 lg:p-12 rounded-xl bg-[#221040]/50 border border-[#21BFFF]/20 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#21BFFF] to-[#570C95] flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">😊</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg italic mb-6 sm:mb-8 leading-relaxed">
                  "Hypernexis has transformed my online experience! Their
                  services are top-notch and incredibly user-friendly."
                </p>
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#21BFFF] text-lg sm:text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8 relative"
        id="portfolio"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#21BFFF]/10 to-[#570C95]/10 rounded-3xl blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 lg:mb-6">
            Let's Work Together To Make Your Business
            <span className="block bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
              Successful!
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-10">
            Join 500+ successful brands that are already growing with HyperNexis
          </p>
          <button className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3 rounded-lg font-bold text-xs sm:text-sm lg:text-base hover:shadow-xl hover:shadow-[#21BFFF]/50 transition flex items-center justify-center gap-2 group mx-auto">
            Get Started Today
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition" />
          </button>
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
                      href="#"
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
                      href="#services"
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
