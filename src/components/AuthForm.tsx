import { useState } from 'react';
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSwitchMode: (mode: 'login' | 'signup') => void;
  onSuccess: () => void;
}

export function AuthForm({ mode, onSwitchMode, onSuccess }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending login data package records:', { email, mode });
    onSuccess();
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {mode === 'signup' && (
          <>
            {/* User Real Name Identifier Textbox Input field */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Full Name</label>
              <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
                <User size={15} className="absolute left-3.5 text-gray-400" />
                <input 
                  type="text" 
                  required
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-transparent outline-none text-gray-700" 
                />
              </div>
            </div>

            {/* Mobile Contact String Phone Textbox Input field */}
            <div>
              <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Phone Number</label>
              <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
                <Phone size={15} className="absolute left-3.5 text-gray-400" />
                <input 
                  type="tel" 
                  required
                  placeholder="Enter phone line number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-transparent outline-none text-gray-700" 
                />
              </div>
            </div>
          </>
        )}

        {/* Global E-Mail Coordinate String Input block component item */}
        <div>
          <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Email Address</label>
          <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
            <Mail size={15} className="absolute left-3.5 text-gray-400" />
            <input 
              type="email" 
              required
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-transparent outline-none text-gray-700" 
            />
          </div>
        </div>

        {/* Dynamic Security Password Input component section wrapper block */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider">Password</label>
            {mode === 'login' && (
              <a href="#" className="text-[10px] font-bold text-blue-600 hover:underline">Forgot?</a>
            )}
          </div>
          <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
            <Lock size={15} className="absolute left-3.5 text-gray-400" />
            <input 
              type={showPassword ? 'text' : 'password'} 
              required
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs bg-transparent outline-none text-gray-700" 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Primary Operations Matrix workflow processing submit toggle action handler button */}
        <button 
          type="submit" 
          className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
        >
          <span>{mode === 'login' ? 'Confirm Login' : 'Complete Sign Up'}</span>
          <ArrowRight size={14} />
        </button>
      </form>

      {/* Navigation Switch Mode Controller interface footbar elements references */}
      <div className="border-t border-gray-100 pt-3.5 text-center">
        <p className="text-xs text-gray-500">
          {mode === 'login' ? "New to our platform?" : "Already registered with us?"}{' '}
          <button
            type="button"
            onClick={() => onSwitchMode(mode === 'login' ? 'signup' : 'login')}
            className="font-bold text-blue-600 hover:underline focus:outline-none cursor-pointer"
          >
            {mode === 'login' ? 'Create Account' : 'Log In Here'}
          </button>
        </p>
      </div>
    </div>
  );
}