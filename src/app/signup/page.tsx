export const metadata = {
  title: 'Sign Up | FindDoc Hong Kong',
  description: 'Create your FindDoc account to book appointments easily',
}

export default function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center py-10 px-5 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <div className="bg-white rounded-2xl p-12 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Find<span className="text-secondary">Doc</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h2>
          <p className="text-gray-600">Join FindDoc to book appointments easily</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">First Name</label>
              <input 
                type="text" 
                placeholder="First name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Last Name</label>
              <input 
                type="text" 
                placeholder="Last name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+852 xxxx xxxx"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Create a password (min 8 characters)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              required
              minLength={8}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
          
          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 rounded" required />
            <span>I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Use</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></span>
          </label>
          
          <button 
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-sm">
            📧 Google
          </button>
          <button className="flex-1 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-sm">
            📘 Facebook
          </button>
          <button className="flex-1 py-3 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-sm">
            🍎 Apple
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-primary font-semibold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
