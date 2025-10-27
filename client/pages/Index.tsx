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
            <span className="text-lg sm:text-xl font-bold text-white">HyperNexis</span>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Home</a>
              <a href="#services" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Services</a>
              <a href="#portfolio" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Portfolio</a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Contact Us</a>
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
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-3 pb-4 border-t border-[#21BFFF]/10 pt-4">
              <a href="#" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Home</a>
              <a href="#services" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Services</a>
              <a href="#portfolio" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Portfolio</a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-[#21BFFF] transition">Contact Us</a>
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
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mt-4 sm:mt-6 md:mt-10 mb-3 sm:mb-6 leading-tight">
                Empowering your{" "}
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
                  Start Your Journey
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
      <section id="services" className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3 lg:mb-4">
              What We{" "}
              <span className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto px-2">
              Comprehensive digital marketing solutions tailored to your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              {
                icon: Zap,
                title: "SEO Optimization",
                description:
                  "Boost your online visibility with our proven SEO strategies",
              },
              {
                icon: Shield,
                title: "Brand Protection",
                description:
                  "Safeguard your reputation with comprehensive brand monitoring",
              },
              {
                icon: TrendingUp,
                title: "Growth Marketing",
                description:
                  "Scale your business with data-driven marketing campaigns",
              },
              {
                icon: Users,
                title: "Social Management",
                description:
                  "Engage your audience across all social media platforms",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-4 sm:p-5 lg:p-6 rounded-xl bg-[#221040]/40/50 border border-[#21BFFF]/20 hover:border-[#21BFFF]/50 hover:bg-[#221040]/40/80 transition"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#21BFFF] to-[#570C95] rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#21BFFF]/50 transition">
                  <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3 lg:mb-4">
              What Clients{" "}
              <span className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto px-2">
              Success stories from businesses we've transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, Tech Innovations",
                testimonial:
                  "HyperNexis transformed our online presence. Our traffic increased by 350% in just 6 months!",
                stars: 5,
              },
              {
                name: "Michael Chen",
                role: "Founder, E-Commerce Plus",
                testimonial:
                  "The team's expertise and dedication are unmatched. Our revenue has tripled since working with them.",
                stars: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, Global Brands",
                testimonial:
                  "Professional, responsive, and results-driven. I highly recommend HyperNexis to any growing business.",
                stars: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 lg:p-8 rounded-xl bg-[#221040]/40/50 border border-[#21BFFF]/20 hover:border-[#21BFFF]/50 transition"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <span key={i} className="text-[#21BFFF] text-sm sm:text-base">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <p className="font-bold text-white text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-[#21BFFF]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#21BFFF]/10 to-[#570C95]/10 rounded-3xl blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 text-center px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 lg:mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8">
            Join 500+ successful brands that are already growing with HyperNexis
          </p>
          <button className="bg-gradient-to-r from-[#21BFFF] to-[#570C95] text-black px-4 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-lg font-bold text-xs sm:text-sm lg:text-lg hover:shadow-xl hover:shadow-[#21BFFF]/50 transition flex items-center justify-center gap-2 group mx-auto">
            Start Your Free Consultation
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-[#21BFFF]/20 py-8 sm:py-10 lg:py-12 px-3 sm:px-4 lg:px-8 mt-8 sm:mt-12 lg:mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                HyperNexis
              </h4>
              <p className="text-gray-400 text-xs sm:text-xs lg:text-sm">
                Transforming businesses through digital excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">Services</h4>
              <ul className="space-y-1 sm:space-y-1.5 text-gray-400 text-xs sm:text-xs lg:text-sm">
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#21BFFF] transition"
                  >
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#21BFFF] transition"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#21BFFF] transition"
                  >
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#21BFFF] transition"
                  >
                    Brand Strategy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">Company</h4>
              <ul className="space-y-1 sm:space-y-1.5 text-gray-400 text-xs sm:text-xs lg:text-sm">
                <li>
                  <a href="#" className="hover:text-[#21BFFF] transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-[#21BFFF] transition"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#21BFFF] transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#21BFFF] transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-1 sm:space-y-1.5 text-gray-400 text-xs sm:text-xs lg:text-sm">
                <li>
                  Email:{" "}
                  <span className="text-[#21BFFF]">hello@hypernexis.com</span>
                </li>
                <li>
                  Phone:{" "}
                  <span className="text-[#21BFFF]">+1 (555) 123-4567</span>
                </li>
                <li className="pt-4 flex gap-4">
                  <a href="#" className="hover:text-[#21BFFF] transition">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-[#21BFFF] transition">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-[#21BFFF] transition">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#21BFFF]/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs gap-2 sm:gap-0">
            <p>&copy; 2024 HyperNexis. All rights reserved.</p>
            <div className="flex gap-3 sm:gap-4 lg:gap-6 mt-3 sm:mt-0">
              <a href="#" className="hover:text-[#21BFFF] transition text-xs sm:text-xs">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#21BFFF] transition text-xs sm:text-xs">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
