import Link from "next/link"
import { ChevronRight, LayoutGrid, Menu, Plus } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-black rounded p-1 h-7 w-7 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-medium">Index</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Changelog
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Careers
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Demo
          </Link>
        </nav>

        <Link href="#" className="text-gray-900 font-medium">
          Log in
        </Link>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#f9f9f7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="2" fill="gray" opacity="0.5" />
              <circle cx="100" cy="0" r="2" fill="gray" opacity="0.5" />
              <circle cx="0" cy="100" r="2" fill="gray" opacity="0.5" />
              <circle cx="50" cy="50" r="1" fill="gray" opacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-full mb-8 text-sm font-medium">
            <span className="mr-1 flex items-center">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="black" />
              </svg>
              IndexAI 1.0 · Early Preview
            </span>
            <ChevronRight className="h-4 w-4" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">AI Powered Data</h1>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#e67349]">Platform</h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Explore your data, build your dashboard,
            <br />
            bring your team together.
          </p>

          <button className="bg-gray-900 text-white rounded-full px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <LayoutGrid className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Supercart</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-xs">
                    EA
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs">
                    NK
                  </div>
                  <div className="h-8 w-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs">
                    +1
                  </div>
                </div>

                <button className="p-1.5 border rounded text-gray-600 hover:bg-gray-50">
                  <Plus className="h-5 w-5" />
                </button>

                <button className="p-1.5 border rounded text-gray-600 hover:bg-gray-50">
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {/* User Signups Chart */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-4">User signups</h3>
                <div className="flex items-center mb-2 space-x-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-sm bg-orange-500 mr-2"></div>
                    <span className="text-xs">Supercart+ users</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-sm bg-blue-300 mr-2"></div>
                    <span className="text-xs">Non-premium users</span>
                  </div>
                </div>
                <div className="h-40 w-full">
                  <LineChart />
                </div>
              </div>

              {/* Revenue by city Chart */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-4">Revenue by city</h3>
                <div className="h-40 w-full relative">
                  <DonutChart />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-sm text-gray-500">Total</div>
                    <div className="font-bold text-lg">4.32m</div>
                  </div>
                  <div className="absolute top-4 right-10 px-2 py-1 bg-red-500 text-white text-xs rounded">Stuart</div>
                  <div className="absolute top-1/4 right-0 px-2 py-1 bg-blue-400 text-white text-xs rounded">Nick</div>
                </div>
              </div>

              {/* Average Monthly Spending */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-4">
                  <span className="text-xs mr-1 px-2 py-0.5 bg-purple-100 rounded">Eduardo</span>
                  Customer spending
                </h3>
                <div className="h-40 w-full flex flex-col items-center justify-center">
                  <div className="text-xs text-gray-500 mb-1">Average Monthly Spending</div>
                  <div className="text-5xl font-bold">$201.53</div>
                  <div className="text-sm text-green-500 flex items-center mt-2">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 14L12 9L17 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    20.5%
                  </div>
                </div>
              </div>

              {/* Top Customers Table */}
              <div className="border rounded-lg p-4 md:col-span-2">
                <h3 className="text-sm font-medium mb-4">Top customers</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="text-xs text-gray-500">
                        <th className="px-2 py-1 text-left">id</th>
                        <th className="px-2 py-1 text-left">date joined</th>
                        <th className="px-2 py-1 text-left">city</th>
                        <th className="px-2 py-1 text-left">total spending</th>
                        <th className="px-2 py-1 text-left">total orders</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-xs">
                        <td className="px-2 py-1">186352</td>
                        <td className="px-2 py-1">01/31/2022</td>
                        <td className="px-2 py-1">Vancouver</td>
                        <td className="px-2 py-1">$1521.20</td>
                        <td className="px-2 py-1">102</td>
                      </tr>
                      <tr className="text-xs">
                        <td className="px-2 py-1">108231</td>
                        <td className="px-2 py-1">12/08/2021</td>
                        <td className="px-2 py-1">Toronto</td>
                        <td className="px-2 py-1">$1101.46</td>
                        <td className="px-2 py-1">84</td>
                      </tr>
                      <tr className="text-xs">
                        <td className="px-2 py-1">87826</td>
                        <td className="px-2 py-1">10/14/2021</td>
                        <td className="px-2 py-1">Vancouver</td>
                        <td className="px-2 py-1">$846.65</td>
                        <td className="px-2 py-1">78</td>
                      </tr>
                      <tr className="text-xs">
                        <td className="px-2 py-1">492012</td>
                        <td className="px-2 py-1">06/01/2022</td>
                        <td className="px-2 py-1">Vancouver</td>
                        <td className="px-2 py-1">$982.02</td>
                        <td className="px-2 py-1">77</td>
                      </tr>
                      <tr className="text-xs">
                        <td className="px-2 py-1">156902</td>
                        <td className="px-2 py-1">02/23/2023</td>
                        <td className="px-2 py-1">Toronto</td>
                        <td className="px-2 py-1">$964.30</td>
                        <td className="px-2 py-1">72</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Number of orders by city */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-4">
                  <span className="text-xs mr-1 px-2 py-0.5 bg-orange-100 rounded">Oguz</span>
                  Number of orders by city
                </h3>
                <div className="flex items-center mb-2 space-x-2">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-sm bg-red-500 mr-1"></div>
                    <span className="text-xs">Toronto</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-sm bg-blue-300 mr-1"></div>
                    <span className="text-xs">Vancouver</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-sm bg-purple-400 mr-1"></div>
                    <span className="text-xs">Montreal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-sm bg-yellow-500 mr-1"></div>
                    <span className="text-xs">Ottawa</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-sm bg-gray-400 mr-1"></div>
                    <span className="text-xs">Other</span>
                  </div>
                </div>
                <div className="h-40 w-full">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LineChart() {
  return (
    <svg viewBox="0 0 400 150" className="w-full h-full">
      <g transform="translate(0, 10)">
        {/* Y-axis labels */}
        <text x="0" y="5" className="text-[8px] text-gray-400">
          400
        </text>
        <text x="0" y="35" className="text-[8px] text-gray-400">
          300
        </text>
        <text x="0" y="65" className="text-[8px] text-gray-400">
          200
        </text>
        <text x="0" y="95" className="text-[8px] text-gray-400">
          100
        </text>
        <text x="0" y="125" className="text-[8px] text-gray-400">
          0
        </text>

        {/* X-axis labels */}
        <text x="40" y="140" className="text-[8px] text-gray-400">
          1/2023
        </text>
        <text x="120" y="140" className="text-[8px] text-gray-400">
          2/2023
        </text>
        <text x="200" y="140" className="text-[8px] text-gray-400">
          3/2023
        </text>
        <text x="280" y="140" className="text-[8px] text-gray-400">
          4/2023
        </text>
        <text x="350" y="140" className="text-[8px] text-gray-400">
          Year
        </text>

        {/* Lines */}
        <path d="M20,100 L80,80 L140,85 L200,60 L260,50 L320,30 L380,20" fill="none" stroke="#e67349" strokeWidth="2" />
        <path
          d="M20,120 L80,100 L140,70 L200,50 L260,60 L320,90 L380,70"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

function DonutChart() {
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <g transform="translate(100, 75)">
        {/* Donut segments */}
        <path d="M0,0 L0,-60 A60,60 0 0,1 52,30 Z" fill="#dc2626" />
        <path d="M0,0 L52,30 A60,60 0 0,1 -30,52 Z" fill="#fbbf24" />
        <path d="M0,0 L-30,52 A60,60 0 0,1 -60,0 Z" fill="#818cf8" />
        <path d="M0,0 L-60,0 A60,60 0 0,1 -30,-52 Z" fill="#93c5fd" />
        <path d="M0,0 L-30,-52 A60,60 0 0,1 0,-60 Z" fill="#e5e7eb" />

        {/* Inner white circle */}
        <circle cx="0" cy="0" r="40" fill="white" />
      </g>
    </svg>
  )
}

function BarChart() {
  return (
    <svg viewBox="0 0 400 150" className="w-full h-full">
      <g transform="translate(20, 10)">
        {/* Y-axis labels */}
        <text x="0" y="5" className="text-[8px] text-gray-400">
          40
        </text>
        <text x="0" y="45" className="text-[8px] text-gray-400">
          30
        </text>
        <text x="0" y="85" className="text-[8px] text-gray-400">
          20
        </text>

        {/* Bars */}
        <g transform="translate(40, 0)">
          <rect x="0" y="60" width="15" height="20" fill="#dc2626" />
          <rect x="20" y="50" width="15" height="30" fill="#93c5fd" />
          <rect x="40" y="70" width="15" height="10" fill="#818cf8" />
        </g>

        <g transform="translate(100, 0)">
          <rect x="0" y="50" width="15" height="30" fill="#dc2626" />
          <rect x="20" y="40" width="15" height="40" fill="#93c5fd" />
          <rect x="40" y="60" width="15" height="20" fill="#818cf8" />
        </g>

        <g transform="translate(160, 0)">
          <rect x="0" y="40" width="15" height="40" fill="#dc2626" />
          <rect x="20" y="30" width="15" height="50" fill="#93c5fd" />
          <rect x="40" y="50" width="15" height="30" fill="#818cf8" />
        </g>

        <g transform="translate(220, 0)">
          <rect x="0" y="30" width="15" height="50" fill="#dc2626" />
          <rect x="20" y="10" width="15" height="70" fill="#93c5fd" />
          <rect x="40" y="30" width="15" height="50" fill="#818cf8" />
        </g>
      </g>
    </svg>
  )
}

