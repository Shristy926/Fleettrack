// src/features/users/pages/LoginPage.tsx
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/authService";
import { setToken } from "../../../Utils/tokenUtils"; // ✅ FIXED
import Button from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { useEffect, useRef, useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await login({ email, password }); // 🔥 POST body only
      setToken(data.jwtToken); // 🔐 Save token
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-full max-w-md shadow">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full border p-2 rounded mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="w-full border p-2 rounded mb-4"
            />
            {error && <div className="text-red-500 mb-3">{error}</div>}
            <Button type="submit" isLoading={loading} className="w-full">
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
