import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function Navigation({ currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [consultingDropdownOpen, setConsultingDropdownOpen] = useState(false)
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false)
  const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false)
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false)

  const isActive = (page) => currentPage === page

  return (
    <header className="max-w-[90%] mx-auto rounded-xl bg-white/90 backdrop-blur-sm sticky top-8 z-[100] shadow-sm relative">
      <div className="mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/goVisibi-icon.svg" alt="VISIBI Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold bg-slate-950 bg-clip-text text-transparent">VISIBI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 px-4">
          {/* <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('home')
                ? 'text-blue-600'
                : 'text-slate-900 hover:text-blue-600'
            }`}
          >
            Home
          </Link> */}

     {/* Consulting Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setConsultingDropdownOpen(true)}
            onMouseLeave={() => setConsultingDropdownOpen(false)}
          >
            <button
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isActive('geo') || isActive('seo') || isActive('ppc')
                  ? 'text-blue-600'
                  : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Consulting
              <ChevronDown className="h-4 w-4" />
            </button>

            {consultingDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[332px] z-[150]">
                <div className="h-2"></div>
                <div className="bg-white border border-slate-200 rounded-lg shadow-xl">
                  <div className="py-2">
                    <Link
                      to="/geo"
                      onClick={() => setConsultingDropdownOpen(false)}
                      className="block px-6 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                    >
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        GEO
                      </h3>
                      <p className="text-sm text-slate-600">
                        Generative Engine Optimization for AI platforms
                      </p>
                    </Link>

                    <Link
                      to="/seo"
                      onClick={() => setConsultingDropdownOpen(false)}
                      className="block px-6 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                    >
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        SEO
                      </h3>
                      <p className="text-sm text-slate-600">
                        Search Engine Optimization that feeds AI visibility
                      </p>
                    </Link>

                    <Link
                      to="/ppc"
                      onClick={() => setConsultingDropdownOpen(false)}
                      className="block px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        PPC
                      </h3>
                      <p className="text-sm text-slate-600">
                        Paid advertising strategies for maximum ROI
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatformDropdownOpen(true)}
            onMouseLeave={() => setPlatformDropdownOpen(false)}
          >
            <button
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isActive('tool')
                  ? 'text-blue-600'
                  : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              Platform
              <ChevronDown className="h-4 w-4" />
            </button>

            {platformDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[332px] z-[150]">
                <div className="h-2"></div>
                <div className="bg-white border border-slate-200 rounded-lg shadow-xl">
                  <div className="py-2">
                    <Link
                      to="/tool"
                      onClick={() => setPlatformDropdownOpen(false)}
                      className="block px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="text-base font-semibold text-slate-900 mb-1">
                        Tool
                      </h3>
                      <p className="text-sm text-slate-600">
                        Track and measure your AI visibility
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/insights"
            className={`text-sm font-medium transition-colors ${
              isActive('insights')
                ? 'text-blue-600'
                : 'text-slate-900 hover:text-blue-600'
            }`}
          >
            Insights
          </Link>

          <Link
            to="/how-we-work"
            className={`text-sm font-medium transition-colors ${
              isActive('how-we-work')
                ? 'text-blue-600'
                : 'text-slate-900 hover:text-blue-600'
            }`}
          >
            How We Work
          </Link>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive('about')
                ? 'text-blue-600'
                : 'text-slate-900 hover:text-blue-600'
            }`}
          >
            About
          </Link>


        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white backdrop-blur-sm">
          <nav className="px-6 py-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                isActive('home')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>

            {/* Mobile Consulting Section */}
            <div>
              <button
                onClick={() => setMobileConsultingOpen(!mobileConsultingOpen)}
                className={`w-full flex items-center justify-between text-base font-medium transition-colors py-2 ${
                  isActive('geo') || isActive('seo') || isActive('ppc')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Consulting
                {mobileConsultingOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {mobileConsultingOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/geo"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm transition-colors py-2 ${
                      isActive('geo')
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    GEO - Generative Engine Optimization
                  </Link>

                  <Link
                    to="/seo"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm transition-colors py-2 ${
                      isActive('seo')
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    SEO - Search Engine Optimization
                  </Link>

                  <Link
                    to="/ppc"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm transition-colors py-2 ${
                      isActive('ppc')
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    PPC - Pay-Per-Click Advertising
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Platform Section */}
            <div>
              <button
                onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                className={`w-full flex items-center justify-between text-base font-medium transition-colors py-2 ${
                  isActive('tool')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Platform
                {mobilePlatformOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {mobilePlatformOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/tool"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm transition-colors py-2 ${
                      isActive('tool')
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Tool - AI Visibility Tracking
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                isActive('insights')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Insights
            </Link>

            <Link
              to="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                isActive('how-we-work')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              How We Work
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                isActive('about')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
