import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { LogIn } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();



  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    // Temporary validation
    if (email === 'demo@example.com' && password === 'password') {
      // Simulate setting token (optional)
      localStorage.setItem("token", "demo-token");
      
      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      throw new Error('Invalid credentials. Use demo@example.com / password');
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred during login');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className= "min-h-screen min-w-screen bg-blue-600 items-center justify-center p-4" >

    <Card className="w-full max-w-md shadow-xl border border-blue-100" >
      <CardContent className="p-8" >
        <div className="text-center mb-8" >
          <h1 className="text-3xl font-bold text-blue-900 mt-4" > Login </h1>

            < p className = "text-xs text-blue-500 mt-2" >
                  Use  demo @example.com password  to login
                </p>
              </div>

                < form onSubmit = { handleLogin } className = "space-y-5" >
                  <div>
                  <label htmlFor="email" className = "block text-sm font-medium text-gray-700 mb-1" >
                    Email address
                      </label>
                      < input
  id = "email"
  type = "email"
  value = { email }
  onChange = {(e) => setEmail(e.target.value)}
className = "w-full px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
required
  />
  </div>

  < div >
  <label htmlFor="password" className = "block text-sm font-medium text-gray-700 mb-1" >
    Password
    </label>
    < input
id = "password"
type = "password"
value = { password }
onChange = {(e) => setPassword(e.target.value)}
className = "w-full px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
required
  />
  </div>

{
  error && (
    <div className="bg-red-100 text-red-600 p-3 rounded-md text-sm border border-red-200" >
      { error }
      </div>
            )
}

<Button
              type="submit"
size = "lg"
className = "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
isLoading = { loading }
  >
  Sign in
  </Button>
  </form>
  </CardContent>
  </Card>
  </div>
  );
};

export default LoginPage;