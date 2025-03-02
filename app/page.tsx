import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Code, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="gradient-background">
        <div className="floating-light light-1" />
        <div className="floating-light light-2" />
        <div className="floating-light light-3" />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white rounded-md p-1">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="CamelAI Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <span className="text-white font-semibold">camelAI</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/blog" className="nav-link text-white/80 hover:text-white text-sm">
            Blog
          </Link>
          <Link href="/pricing" className="nav-link text-white/80 hover:text-white text-sm">
            Pricing
          </Link>
          <Link href="/login" className="nav-link text-white hover:text-white/90 text-sm font-medium">
            Log in
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12 text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The AI Data Analyst</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Ask questions, get instant charts and insights from your data.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="/try-free"
            className="try-free-button text-gray-900 px-6 py-2.5 rounded-full flex items-center gap-2 font-medium hover:opacity-90 transition-opacity"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/book-demo"
            className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full flex items-center gap-2 font-medium hover:bg-white/20 transition-colors"
          >
            Book demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <div className="bg-orange-500 p-1 rounded">🔥</div>Y Combinator backed
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <div className="bg-blue-500 p-1 rounded">🔒</div>
            Enterprise Security
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <div className="bg-green-500 p-1 rounded">✓</div>
            100% Data Privacy
          </div>
        </div>

        {/* Video demo */}
        <div className="max-w-3xl mx-auto relative rounded-lg overflow-hidden border border-white/20 shadow-2xl mb-20">
          <div className="aspect-video bg-gray-900 relative">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Demo video thumbnail"
              width={1000}
              height={600}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors">
                <Play className="h-10 w-10 text-white fill-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Integration icons - Double row carousel */}
        <div className="max-w-4xl mx-auto overflow-hidden mb-20">
          <div className="flex gap-4 mb-4">
            <div className="flex gap-4 scroll-left">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="integration-icon bg-black/30 backdrop-blur-sm p-2 rounded-md flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`Integration ${i + 1}`}
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 11 }).map((_, i) => (
                <div
                  key={`dup-${i}`}
                  className="integration-icon bg-black/30 backdrop-blur-sm p-2 rounded-md flex-shrink-0"
                >
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`Integration ${i + 1}`}
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4 scroll-right">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="integration-icon bg-black/30 backdrop-blur-sm p-2 rounded-md flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`Integration ${i + 1}`}
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 11 }).map((_, i) => (
                <div
                  key={`dup-${i}`}
                  className="integration-icon bg-black/30 backdrop-blur-sm p-2 rounded-md flex-shrink-0"
                >
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`Integration ${i + 1}`}
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ask any question */}
        <div className="max-w-xl mx-auto mb-20">
          <div className="border border-white/20 rounded-lg p-4 bg-white/5 text-white flex items-center justify-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-mono">Ask any question</span>
          </div>
          <p className="text-white/80 text-sm mt-4">
            Camel uses your live data.
            <br />
            Get tables and charts instantly.
          </p>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <div className="bg-white/10 p-1.5 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Powerful Dashboards</h2>
            <p className="text-white/70 text-sm max-w-md mx-auto">
              Save any graph to your dashboard.
              <br />
              Share it with the team and stay organized.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <div className="rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Dashboard example"
                width={1000}
                height={600}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Want to build with camelAI?</h3>
              <p className="text-white/70 mb-6">Embed AI-powered analytics directly in your application with our API</p>
              <Link
                href="/api"
                className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-md inline-flex items-center gap-2 font-medium hover:bg-white/20 transition-colors"
              >
                Get API Wallet
              </Link>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-medium mb-2">Natural Language → SQL</h4>
                <p className="text-white/70 text-sm">Ask questions in plain English and get SQL queries</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Secure Integration</h4>
                <p className="text-white/70 text-sm">Enterprise-grade security and permissions</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Flexible Integration</h4>
                <p className="text-white/70 text-sm">Full control over the user experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-white text-center mb-8">FAQs</h2>

          <div className="space-y-4">
            <div className="border-b border-white/10">
              <details className="group" open>
                <summary className="flex justify-between items-center cursor-pointer py-4 text-white">
                  <span>How is my data stored?</span>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="bg-gray-900 text-white/80 text-sm p-4 rounded mb-4">
                  <p>
                    camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and
                    limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then
                    deleted. For more information, please see our{" "}
                    <Link href="#" className="text-blue-400 hover:underline">
                      Security Policy
                    </Link>{" "}
                    and our{" "}
                    <Link href="#" className="text-blue-400 hover:underline">
                      security blog post
                    </Link>
                    .
                  </p>
                </div>
              </details>
            </div>

            <div className="border-b border-white/10">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-white">
                  <span>Do you train on my data?</span>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="bg-gray-900 text-white/80 text-sm p-4 rounded mb-4">
                  <p>
                    No, we do not train our models on your data. Your data is only used to provide you with the service
                    and is deleted after a short period.
                  </p>
                </div>
              </details>
            </div>

            <div className="border-b border-white/10">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-white">
                  <span>Are my app connections secure?</span>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="bg-gray-900 text-white/80 text-sm p-4 rounded mb-4">
                  <p>
                    Yes, all connections to your applications are secured with enterprise-grade encryption. We use OAuth
                    and other secure authentication methods to ensure your data remains protected.
                  </p>
                </div>
              </details>
            </div>

            <div className="border-b border-white/10">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-white">
                  <span>How do you pull my data?</span>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="bg-gray-900 text-white/80 text-sm p-4 rounded mb-4">
                  <p>
                    We connect to your data sources through secure APIs and integrations. You maintain full control over
                    which data sources we can access and what data we can pull.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Get started for <span className="gradient-text">free</span>.
            </h2>
          </div>
          <div className="flex gap-4">
            <Link
              href="/try-free"
              className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Try Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/20 transition-colors"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="CamelAI Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-white text-xl font-semibold">camelAI</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Subscribe to our newsletter for product updates</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-white/20 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/30 w-full"
                />
                <button className="bg-white/10 text-white border border-white/20 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 md:col-span-3">
              <div>
                <h3 className="text-white font-medium mb-3 text-sm">Company</h3>
                <ul className="space-y-2">
                  {["About Us", "Schedule a call", "Email Us", "Product Hunt"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-white/70 hover:text-white text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3 text-sm">Links</h3>
                <ul className="space-y-2">
                  {["Data Sources", "Demo Videos", "Blog"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-white/70 hover:text-white text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3 text-sm">Legal</h3>
                <ul className="space-y-2">
                  {["Terms", "Privacy Policy", "Security", "Acceptable Use"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-white/70 hover:text-white text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-4 mb-4">
            {["twitter", "discord", "linkedin", "youtube", "github"].map((social, i) => (
              <Link key={i} href="#" className="text-white/70 hover:text-white">
                <div className="h-8 w-8 flex items-center justify-center">
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-white/50 text-xs mt-8">© 2024 camelAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

