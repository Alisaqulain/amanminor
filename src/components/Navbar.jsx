import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userNavLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/live-scores', label: 'Live Scores', icon: '📊' },
    { path: '/history', label: 'Match History', icon: '📜' },
    { path: '/dashboard', label: 'Dashboard', icon: '📈' },
    { path: '/scoring', label: 'Match Scoring', icon: '⚾' },
    { path: '/player-stats', label: 'Player Stats', icon: '👤' },
    { path: '/summary', label: 'Score Summary', icon: '📋' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  const adminNavLinks = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/matches', label: 'Manage Matches', icon: '🏏' },
    { path: '/admin/teams', label: 'Manage Teams', icon: '👥' },
    { path: '/admin/reports', label: 'Reports', icon: '📈' },
  ];

  const navLinks = isAdminRoute ? adminNavLinks : userNavLinks;

  return (
    <nav className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to={isAdminRoute ? '/admin' : '/'} 
            className="flex items-center space-x-3 group"
          >
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg group-hover:bg-white/30 transition-all">
              <span className="text-3xl">🏏</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">Cricket Scoreboard</div>
              <div className="text-xs text-primary-200 font-medium">Live Updates</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  location.pathname === link.path
                    ? 'bg-white/20 backdrop-blur-sm shadow-lg scale-105'
                    : 'hover:bg-white/10 hover:scale-105'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
            {!isAdminRoute && (
              <Link
                to="/admin/login"
                className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-500 hover:bg-accent-600 text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                🔐 Admin
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center space-x-3 ${
                    location.pathname === link.path
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
              {!isAdminRoute && (
                <Link
                  to="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-semibold bg-accent-500 hover:bg-accent-600 text-gray-900 mt-2"
                >
                  🔐 Admin Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
