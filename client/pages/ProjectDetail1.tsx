import { Menu, X, Search, ArrowRight, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import PageFooter from "@/components/PageFooter";

export default function ProjectDetail1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Page Title */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 lg:px-8 border-b border-[#21BFFF]/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Barber Salon
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <a href="/portfolio" className="hover:text-[#21BFFF] transition">
              Portfolio
            </a>
            <span>/</span>
            <span className="text-[#21BFFF]">Barber Salon</span>
          </div>
        </div>
      </div>

      {/* Project Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F516737e8775e484aa78bfadffa78b91e%2Fc9d6eee60f574985816984a3cd73c2e1?format=webp&width=800"
              alt="Hollywood Hair Salon"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-12">
            <div>
              <h3 className="text-sm font-bold text-[#21BFFF] mb-3 tracking-widest">
                PROJECT DETAILS
              </h3>
              <p className="text-white text-sm">Hollywood Hair Salon</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#21BFFF] mb-3 tracking-widest">
                CLIENT
              </h3>
              <p className="text-white text-sm">Premium Hair Salon</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#21BFFF] mb-3 tracking-widest">
                SERVICES
              </h3>
              <p className="text-white text-sm">Web Design, UI/UX</p>
            </div>
          </div>

          {/* Project Objective Section */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-12 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Project Objective</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                The Hollywood Hair Saloon website should therefore be a contemporary, easy-to-use website that shows the services , the stylists, and the saloon’s uniqueness.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Our goal was that the website would center around the client's experience by using a clean, easy-to-follow layout with all their focus on booking and offers and sales. This would be very essential in achieving aesthetic design as well as functionality in trying to summarize the brand of the saloon.
              </p>

              <div className="mt-6 flex justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2Fccf05ee3093d460e8bc4c51dffa4ff8c?format=webp&width=800"
                  alt="Project objective illustrative"
                  className="w-full max-w-2xl rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] h-24 flex items-center justify-between">
                <div>
                  <h4 className="text-xs text-[#21BFFF] font-bold tracking-widest mb-2">CLIENT</h4>
                  <p className="text-white font-semibold">Muhammad Ali</p>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2Fea76f77b8c3b4ac880da4afd19194acb?format=webp&width=800" alt="client icon" className="w-9 h-9 object-contain" />
              </div>
              <div className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] h-24 flex items-center justify-between">
                <div>
                  <h4 className="text-xs text-[#21BFFF] font-bold tracking-widest mb-2">CATEGORY</h4>
                  <p className="text-white font-semibold">Web Development</p>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F82c793dd8589407e8afff40a5b3d9ee7?format=webp&width=800" alt="category icon" className="w-9 h-9 object-contain" />
              </div>
              <div className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] h-24 flex flex-col justify-center">
                <h4 className="text-xs text-[#21BFFF] font-bold tracking-widest mb-2">DATE</h4>
                <p className="text-white font-semibold">30/1/2022</p>
              </div>

              <div className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] h-24 flex items-center justify-between">
                <div>
                  <h4 className="text-xs text-[#21BFFF] font-bold tracking-widest mb-2">SHARE</h4>
                  <div className="flex items-center gap-3">
                    <a href="#" aria-label="Share on Facebook" className="w-9 h-9 bg-[#21BFFF] rounded flex items-center justify-center text-black hover:opacity-90 transition">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" aria-label="Share on Twitter" className="w-9 h-9 bg-[#21BFFF] rounded flex items-center justify-center text-black hover:opacity-90 transition">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" aria-label="Share on LinkedIn" className="w-9 h-9 bg-[#21BFFF] rounded flex items-center justify-center text-black hover:opacity-90 transition">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F267c974ddb794f108f26c541e61109ba?format=webp&width=800" alt="share icon" className="w-9 h-9 object-contain" />
              </div>
            </div>
          </div>

          <div className="border-t border-[#21BFFF]/20 pt-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              About This Project
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Hollywood Hair Salon is a premium barber and salon service
              provider. We designed a modern, elegant website that showcases
              their services with a focus on user experience and conversion
              optimization.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              The design emphasizes their unique style and expertise while
              providing an intuitive booking system for customers. Every element
              was carefully crafted to reflect the premium nature of their
              services.
            </p>

            {/* Brand summary and image requested by user */}
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Brand Summary</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Hollywood Hair Salon is positioned as an upscale, customer-focused
                salon that blends modern aesthetics with professional grooming
                expertise. Its brand emphasizes premium service, attention to
                detail, and a stylish atmosphere designed to make clients feel
                confident and well cared for.
              </p>

              <div className="mt-6 flex justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2Fccf05ee3093d460e8bc4c51dffa4ff8c?format=webp&width=800"
                  alt="Hollywood Hair Salon brand"
                  className="w-full max-w-2xl rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Hero (image only - no text or extra image) */}
  <section className="relative">
    <div
      className="h-64 sm:h-80 lg:h-96 w-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F8807df7998a84f258f0490e44a46724f?format=webp&width=1600)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
    </div>
  </section>

      <PageFooter showBackgroundImage={false} />

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-[#21BFFF] to-[#570C95] rounded-full flex items-center justify-center text-white hover:shadow-xl hover:shadow-[#21BFFF]/50 transition z-40">
        <ArrowRight className="w-5 h-5 rotate-90" />
      </button>
    </div>
  );
}
