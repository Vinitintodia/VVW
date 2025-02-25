import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f4f0] to-[#e9e1d9]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            ANTHROP\C
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="hover:opacity-70">Claude</Link>
          <Link href="#" className="hover:opacity-70">Research</Link>
          <Link href="#" className="hover:opacity-70">Company</Link>
          <Link href="#" className="hover:opacity-70">Careers</Link>
          <Link href="#" className="hover:opacity-70">News</Link>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/90">
          Try Claude
        </button>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content remains the same */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 -skew-y-3 bg-[#e6d5cc]/30 rounded-2xl" aria-hidden="true"></div>
              <h1 className="relative text-5xl md:text-6xl font-bold leading-tight">
                AI <span className="underline decoration-2">research</span> and <span className="underline decoration-2">products</span> that put safety at the frontier
              </h1>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 pt-8">
              <div className="space-y-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-sm font-semibold">CLAUDE.AI</div>
                <h3 className="text-xl font-semibold">Meet Claude 3.7 Sonnet</h3>
                <p className="text-gray-600">Claude 3.7 Sonnet, our most intelligent AI model, is now available.</p>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/90 mt-4">
                  Talk to Claude
                </button>
              </div>
              
              <div className="space-y-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-sm font-semibold">API</div>
                <h3 className="text-xl font-semibold">Build with Claude</h3>
                <p className="text-gray-600">Create AI-powered applications and custom experiences using Claude.</p>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-black/5 mt-4">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Reverting image container */}
          <div className="relative">
            <div className="aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1724889675304-4eb73c1c496e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Network Illustration"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Announcement Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-[#e6e1db] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr,auto,auto] gap-8 items-start">
            <div className="space-y-6">
              <span className="text-sm font-semibold">Announcement</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Claude 3.7 Sonnet<br />
                and Claude Code
              </h2>
              <p className="text-lg text-gray-700 max-w-xl">
                Introducing Claude 3.7 Sonnet, our most intelligent model yet and the first hybrid
                reasoning model. We're also launching Claude Code, an agentic tool for coding.
              </p>
              <button className="border border-black px-6 py-2 rounded-full hover:bg-black/5 inline-flex items-center">
                Read the announcement
              </button>
            </div>

            <div className="bg-[#d9d4ce] rounded-2xl p-6 space-y-4 min-w-[280px]">
              <h3 className="text-lg font-semibold">Model details</h3>
              <h4 className="text-2xl font-bold">Claude 3.7<br />Sonnet</h4>
              <div className="flex justify-end">
                <button className="p-2 hover:bg-black/5 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-[#d9d4ce] rounded-2xl p-6 space-y-4 min-w-[280px]">
              <h3 className="text-lg font-semibold">Research insights</h3>
              <h4 className="text-2xl font-bold">Claude's<br />extended thinking</h4>
              <div className="flex justify-end">
                <button className="p-2 hover:bg-black/5 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Announcement Section */}
           
{/* Our Work Section */}
<section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold mb-12">Our Work</h2>
  
  <div className="grid md:grid-cols-3 gap-8">
    {/* Enterprise Card */}
    <div className="group hover:bg-white/50 rounded-2xl p-6 transition-colors">
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Product</div>
        <h3 className="text-2xl font-bold">Claude for Enterprise</h3>
        <div className="text-sm text-gray-500">Sep 4, 2024</div>
      </div>
    </div>

    {/* Research Card */}
    <div className="group hover:bg-white/50 rounded-2xl p-6 transition-colors">
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Alignment · Research</div>
        <h3 className="text-2xl font-bold">Constitutional AI: Harmlessness from AI Feedback</h3>
        <div className="text-sm text-gray-500">Dec 15, 2022</div>
      </div>
    </div>

    {/* Announcements Card */}
    <div className="group hover:bg-white/50 rounded-2xl p-6 transition-colors">
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Announcements</div>
        <h3 className="text-2xl font-bold">Core Views on AI Safety: When, Why, What, and How</h3>
        <div className="text-sm text-gray-500">Mar 8, 2023</div>
      </div>
    </div>
  </div>
</section>
</div>
    
  );
}
