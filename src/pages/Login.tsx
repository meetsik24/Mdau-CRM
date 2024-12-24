import React, { useState } from 'react';
import { MessageCircle, AlertCircle } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import { validateCredentials } from '../utils/auth';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = (email: string, password: string) => {
    const user = validateCredentials(email, password);
    if (user) {
      login({
        id: '1', // Mock ID
        name: user.name,
        email: user.email,
        company: user.company
      });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <MessageCircle className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to CommHub
        </h2>
        {error && (
          <div className="mt-4 flex items-center justify-center text-sm text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}
        <div className="mt-2 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <code className="mt-1 block bg-gray-100 p-2 rounded">
            Email: demo@commhub.com<br />
            Password: demo1234
          </code>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}