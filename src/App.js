import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Crown, ArrowRight, ChevronLeft } from 'lucide-react';

const CheckoutPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState('plan-selection');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleProceedToCheckout = () => {
    setCheckoutStep('payment');
  };

  const handleBackToPlanSelection = () => {
    setCheckoutStep('plan-selection');
  };

  const PlanSelection = () => (
    <>
      <div className="text-white mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl opacity-90">Get unlimited access to cutting-edge AI models</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Starter Plan */}
        <Card 
          className={`bg-white/10 backdrop-blur-lg border-0 text-white cursor-pointer transition-transform hover:scale-105 
            ${selectedPlan === 'starter' ? 'ring-2 ring-purple-400' : ''}`}
          onClick={() => handlePlanSelect('starter')}
        >
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Star className="text-purple-300" />
              Starter Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold mb-2">
                  $6.99<span className="text-lg font-normal">/month</span>
                </div>
                <div className="text-purple-200">Perfect for individual use</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>Access to basic AI models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>100 conversations per day</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>Standard support</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card 
          className={`bg-white/10 backdrop-blur-lg border-0 text-white cursor-pointer transition-transform hover:scale-105
            ${selectedPlan === 'pro' ? 'ring-2 ring-purple-400' : ''}`}
          onClick={() => handlePlanSelect('pro')}
        >
          <CardHeader>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Crown className="text-yellow-400" />
              Pro Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold mb-2">
                  $24.99<span className="text-lg font-normal">/month</span>
                </div>
                <div className="text-purple-200">For power users & teams</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>Access to ALL AI models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>Unlimited conversations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>Priority 24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-purple-300" size={20} />
                  <span>Advanced features & API access</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button 
          className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white border-0 h-12 px-8"
          onClick={handleProceedToCheckout}
          disabled={!selectedPlan}
        >
          <span className="flex items-center gap-2">
            Continue to Payment <ArrowRight size={20} />
          </span>
        </Button>
      </div>
    </>
  );

  const PaymentSection = () => (
    <>
      <Button 
        variant="ghost" 
        className="text-white mb-6"
        onClick={handleBackToPlanSelection}
      >
        <ChevronLeft className="mr-2" /> Back to Plans
      </Button>

      <Card className="bg-white/10 backdrop-blur-lg border-0 text-white max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Complete Your Purchase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-purple-900/50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span>{selectedPlan === 'starter' ? 'Starter Plan' : 'Pro Plan'}</span>
                <span className="font-bold">
                  ${selectedPlan === 'starter' ? '6.99' : '24.99'}/month
                </span>
              </div>
              <div className="text-sm text-purple-200">
                7-day free trial • Cancel anytime
              </div>
            </div>

            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <Button className="w-full bg-[#0070ba] hover:bg-[#003087] text-white border-0 h-12 flex items-center justify-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 124 33"
                  className="h-6 w-24"
                  fill="currentColor"
                >
                  <path d="M46.211 6.749h-6.839a.95.95 0 00-.939.802l-2.766 17.537a.57.57 0 00.564.658h3.265a.95.95 0 00.939-.803l.746-4.73a.95.95 0 01.938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 01.563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 00-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.562.66h2.95a.95.95 0 00.939-.803l1.77-11.209a.568.568 0 00-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 00-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 00-.912-.678h-3.234a.57.57 0 00-.541.754l3.625 10.638-3.408 4.811a.57.57 0 00.465.9h3.287a.949.949 0 00.781-.408l10.946-15.8a.57.57 0 00-.468-.895z" fill="#fff"/>
                  <path d="M94.992 6.749h-6.84a.95.95 0 00-.938.802l-2.766 17.537a.569.569 0 00.562.658h3.51a.665.665 0 00.656-.562l.785-4.971a.95.95 0 01.938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 01.562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 00-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 00.564.66h2.949a.95.95 0 00.938-.803l1.771-11.209a.571.571 0 00-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219l-2.807 17.858a.57.57 0 00.562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 00-.562-.659h-3.16a.571.571 0 00-.562.482z" fill="#fff"/>
                  <path d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 01.314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 011.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 01-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 00-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 01-.096.035H7.266z" fill="#fff"/>
                </svg>
                Pay with PayPal
              </Button>

              <div className="text-center text-sm text-white/60">
                By continuing, you agree to our Terms of Service
                <br />
                and acknowledge our Privacy Policy
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-6">
      <div className="max-w-5xl mx-auto">
        {checkoutStep === 'plan-selection' ? <PlanSelection /> : <PaymentSection />}
      </div>
    </div>
  );
};

export default App;
