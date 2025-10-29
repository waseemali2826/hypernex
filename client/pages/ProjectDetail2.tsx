import { Menu, X, Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import PageFooter from "@/components/PageFooter";

export default function ProjectDetail2() {
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
                href="/blog"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Blog
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
                href="/blog"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition"
              >
                Blog
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
            Real Estate Portal
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <a href="/portfolio" className="hover:text-[#21BFFF] transition">
              Portfolio
            </a>
            <span>/</span>
            <span className="text-[#21BFFF]">Real Estate</span>
          </div>
        </div>
      </div>

      {/* Project Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden mb-12 bg-gray-800 h-96 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-lg font-semibold mb-2">Modern House</p>
              <p className="text-sm">Rs. 100,000/month</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-12">
            <div>
              <h3 className="text-sm font-bold text-[#21BFFF] mb-3 tracking-widest">
                PROJECT DETAILS
              </h3>
              <p className="text-white text-sm">Modern House Property Portal</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#21BFFF] mb-3 tracking-widest">
                CLIENT
              </h3>
              <p className="text-white text-sm">Real Estate Agency</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#21BFFF] mb-3 tracking-widest">
                SERVICES
              </h3>
              <p className="text-white text-sm">
                Web Development, Property Listing
              </p>
            </div>
          </div>

          <div className="border-t border-[#21BFFF]/20 pt-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              About This Project
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              A comprehensive real estate portal showcasing modern residential
              properties. Our solution provides an intuitive interface for
              browsing properties, viewing detailed information, and contacting
              agents.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              The platform features advanced search filters, virtual tours, and
              a responsive design that works seamlessly across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#21BFFF]/10 to-[#570C95]/10 rounded-3xl blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10 text-center px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Ready To Start Your Project?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8">
            Let's create something amazing together
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#21BFFF] to-[#570C95] text-white font-bold text-sm sm:text-base rounded-lg hover:shadow-xl hover:shadow-[#21BFFF]/50 transition flex items-center justify-center gap-2 group mx-auto w-fit"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
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
