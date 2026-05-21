import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, Globe, Menu, X, LayoutDashboard, ChevronDown, Check } from 'lucide-react';
import { Modal } from './Modal';
import { AuthForm } from './AuthForm';

export function Header() {
  const [language, setLanguage] = useState<'en' | 'km'>('en');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | null>(null);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = {
    en: { label: 'English (EN)', short: 'EN' },
    km: { label: 'ភាសាខ្មែរ (KM)', short: 'KM' }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity Label */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
              🏠
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 tracking-tight leading-tight">RoomRental</h1>
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Management System</p>
            </div>
          </Link>

          {/* Desktop Utilities Actions tools */}
          <div className="hidden md:flex items-center gap-5">
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                isDashboard ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Admin Panel</span>
            </Link>

            <div className="h-4 w-[1px] bg-gray-200" />

            {/* Custom Language Menu Component dropdown setup */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-700 transition-all focus:outline-none"
              >
                <Globe size={14} className="text-gray-500" />
                <span>{languages[language].short}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-50">
                  {(Object.keys(languages) as Array<'en' | 'km'>).map((key) => (
                    <button
                      key={key}
                      onClick={() => { setLanguage(key); setIsLangDropdownOpen(false); }}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span>{languages[key].label}</span>
                      {language === key && <Check size={14} className="text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Verification triggers buttons panel components shortcut */}
            <button 
              onClick={() => setAuthModalMode('login')}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all"
            >
              <LogIn size={16} />
              <span>Log In</span>
            </button>

            <button 
              onClick={() => setAuthModalMode('signup')}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <UserPlus size={16} />
              <span>Sign Up</span>
            </button>
          </div>

          {/* Mobile Hamburguer Display Toggle button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Box view details code container */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-4 shadow-inner">
          <Link
            to="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl text-gray-700 hover:bg-gray-50"
          >
            <LayoutDashboard size={18} />
            <span>Admin Panel</span>
          </Link>

          <div className="border-t border-gray-100 pt-4 flex items-center justify-between px-4">
            <span className="text-sm font-medium text-gray-500 flex items-center gap-2"><Globe size={16} /> Language</span>
            <div className="flex gap-2">
              {(['en', 'km'] as const).map(ln => (
                <button 
                  key={ln} 
                  onClick={() => setLanguage(ln)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border ${language === ln ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-600'}`}
                >
                  {ln.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button onClick={() => { setIsMobileMenuOpen(false); setAuthModalMode('login'); }} className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gray-200 text-sm font-semibold text-gray-700 rounded-xl">Log In</button>
            <button onClick={() => { setIsMobileMenuOpen(false); setAuthModalMode('signup'); }} className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl">Sign Up</button>
          </div>
        </div>
      )}

      {/* Main Authentication System Modal Popups */}
      <Modal 
        isOpen={authModalMode !== null} 
        onClose={() => setAuthModalMode(null)} 
        title={authModalMode === 'login' ? "Welcome Back" : "Create Modern Account"}
      >
        {authModalMode && (
          <AuthForm 
            mode={authModalMode} 
            onSwitchMode={(mode) => setAuthModalMode(mode)} 
            onSuccess={() => setAuthModalMode(null)} 
          />
        )}
      </Modal>
    </header>
  );
}