

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800 pb-32">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-2xl font-bold">R</span>
              </div>
              <span className="text-2xl font-bold text-white">Revol</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-200 hover:text-white">Features</a>
              <a href="#pricing" className="text-gray-200 hover:text-white">Pricing</a>
              <a href="#about" className="text-gray-200 hover:text-white">About</a>
              <a href="#login" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg">Login</a>
              <a href="#signup" className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100">Sign Up</a>
            </div>

            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-20 text-center">
          <div className="inline-block mb-8 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            🚀 Experience the future of AI, all in one place
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            One Subscription.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
              All AI Models.
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Access ChatGPT, Claude, and every major AI model through a single powerful subscription. 
            No more juggling multiple services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
              Start Now - Just $6.99/month
            </button>
            <button className="w-full sm:w-auto bg-purple-700/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700/40">
              View Demo →
            </button>
          </div>

          <p className="text-gray-300 text-sm">
            No credit card required • Cancel anytime • 7-day free trial
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50k+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-medium mb-4">
              Why Choose Revol?
            </div>
            <h2 className="text-4xl font-bold mb-6">One Platform, Endless AI Possibilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of multiple AI models without the complexity of managing multiple subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "All Major AI Models",
                description: "Access ChatGPT, Claude, and other leading AI models through one seamless interface.",
                features: ["GPT-4 & Claude Integration", "Unified API Access"]
              },
              {
                icon: "💰",
                title: "Cost-Effective",
                description: "Save up to 70% compared to individual subscriptions while getting more features.",
                features: ["Transparent Pricing", "No Hidden Fees"]
              },
              {
                icon: "🚀",
                title: "Unlimited Usage",
                description: "No tokens, no limits. Use AI as much as you need with our unlimited plan.",
                features: ["24/7 Availability", "No Usage Restrictions"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <img src="/api/placeholder/120/40" alt="Company logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company logo" className="h-8" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
