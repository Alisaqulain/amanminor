import { Link } from 'react-router-dom';

const Home = () => {
  const latestMatches = [
    { id: 1, team1: 'India', team2: 'Australia', score: '245/3 vs 198/7', status: 'Live', winner: null, venue: 'Wankhede Stadium' },
    { id: 2, team1: 'England', team2: 'Pakistan', score: '320/5 vs 280/9', status: 'Completed', winner: 'England', venue: 'Lord\'s' },
    { id: 3, team1: 'New Zealand', team2: 'South Africa', score: '289/6 vs 275/8', status: 'Completed', winner: 'New Zealand', venue: 'Eden Park' },
  ];

  const features = [
    { icon: '📊', title: 'Live Scores', desc: 'Real-time match updates', link: '/live-scores', color: 'from-blue-500 to-blue-600' },
    { icon: '📜', title: 'Match History', desc: 'Browse past matches', link: '/history', color: 'from-purple-500 to-purple-600' },
    { icon: '👤', title: 'Player Stats', desc: 'Detailed statistics', link: '/player-stats', color: 'from-green-500 to-green-600' },
    { icon: '⚾', title: 'Match Scoring', desc: 'Score matches live', link: '/scoring', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block mb-8 animate-bounce">
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-2xl border-2 border-white/40">
              <span className="text-7xl">🏏</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
              Cricket Scoreboard
            </span>
            <br />
            <span className="text-5xl md:text-6xl text-primary-100">System</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Track live scores, match history, and player statistics in real-time. 
            Your ultimate cricket companion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="/live-scores"
              className="group bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-glow flex items-center justify-center space-x-2"
            >
              <span>📊</span>
              <span>View Live Scores</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/dashboard"
              className="group bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/40 flex items-center justify-center space-x-2"
            >
              <span>📈</span>
              <span>Go to Dashboard</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border-2 border-white/30 shadow-xl">
              <div className="text-3xl font-bold">127</div>
              <div className="text-sm text-white font-semibold">Matches</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border-2 border-white/30 shadow-xl">
              <div className="text-3xl font-bold">245</div>
              <div className="text-sm text-white font-semibold">Players</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border-2 border-white/30 shadow-xl">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-white font-semibold">Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Matches */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-2">Latest Matches</h2>
            <p className="text-gray-600">Stay updated with recent cricket action</p>
          </div>
          <Link 
            to="/history" 
            className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold bg-primary-50 px-6 py-3 rounded-xl hover:bg-primary-100 transition-all"
          >
            <span>View All</span>
            <span>→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestMatches.map((match, index) => (
            <div 
              key={match.id} 
              className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                  match.status === 'Live' 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-green-500 text-white'
                }`}>
                  {match.status}
                </span>
              </div>

              {/* Match Info */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">{match.venue}</div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors mb-4">
                  {match.team1} <span className="text-gray-400">vs</span> {match.team2}
                </h3>
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 font-bold text-lg">{match.score}</p>
                </div>
                {match.winner && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Winner:</span>
                    <span className="text-sm font-bold text-primary-700 bg-primary-100 px-3 py-1 rounded-lg">
                      {match.winner}
                    </span>
                  </div>
                )}
              </div>

              <Link
                to="/summary"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-2 transition-transform"
              >
                <span>View Details</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Quick Navigation</h2>
            <p className="text-xl text-gray-600">Access all features with one click</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${feature.color} text-white text-6xl p-6 rounded-3xl mb-6 mx-auto w-24 h-24 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
