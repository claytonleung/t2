export const metadata = {
  title: 'Log In | FindDoc Hong Kong',
  description: 'Log in to manage your appointments',
}

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center py-10 px-5 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <div className="bg-white rounded-2xl p-12 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Find<span className="text-secondary">Doc</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Log in to manage your appointments</p>
        </div>

        {/* User Type Tabs */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          <button className="flex-1 py-3 text-center rounded-md bg-white text-primary font-medium shadow-sm">
            Patient
          </button>
          <button className="flex-1 py-3 text-center rounded-md text-gray-600 font-medium hover:bg-gray-50">
            Doctor
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
            />
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Log In
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
          Don't have an account? <a href="/signup" className="text-primary font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
