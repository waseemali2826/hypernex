import {
  Menu,
  X,
  Search,
  ArrowRight,
  Facebook,
  Linkedin,
  Twitter,
  Calendar,
  User,
  Clock,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <div
      ref={elementRef}
      style={{
        animation: isVisible ? `slideUp 0.8s ease-out ${delay}s both` : "none",
      }}
    >
      {children}
    </div>
  );
}

function AnimatedImage({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <div
      ref={elementRef}
      style={{
        animation: isVisible ? `scaleIn 0.8s ease-out ${delay}s both` : "none",
      }}
      className="rounded-lg overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}

function AnimatedCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <div
      ref={elementRef}
      style={{
        animation: isVisible ? `slideUp 0.8s ease-out ${delay}s both` : "none",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function BlogDetail() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { elementRef: heroRef } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#21BFFF]/10 animate-fade-in">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9e10a04b7794adf91de2373eb63844c%2Fa51a8a05eccd4a50b67a510563e49ad1?format=webp&width=800"
                alt="HyperNexis logo"
                className="h-10 sm:h-12 w-auto hover:scale-110 transition-transform duration-300"
              />
            </a>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="/"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#21BFFF] to-[#570C95] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="/#services"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition-all duration-300 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#21BFFF] to-[#570C95] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="/portfolio"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition-all duration-300 relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#21BFFF] to-[#570C95] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/blog" className="text-sm text-[#21BFFF] font-semibold relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#21BFFF] to-[#570C95]"></span>
              </a>
              <a
                href="/contact-us"
                className="text-sm text-gray-300 hover:text-[#21BFFF] transition-all duration-300 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#21BFFF] to-[#570C95] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex p-2 hover:text-[#21BFFF] transition-all duration-300 hover:scale-110">
                <Search className="w-5 h-5 text-gray-300" />
              </button>
              <button className="hidden sm:flex w-10 h-10 rounded-lg bg-[#221040] border border-[#21BFFF]/20 items-center justify-center hover:border-[#21BFFF]/50 hover:bg-[#221040]/80 transition-all duration-300 hover:scale-110" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-[#21BFFF] transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 animate-bounce-in" />
                ) : (
                  <Menu className="w-5 h-5 animate-bounce-in" />
                )}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-3 pb-4 border-t border-[#21BFFF]/10 pt-4 animate-slide-down">
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
              <a href="/blog" className="text-sm text-[#21BFFF] font-semibold">
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
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 lg:px-8 border-b border-[#21BFFF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#21BFFF]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 animate-slide-up leading-tight">
            Transform Your Business with Digital Marketing in 2024
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <a href="/" className="hover:text-[#21BFFF] transition-all duration-300 hover:scale-110">
              Home
            </a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#21BFFF] transition-all duration-300 hover:scale-110">
              Blog
            </a>
            <span>/</span>
            <span className="text-[#21BFFF] font-semibold">Digital Marketing 2024</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-gray-400 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 hover:text-[#21BFFF] transition-all duration-300">
              <User className="w-4 h-4" />
              <span>By HyperNexis Team</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2 hover:text-[#21BFFF] transition-all duration-300">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2024</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2 hover:text-[#21BFFF] transition-all duration-300">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div ref={heroRef} className="mb-12">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1611925591917-07ccb582351e?w=1200&h=600&fit=crop"
              alt="Digital Marketing Strategy"
            />
          </div>

          {/* Article Introduction */}
          <AnimatedSection>
            <div className="mb-12 p-6 rounded-lg border border-[#21BFFF]/20 bg-gradient-to-r from-[#21BFFF]/5 to-[#570C95]/5 hover:border-[#21BFFF]/40 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                In today's rapidly evolving digital landscape, the ability to
                effectively market your business online has become not just an
                advantage, but a necessity. As we move deeper into 2024, digital
                marketing strategies are becoming increasingly sophisticated,
                data-driven, and customer-centric. Whether you're a startup
                looking to establish your online presence or an established brand
                seeking to expand your digital footprint, understanding and
                implementing modern marketing techniques is crucial for success.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This comprehensive guide will walk you through the essential
                digital marketing strategies, emerging trends, and practical
                implementation tips that will help your business thrive in 2024
                and beyond.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 1 */}
          <AnimatedSection delay={0.1}>
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                1. Understanding the Modern Digital Marketing Landscape
              </h2>
              <AnimatedImage
                src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2Ff602f7468bbf473cb8bb0167fc2733f0?format=webp&width=1200"
                alt="Digital Marketing Landscape"
                delay={0.1}
              />
              <div className="mt-8">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  The digital marketing landscape has transformed dramatically over
                  the past few years. The rise of artificial intelligence, machine
                  learning, and advanced analytics has enabled businesses to
                  understand their customers on a deeper level than ever before.
                  Today's successful marketing is not about one-size-fits-all
                  campaigns, but rather hyper-personalized experiences tailored to
                  individual customer preferences and behaviors.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Key components of modern digital marketing include:
                </p>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">•</span>
                    <span>
                      <strong>Search Engine Optimization (SEO):</strong> Ensuring
                      your website ranks high in search results for relevant
                      keywords
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">•</span>
                    <span>
                      <strong>Content Marketing:</strong> Creating valuable,
                      relevant content that attracts and engages your target
                      audience
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">•</span>
                    <span>
                      <strong>Social Media Marketing:</strong> Building communities
                      and engaging with customers across social platforms
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">•</span>
                    <span>
                      <strong>Email Marketing:</strong> Maintaining direct
                      communication with your audience through personalized email
                      campaigns
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">•</span>
                    <span>
                      <strong>Paid Advertising:</strong> Strategic use of PPC,
                      display ads, and social media advertising to reach targeted
                      audiences
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  The most successful brands in 2024 are those that seamlessly
                  integrate these various channels to create a cohesive, omnichannel
                  marketing strategy that meets customers wherever they are.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 2 */}
          <AnimatedSection delay={0.15}>
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                2. The Power of Data-Driven Decision Making
              </h2>
              <AnimatedImage
                src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2Fb35560f5b2c04d95bbe2f7006b57e248?format=webp&width=1200"
                alt="Data Analytics Dashboard"
                delay={0.1}
              />
              <div className="mt-8">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Data is the new currency of digital marketing. Every click, view,
                  conversion, and interaction provides valuable insights into
                  customer behavior and preferences. By leveraging advanced
                  analytics tools and platforms, businesses can make informed
                  decisions based on real data rather than assumptions or intuition.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Key metrics to monitor include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <AnimatedCard
                    delay={0.1}
                    className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] hover:border-[#21BFFF]/60 hover:bg-[#0b0b11]/80 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">
                      Conversion Rate
                    </h4>
                    <p className="text-sm text-gray-300">
                      The percentage of visitors who take a desired action, such as
                      making a purchase or signing up for a newsletter
                    </p>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.15}
                    className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] hover:border-[#21BFFF]/60 hover:bg-[#0b0b11]/80 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">
                      Customer Lifetime Value
                    </h4>
                    <p className="text-sm text-gray-300">
                      The total revenue a customer generates throughout their
                      relationship with your business
                    </p>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.2}
                    className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] hover:border-[#21BFFF]/60 hover:bg-[#0b0b11]/80 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">
                      Return on Investment (ROI)
                    </h4>
                    <p className="text-sm text-gray-300">
                      The profit generated from your marketing investments,
                      calculated as a percentage of your total spend
                    </p>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.25}
                    className="p-4 border border-[#21BFFF]/30 rounded-lg bg-[#0b0b11] hover:border-[#21BFFF]/60 hover:bg-[#0b0b11]/80 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">
                      Customer Acquisition Cost
                    </h4>
                    <p className="text-sm text-gray-300">
                      The average cost of acquiring a new customer through your
                      marketing efforts
                    </p>
                  </AnimatedCard>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  By monitoring these metrics continuously, you can identify what's
                  working, what needs improvement, and where to allocate your
                  marketing budget for maximum impact.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 3 */}
          <AnimatedSection delay={0.2}>
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                3. Content Marketing: The Foundation of Digital Success
              </h2>
              <AnimatedImage
                src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F6fab5f65743f44a0a873b314d5e249bb?format=webp&width=1200"
                alt="Content Creation Process"
                delay={0.1}
              />
              <div className="mt-8">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Content is king in the digital marketing world. High-quality,
                  valuable content not only attracts potential customers but also
                  establishes your brand as an authority in your industry. Content
                  marketing encompasses various formats including blog posts,
                  videos, podcasts, infographics, whitepapers, and case studies.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  An effective content marketing strategy should:
                </p>
                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">✓</span>
                    <span>
                      <strong>Address Customer Pain Points:</strong> Create content
                      that solves real problems your customers face
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">✓</span>
                    <span>
                      <strong>Be Consistent:</strong> Publish content regularly on a
                      schedule your audience can rely on
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">✓</span>
                    <span>
                      <strong>Optimize for SEO:</strong> Ensure your content is
                      discoverable through search engines
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">✓</span>
                    <span>
                      <strong>Tell Stories:</strong> Use storytelling to create
                      emotional connections with your audience
                    </span>
                  </li>
                  <li className="flex gap-3 p-3 rounded-lg bg-[#0b0b11]/50 hover:bg-[#0b0b11] transition-all duration-300 hover:translate-x-2">
                    <span className="text-[#21BFFF] font-bold">✓</span>
                    <span>
                      <strong>Distribute Across Channels:</strong> Share your
                      content on multiple platforms to maximize reach
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Remember, great content isn't just about what you're selling—it's
                  about providing genuine value to your audience and building trust
                  over time.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 4 */}
          <AnimatedSection delay={0.25}>
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                4. Social Media Marketing: Building Communities
              </h2>
              <AnimatedImage
                src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F8223faf2a93940378db05c60eb65dc0f?format=webp&width=1200"
                alt="Social Media Strategy"
                delay={0.1}
              />
              <div className="mt-8">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Social media has evolved from a platform for personal connections
                  to a powerful business tool. With billions of users across various
                  platforms, social media offers unprecedented opportunities to
                  reach and engage your target audience. Whether you're using
                  Facebook, Instagram, LinkedIn, Twitter, or TikTok, each platform
                  has unique characteristics and audience demographics.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Different platforms serve different purposes:
                </p>
                <div className="space-y-4 mb-6">
                  <AnimatedCard
                    delay={0.1}
                    className="p-4 border border-[#21BFFF]/20 rounded-lg bg-[#221040]/30 hover:border-[#21BFFF]/60 hover:bg-[#221040]/60 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">
                      Facebook & Instagram
                    </h4>
                    <p className="text-sm text-gray-300">
                      Best for building communities, sharing visual content, and
                      running targeted advertising campaigns
                    </p>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.15}
                    className="p-4 border border-[#21BFFF]/20 rounded-lg bg-[#221040]/30 hover:border-[#21BFFF]/60 hover:bg-[#221040]/60 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">LinkedIn</h4>
                    <p className="text-sm text-gray-300">
                      Ideal for B2B marketing, thought leadership, and professional
                      networking
                    </p>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.2}
                    className="p-4 border border-[#21BFFF]/20 rounded-lg bg-[#221040]/30 hover:border-[#21BFFF]/60 hover:bg-[#221040]/60 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">TikTok</h4>
                    <p className="text-sm text-gray-300">
                      Perfect for reaching younger audiences with creative,
                      short-form video content
                    </p>
                  </AnimatedCard>
                  <AnimatedCard
                    delay={0.25}
                    className="p-4 border border-[#21BFFF]/20 rounded-lg bg-[#221040]/30 hover:border-[#21BFFF]/60 hover:bg-[#221040]/60 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 cursor-pointer"
                  >
                    <h4 className="text-[#21BFFF] font-bold mb-2">YouTube</h4>
                    <p className="text-sm text-gray-300">
                      The best platform for video marketing, tutorials, and
                      long-form content
                    </p>
                  </AnimatedCard>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Successful social media marketing is about building genuine
                  communities, engaging with your audience, and creating content
                  that resonates with them, rather than just broadcasting your
                  message.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 5 */}
          <AnimatedSection delay={0.3}>
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                5. Emerging Trends in Digital Marketing 2024
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The digital marketing landscape continues to evolve at a rapid
                pace. Here are the key trends shaping the industry in 2024:
              </p>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <AnimatedCard
                  delay={0.1}
                  className="border-l-4 border-[#21BFFF] p-6 bg-[#221040]/50 rounded hover:bg-[#221040] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    Artificial Intelligence & Machine Learning
                  </h4>
                  <p className="text-gray-300">
                    AI-powered tools are revolutionizing how businesses
                    personalize customer experiences, predict behavior, and
                    optimize campaigns in real-time
                  </p>
                </AnimatedCard>
                <AnimatedCard
                  delay={0.15}
                  className="border-l-4 border-[#570C95] p-6 bg-[#221040]/50 rounded hover:bg-[#221040] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#570C95]/20"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    Voice Search Optimization
                  </h4>
                  <p className="text-gray-300">
                    With the rise of smart speakers and voice assistants,
                    optimizing your content for voice search is becoming
                    increasingly important
                  </p>
                </AnimatedCard>
                <AnimatedCard
                  delay={0.2}
                  className="border-l-4 border-[#21BFFF] p-6 bg-[#221040]/50 rounded hover:bg-[#221040] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    Video Marketing Dominance
                  </h4>
                  <p className="text-gray-300">
                    Video content continues to outperform other formats in terms
                    of engagement and conversion rates across all platforms
                  </p>
                </AnimatedCard>
                <AnimatedCard
                  delay={0.25}
                  className="border-l-4 border-[#570C95] p-6 bg-[#221040]/50 rounded hover:bg-[#221040] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#570C95]/20"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    Privacy-First Marketing
                  </h4>
                  <p className="text-gray-300">
                    With stricter privacy regulations, marketers are focusing on
                    building trust and using first-party data instead of relying
                    on third-party cookies
                  </p>
                </AnimatedCard>
                <AnimatedCard
                  delay={0.3}
                  className="border-l-4 border-[#21BFFF] p-6 bg-[#221040]/50 rounded hover:bg-[#221040] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    Interactive Content
                  </h4>
                  <p className="text-gray-300">
                    Quizzes, calculators, polls, and interactive experiences are
                    generating higher engagement rates than static content
                  </p>
                </AnimatedCard>
                <AnimatedCard
                  delay={0.35}
                  className="border-l-4 border-[#570C95] p-6 bg-[#221040]/50 rounded hover:bg-[#221040] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#570C95]/20"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    Community Building
                  </h4>
                  <p className="text-gray-300">
                    Brands are shifting focus to building loyal communities rather
                    than just acquiring customers
                  </p>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* Section 6 */}
          <AnimatedSection delay={0.35}>
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                6. Implementing Your Digital Marketing Strategy
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Now that you understand the key concepts and trends, here's how to
                implement a comprehensive digital marketing strategy:
              </p>
              <div className="space-y-4 mb-6">
                {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
                  <AnimatedCard
                    key={num}
                    delay={idx * 0.05}
                    className="flex gap-4 p-6 border border-[#21BFFF]/20 rounded-lg bg-[#0b0b11] hover:bg-[#0b0b11]/80 transition-all duration-300 hover:border-[#21BFFF]/50 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#21BFFF]/20 group cursor-pointer"
                  >
                    <div className="text-2xl font-bold text-[#21BFFF] min-w-[40px] group-hover:scale-125 transition-transform duration-300">
                      {num}
                    </div>
                    <div>
                      {num === 1 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Define Clear Goals
                          </h4>
                          <p className="text-sm text-gray-300">
                            Set specific, measurable objectives for your digital
                            marketing efforts (e.g., increase website traffic by 50%,
                            generate 100 leads per month)
                          </p>
                        </>
                      )}
                      {num === 2 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Know Your Audience
                          </h4>
                          <p className="text-sm text-gray-300">
                            Create detailed buyer personas based on research, data, and
                            customer insights to tailor your messaging
                          </p>
                        </>
                      )}
                      {num === 3 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Audit Your Current Presence
                          </h4>
                          <p className="text-sm text-gray-300">
                            Evaluate your existing digital assets, website, social media
                            profiles, and current marketing efforts
                          </p>
                        </>
                      )}
                      {num === 4 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Choose Your Channels
                          </h4>
                          <p className="text-sm text-gray-300">
                            Select the digital marketing channels that best align with
                            your goals and where your audience spends their time
                          </p>
                        </>
                      )}
                      {num === 5 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Create Quality Content
                          </h4>
                          <p className="text-sm text-gray-300">
                            Develop a content calendar and create valuable, engaging
                            content that addresses your audience's needs
                          </p>
                        </>
                      )}
                      {num === 6 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Optimize and Test
                          </h4>
                          <p className="text-sm text-gray-300">
                            Use A/B testing to experiment with different approaches and
                            continuously optimize your campaigns
                          </p>
                        </>
                      )}
                      {num === 7 && (
                        <>
                          <h4 className="font-bold text-white mb-2">
                            Monitor and Report
                          </h4>
                          <p className="text-sm text-gray-300">
                            Track key metrics, analyze performance data, and adjust your
                            strategy based on results
                          </p>
                        </>
                      )}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Conclusion */}
          <AnimatedSection delay={0.4}>
            <div className="p-8 border border-[#21BFFF]/20 rounded-lg bg-gradient-to-r from-[#221040]/50 to-[#0b0b11]/50 mb-12 hover:border-[#21BFFF]/40 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                Conclusion: Your Path to Digital Success
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Digital marketing in 2024 is more important than ever for
                businesses of all sizes. By understanding the fundamental
                principles, staying aware of emerging trends, and implementing a
                comprehensive strategy tailored to your unique goals and audience,
                you can position your business for sustained growth and success.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Remember, digital marketing is not a one-time effort but an
                ongoing process of learning, testing, and optimization. The most
                successful brands are those that remain agile, data-driven, and
                customer-focused in their approach.
              </p>
              <p className="text-gray-300 leading-relaxed">
                At HyperNexis, we're committed to helping businesses like yours
                navigate the complex digital landscape and achieve their marketing
                goals. Whether you need help with strategy, implementation, or
                optimization, our team of experts is here to support your journey
                to digital excellence.
              </p>
            </div>
          </AnimatedSection>

          {/* Share Section */}
          <AnimatedSection delay={0.45}>
            <div className="flex flex-wrap items-center justify-between p-6 border border-[#21BFFF]/20 rounded-lg bg-[#0b0b11] mb-12 hover:border-[#21BFFF]/40 hover:bg-[#0b0b11]/80 transition-all duration-300">
              <div>
                <h3 className="font-bold text-white mb-2">Share This Article</h3>
                <p className="text-sm text-gray-400">
                  Help others discover this valuable content
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="w-10 h-10 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-[#21BFFF]/50"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Share on Twitter"
                  className="w-10 h-10 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-[#21BFFF]/50"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="w-10 h-10 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-[#21BFFF]/50"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  aria-label="Copy link"
                  className="w-10 h-10 bg-[#21BFFF]/20 rounded flex items-center justify-center text-[#21BFFF] hover:bg-[#21BFFF] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-[#21BFFF]/50"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Author Bio */}
          <AnimatedSection delay={0.5}>
            <div className="p-8 border border-[#21BFFF]/20 rounded-lg bg-gradient-to-r from-[#221040]/50 to-[#0b0b11]/50 mb-12 hover:border-[#21BFFF]/40 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#21BFFF] to-[#570C95] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#21BFFF]/50">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    HyperNexis Team
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our expert team at HyperNexis is dedicated to helping
                    businesses succeed in the digital world. With years of
                    experience in digital marketing, web development, and business
                    strategy, we're committed to delivering innovative solutions
                    and insights that drive real results.
                  </p>
                  <a
                    href="/contact-us"
                    className="text-[#21BFFF] font-semibold hover:text-white transition-all duration-300 inline-flex items-center gap-2 hover:gap-4"
                  >
                    Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Posts */}
          <AnimatedSection delay={0.55}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-[#21BFFF] to-[#570C95] bg-clip-text text-transparent">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedCard
                  delay={0.1}
                  className="p-6 border border-[#21BFFF]/20 rounded-lg bg-[#221040]/50 hover:border-[#21BFFF]/50 transition-all duration-300 hover:bg-[#221040] hover:shadow-lg hover:shadow-[#21BFFF]/20 group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-[#21BFFF]/10 to-[#570C95]/10 rounded mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F951cd71545fe4e01a3ba8fde36966822?format=webp&width=600"
                      alt="Web Development Trends"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#21BFFF] transition-colors duration-300">
                    Web Development Trends That Will Define 2024
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Explore the latest technologies and best practices in web
                    development
                  </p>
                  <a
                    href="/blog"
                    className="text-[#21BFFF] text-sm font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 group-hover:translate-x-1"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </a>
                </AnimatedCard>
                <AnimatedCard
                  delay={0.15}
                  className="p-6 border border-[#21BFFF]/20 rounded-lg bg-[#221040]/50 hover:border-[#21BFFF]/50 transition-all duration-300 hover:bg-[#221040] hover:shadow-lg hover:shadow-[#21BFFF]/20 group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-[#21BFFF]/10 to-[#570C95]/10 rounded mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F261dc11908494c5bafcd987f6ce1fadf%2F1237f4c6048441a49591a0be39ca1571?format=webp&width=600"
                      alt="E-Commerce Success"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#21BFFF] transition-colors duration-300">
                    Building a Successful E-Commerce Platform
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Complete guide to creating and scaling your online store
                  </p>
                  <a
                    href="/blog"
                    className="text-[#21BFFF] text-sm font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 group-hover:translate-x-1"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </a>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.6}>
            <div className="p-8 sm:p-12 rounded-lg bg-gradient-to-r from-[#21BFFF]/10 to-[#570C95]/10 border border-[#21BFFF]/20 text-center hover:border-[#21BFFF]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#21BFFF]/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Digital Marketing?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our expert team at HyperNexis is ready to help you implement these
                strategies and achieve your business goals.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-gradient-to-r from-[#21BFFF] to-[#570C95] text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl hover:shadow-[#21BFFF]/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 hover:gap-4"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-[#21BFFF] to-[#570C95] rounded-full flex items-center justify-center text-white hover:shadow-xl hover:shadow-[#21BFFF]/50 transition-all duration-300 z-40 animate-float hover:scale-125 cursor-pointer">
        <ArrowRight className="w-5 h-5 rotate-90" />
      </button>
    </div>
  );
}
