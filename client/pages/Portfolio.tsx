import {
  Menu,
  X,
  Search,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import PageFooter from "@/components/PageFooter";

export default function Portfolio() {
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
                className="text-sm text-[#21BFFF] font-semibold"
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
                className="text-sm text-[#21BFFF] font-semibold"
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
            Portfolio
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <a href="/" className="hover:text-[#21BFFF] transition">
              Home
            </a>
            <span>/</span>
            <span className="text-[#21BFFF]">Portfolio</span>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12 sm:mb-16">
            <p className="text-[#21BFFF] text-xs sm:text-sm font-bold tracking-widest mb-3 sm:mb-4">
              * PORTFOLIO *
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Awesome Portfolio
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Barber Salon",
                description: "Make A Wish Style",
                image: "https://cdn.builder.io/api/v1/image/assets%2F516737e8775e484aa78bfadffa78b91e%2Fc9d6eee60f574985816984a3cd73c2e1?format=webp&width=800",
                link: "/project-detail-1",
              },
              {
                title: "Real Estate",
                description: "Modern House",
                price: "Rs. 100,000/month",
                image: "https://images.unsplash.com/photo-1572120471610-3c643cdc7a0f?w=500&h=400&fit=crop",
                link: "/project-detail-2",
              },
              {
                title: "Restaurant",
                description: "We Offer Top Tastes",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop",
                link: "/portfolio",
              },
              {
                title: "Automotive",
                description: "Suzuki - 2021",
                details: "4 People, 7.6km / 1-litre",
                price: "8k/month",
                image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop",
                link: "/portfolio",
              },
              {
                title: "Accessories",
                description: "Our Popular Items",
                image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=400&fit=crop",
                link: "/portfolio",
              },
              {
                title: "Makeup",
                description: "Z.B.U Makeup - About",
                image: "https://images.unsplash.com/photo-1596462502278-af0a39d28b37?w=500&h=400&fit=crop",
                link: "/portfolio",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden hover:shadow-xl hover:shadow-[#21BFFF]/50 transition bg-[#221040]/50 border border-[#21BFFF]/20 hover:border-[#21BFFF]/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3">
                    {item.description}
                  </p>
                  {item.price && (
                    <p className="text-[#21BFFF] font-semibold text-sm mb-2">
                      {item.price}
                    </p>
                  )}
                  {item.details && (
                    <p className="text-xs sm:text-sm text-gray-400 mb-3">
                      {item.details}
                    </p>
                  )}
                  <a
                    href={item.link}
                    className="text-[#21BFFF] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition"
                  >
                    View Project <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#21BFFF]/10 to-[#570C95]/10 rounded-3xl blur-3xl" />
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2F8fba583c60d24e17a53fe53c675052a9?format=webp&width=800)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center px-2">
          <p className="text-[#21BFFF] text-xs sm:text-sm font-bold tracking-widest mb-4">
            * CONTACT US *
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Get In Totch With Us
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether You Have A Question, Need Assistance, Or Want To Discuss A
            Project, Feel Free To Reach Out. We'd Love To Hear From You!
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg border border-[#21BFFF] text-[#21BFFF] font-bold text-sm sm:text-base hover:bg-[#21BFFF] hover:text-black transition"
          >
            Contact Us
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
