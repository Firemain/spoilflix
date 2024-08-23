"use client";

import { signup } from '@/actions/auth-actions';
import { useState } from 'react';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
  
    const checkPasswordStrength = (pwd) => {
      let strength = 0;
  
      if (pwd.length > 8) strength += 1;
      if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength += 1;
      if (pwd.match(/[0-9]/)) strength += 1;
      if (pwd.match(/[!@#$%^&*(),.?":{}|<>]/)) strength += 1;
      if (pwd.length > 12) strength += 1;
  
      setPasswordStrength(strength);
    };
  
    const handlePasswordChange = (e) => {
      const pwd = e.target.value;
      setPassword(pwd);
      checkPasswordStrength(pwd);
    };
  
    const renderStrengthBars = () => {
      const bars = [];
      for (let i = 0; i < 5; i++) {
        bars.push(
          <div
            key={i}
            className={`h-1 w-4 rounded ${i < passwordStrength ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gray-300'
              }`}
          ></div>
        );
      }
      return bars;
    };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-purple-800">
          {isLogin ? 'Connexion' : 'Créer un compte'}
        </h2>

        <form className="mt-6" action={signup} >
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-purple-700">Nom complet</label>
              <input
                type="text"
                className="w-full px-4 text-purple-700 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Votre username"
                name='username'
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-purple-700">Adresse e-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-purple-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Votre e-mail"
              name='email'
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-700">Mot de passe</label>
            {!isLogin &&
            <label className='text-xs text-purple-950 italic'>Doit contenir au moins 8 caractères et un symbole spécial.</label>
            }
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 mt-2 border rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Votre mot de passe"
              name='password'
            />
            {!isLogin &&
            <div className="flex flex-col space-x-1 mt-2">
                <div className="flex space-x-1">
                    {renderStrengthBars()}
                </div>
            </div>
        }
          </div>

          <button className="w-full py-2 mt-4 text-white bg-purple-700 hover:bg-purple-800 rounded-md transition duration-300">
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="text-sm text-purple-600">
            {isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-800 font-semibold hover:underline focus:outline-none"
            >
              {isLogin ? 'Créer un compte' : 'Se connecter'}
            </button>
            {isLogin && <div className="text-xs text-purple-950 italic">Mot de passe oublié ?</div>}

          </div>
        </div>
      </div>
    </div>
  );
}
