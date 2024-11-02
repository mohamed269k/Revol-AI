import { useState } from 'react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-lg text-center no-underline cursor-pointer select-none";
    
    const variants = {
      primary: "bg-white text-purple-600 hover:bg-gray-100 active:bg-gray-200 shadow-lg hover:shadow-xl",
      secondary: "bg-purple-700/30 text-white hover:bg-purple-700/40 active:bg-purple-700/50 backdrop-blur-sm",
      outline: "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white backdrop-blur-sm",
      purple: "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 shadow-lg hover:shadow-xl"
    };

    return (
      <button 
        className={`${baseStyles} ${variants[variant]} transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800 pb-32">
        {/* Navigation Bar */}
        <div className="sticky top-0 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-6 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-2xl font-bold">R</span>
                </div>
                <span className="text-2xl font-bold text-white">Revol</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-200 hover:text-white transition-colors duration-200">Features</a>
                <a href="#pricing" className="text-gray-200 hover:text-white transition-colors duration-200">Pricing</a>
                <a href="#about" className="text-gray-200 hover:text-white transition-colors duration-200">About</a>
                <Button variant="outline" className="px-4 py-2">Login</Button>
                <Button variant="primary" className="px-4 py-2">Sign Up</Button>
              </div>

              <Button 
                variant="outline"
                className="md:hidden p-2 relative z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            {/* Mobile Menu - Fixed positioning with proper z-index */}
            {isMobileMenuOpen && (
              <div className="fixed inset-x-0 top-[80px] p-4 z-40 md:hidden">
                <div className="bg-purple-900/95 backdrop-blur-lg rounded-lg shadow-xl p-4 border border-purple-800/50">
                  <div className="flex flex-col space-y-4">
                    <a href="#features" className="text-gray-200 hover:text-white transition-colors duration-200 p-2">Features</a>
                    <a href="#pricing" className="text-gray-200 hover:text-white transition-colors duration-200 p-2">Pricing</a>
                    <a href="#about" className="text-gray-200 hover:text-white transition-colors duration-200 p-2">About</a>
                    <Button variant="outline" className="w-full py-2">Login</Button>
                    <Button variant="primary" className="w-full py-2">Sign Up</Button>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-20 text-center">
          <div className="inline-block mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
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
            <Button 
              variant="primary"
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              Start Now - Just $6.99/month
            </Button>
            <Button 
              variant="secondary"
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              View Demo →
            </Button>
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
        {/* Features content */}
      </section>

      {/* Logos Section */}
      <section className="py-16 border-t border-gray-100">
        {/* Logos content */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-2xl font-bold">R</span>
                </div>
                <span className="text-2xl font-bold text-white">Revol</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing AI access with a unified platform for all your artificial intelligence needs.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="p-2 hover:bg-white/20">
                  
                </Button>
                <Button variant="outline" className="p-2 hover:bg-white/20">
                  
                </Button>
                <Button variant="outline" className="p-2 hover:bg-white/20
                </Button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Press</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for AI insights and updates.</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
                />
                <Button variant="purple" className="p-2">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                © 2024 Revol AI. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
