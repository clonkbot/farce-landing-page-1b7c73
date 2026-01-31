import React, { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for signing up with: ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30">
      {/* Header Navigation */}
      <header className="max-w-6xl mx-auto px-6 py-4">
        <nav className="bg-white rounded-full shadow-sm border border-gray-100 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">▶</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">farce</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Customers</a>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors">
              Use Cases
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Pricing</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Log in</a>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Try for free
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-8">
        {/* Pixel Art Garden Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg">
          <div 
            className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
                  <defs>
                    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#87CEEB"/>
                      <stop offset="100%" style="stop-color:#E0F4FF"/>
                    </linearGradient>
                  </defs>
                  <rect fill="url(#sky)" width="800" height="500"/>
                  <!-- Clouds -->
                  <ellipse cx="200" cy="100" rx="80" ry="40" fill="white" opacity="0.9"/>
                  <ellipse cx="250" cy="90" rx="60" ry="35" fill="white" opacity="0.9"/>
                  <ellipse cx="500" cy="80" rx="100" ry="50" fill="white" opacity="0.9"/>
                  <ellipse cx="580" cy="70" rx="70" ry="40" fill="white" opacity="0.9"/>
                  <!-- Ground -->
                  <rect fill="#90EE90" y="350" width="800" height="150"/>
                  <rect fill="#7CCD7C" y="380" width="800" height="120"/>
                  <!-- Trees left -->
                  <ellipse cx="50" cy="280" rx="60" ry="100" fill="#228B22"/>
                  <ellipse cx="120" cy="300" rx="50" ry="80" fill="#2E8B2E"/>
                  <!-- Cypress trees -->
                  <ellipse cx="250" cy="280" rx="20" ry="100" fill="#2F4F2F"/>
                  <ellipse cx="350" cy="300" rx="15" ry="80" fill="#2F4F2F"/>
                  <!-- Roman columns -->
                  <rect fill="#DEB887" x="500" y="200" width="30" height="180"/>
                  <rect fill="#D2B48C" x="580" y="180" width="35" height="200"/>
                  <rect fill="#DEB887" x="670" y="220" width="28" height="160"/>
                  <!-- Column tops -->
                  <rect fill="#F5DEB3" x="495" y="190" width="40" height="20"/>
                  <rect fill="#F5DEB3" x="575" y="170" width="45" height="20"/>
                  <rect fill="#F5DEB3" x="665" y="210" width="38" height="20"/>
                  <!-- Statue -->
                  <rect fill="#E8E8E8" x="390" y="280" width="40" height="100"/>
                  <ellipse cx="410" cy="260" rx="25" ry="30" fill="#F0F0F0"/>
                  <!-- Flowers -->
                  <circle cx="150" cy="400" r="5" fill="#FF6B6B"/>
                  <circle cx="180" cy="420" r="4" fill="#FFE66D"/>
                  <circle cx="220" cy="410" r="5" fill="#FF6B6B"/>
                  <circle cx="280" cy="430" r="4" fill="#4ECDC4"/>
                  <circle cx="320" cy="400" r="5" fill="#FFE66D"/>
                  <circle cx="450" cy="420" r="4" fill="#FF6B6B"/>
                  <circle cx="500" cy="400" r="5" fill="#4ECDC4"/>
                  <!-- Path -->
                  <path d="M400 500 Q350 450 380 400 Q420 350 400 300" fill="#D2B48C" opacity="0.6"/>
                  <!-- Trees right -->
                  <ellipse cx="750" cy="250" rx="70" ry="120" fill="#228B22"/>
                </svg>
              `)}')`,
            }}
          >
            {/* Pixel art overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
          </div>
          
          {/* Decorative pixel art garden scene rendered with divs */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PixelGarden />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start pb-20">
          {/* Left Column - Headline */}
          <div>
            {/* 
              STYLE DESCRIPTION FOR HEADER:
              - Font: Clean sans-serif (Inter), very large size (~56-64px)
              - Weight: Regular (400) for most text, creating elegant lightness
              - Color: Pure black (#000) for maximum contrast
              - Letter-spacing: Tight/normal, not spread out
              - Line-height: Tight (1.1) for compact, impactful appearance
              - The word "forever" uses italic style for emphasis and elegance
              - Overall aesthetic: Modern, minimal, confident, sophisticated
            */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black leading-[1.1] tracking-tight">
              Say it once, watch AI agents do it{' '}
              <span className="italic">forever</span>
            </h1>
            
            {/* Company Logos */}
            <div className="mt-10">
              <p className="text-gray-500 text-sm mb-4">Used at global enterprises such as</p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded"></div>
                  <span className="font-semibold text-gray-800">monzo</span>
                </div>
                <span className="font-semibold text-gray-800 text-lg">Guild</span>
                <span className="font-bold text-gray-800 text-lg tracking-tight">CLEO</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-gray-800">trademe</span>
                  <span className="text-teal-500">✦</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">▪</span>
                  </div>
                  <span className="font-semibold text-gray-800">Paradigm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="md:pt-4">
            {/*
              STYLE DESCRIPTION FOR SUBHEADING:
              - Font: Same clean sans-serif (Inter)
              - Size: Medium (~18-20px), readable but not dominant  
              - Weight: Regular (400)
              - Color: Dark gray (#374151) - softer than black for hierarchy
              - Line-height: Relaxed (1.6) for comfortable reading
              - Purpose: Explains the product value proposition clearly
              - Tone: Professional, clear, benefit-focused
            */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              Automate sales, meetings, operations, support, and admin tasks without writing a line of code.
            </p>
            
            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 text-gray-800 placeholder-gray-400 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-medium transition-colors whitespace-nowrap"
              >
                Try for free
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

// Pixel Art Garden Component
function PixelGarden() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6BB5E0" />
          <stop offset="50%" stopColor="#9DD4F0" />
          <stop offset="100%" stopColor="#D4EFFF" />
        </linearGradient>
        <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7BC96F" />
          <stop offset="100%" stopColor="#5AA64C" />
        </linearGradient>
      </defs>
      
      {/* Sky */}
      <rect fill="url(#skyGradient)" width="800" height="500" />
      
      {/* Clouds */}
      <g opacity="0.95">
        <ellipse cx="180" cy="120" rx="90" ry="50" fill="white" />
        <ellipse cx="240" cy="100" rx="70" ry="45" fill="white" />
        <ellipse cx="280" cy="130" rx="60" ry="35" fill="white" />
        
        <ellipse cx="500" cy="90" rx="110" ry="60" fill="white" />
        <ellipse cx="580" cy="80" rx="80" ry="50" fill="white" />
        <ellipse cx="620" cy="110" rx="50" ry="30" fill="white" />
      </g>
      
      {/* Distant trees/hills */}
      <ellipse cx="700" cy="320" rx="120" ry="100" fill="#4A7C42" />
      <ellipse cx="750" cy="300" rx="80" ry="80" fill="#3D6B36" />
      
      {/* Ground */}
      <rect fill="url(#grassGradient)" y="360" width="800" height="140" />
      
      {/* Garden path */}
      <path d="M350 500 Q320 450 340 400 Q370 360 360 320" fill="#C9B896" stroke="#B8A67D" strokeWidth="2" opacity="0.8" />
      
      {/* Left trees */}
      <ellipse cx="30" cy="280" rx="70" ry="130" fill="#2D5A27" />
      <ellipse cx="80" cy="300" rx="55" ry="100" fill="#3A7233" />
      <ellipse cx="140" cy="320" rx="45" ry="80" fill="#2D5A27" />
      
      {/* Cypress trees */}
      <ellipse cx="220" cy="260" rx="22" ry="120" fill="#1F3D1A" />
      <ellipse cx="300" cy="280" rx="18" ry="100" fill="#264D20" />
      <ellipse cx="440" cy="270" rx="20" ry="110" fill="#1F3D1A" />
      
      {/* Statue base */}
      <rect fill="#E8DCC8" x="355" y="340" width="50" height="20" rx="2" />
      <rect fill="#D4C8B4" x="360" y="280" width="40" height="60" />
      
      {/* Statue figure */}
      <ellipse cx="380" cy="260" rx="22" ry="28" fill="#F0EBE0" />
      <rect fill="#E8E3D8" x="365" y="220" width="30" height="50" />
      <ellipse cx="380" cy="210" rx="14" ry="16" fill="#F5F0E5" />
      
      {/* Roman columns */}
      <g>
        {/* Column 1 */}
        <rect fill="#D4A574" x="520" y="200" width="28" height="160" />
        <rect fill="#E8C9A0" x="518" y="190" width="32" height="15" rx="2" />
        <rect fill="#E8C9A0" x="518" y="355" width="32" height="12" rx="2" />
        
        {/* Column 2 */}
        <rect fill="#C99A65" x="590" y="180" width="32" height="180" />
        <rect fill="#DEBB8C" x="588" y="170" width="36" height="15" rx="2" />
        <rect fill="#DEBB8C" x="588" y="355" width="36" height="12" rx="2" />
        
        {/* Column 3 */}
        <rect fill="#D4A574" x="670" y="210" width="26" height="150" />
        <rect fill="#E8C9A0" x="668" y="200" width="30" height="15" rx="2" />
        <rect fill="#E8C9A0" x="668" y="355" width="30" height="12" rx="2" />
      </g>
      
      {/* Flowers and bushes */}
      <g>
        {/* Red flowers */}
        <circle cx="120" cy="390" r="6" fill="#E85D5D" />
        <circle cx="180" cy="410" r="5" fill="#E85D5D" />
        <circle cx="280" cy="395" r="6" fill="#E85D5D" />
        <circle cx="480" cy="400" r="5" fill="#E85D5D" />
        
        {/* Yellow flowers */}
        <circle cx="150" cy="405" r="4" fill="#F4D35E" />
        <circle cx="220" cy="420" r="5" fill="#F4D35E" />
        <circle cx="340" cy="410" r="4" fill="#F4D35E" />
        <circle cx="520" cy="420" r="5" fill="#F4D35E" />
        
        {/* Pink flowers */}
        <circle cx="200" cy="395" r="5" fill="#F5A3B5" />
        <circle cx="320" cy="400" r="4" fill="#F5A3B5" />
        <circle cx="450" cy="415" r="5" fill="#F5A3B5" />
        
        {/* Small bushes */}
        <ellipse cx="100" cy="380" rx="25" ry="15" fill="#4A8C42" />
        <ellipse cx="250" cy="385" rx="20" ry="12" fill="#3D7A36" />
        <ellipse cx="400" cy="375" rx="30" ry="18" fill="#4A8C42" />
        <ellipse cx="550" cy="380" rx="22" ry="14" fill="#3D7A36" />
      </g>
      
      {/* Birds */}
      <g fill="#2D3748" opacity="0.6">
        <path d="M620 150 Q625 145 630 150 Q635 145 640 150" fill="none" stroke="#2D3748" strokeWidth="2" />
        <path d="M580 180 Q585 175 590 180 Q595 175 600 180" fill="none" stroke="#2D3748" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default App