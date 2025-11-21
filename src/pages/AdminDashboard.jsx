import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Matches', value: '127', icon: '🏏', color: 'from-blue-500 to-blue-600', change: '+12', changeColor: 'text-blue-600' },
    { label: 'Total Players', value: '245', icon: '👤', color: 'from-primary-500 to-primary-600', change: '+8', changeColor: 'text-primary-600' },
    { label: 'Total Teams', value: '12', icon: '👥', color: 'from-accent-500 to-accent-600', change: '+2', changeColor: 'text-accent-600' },
    { label: 'Active Users', value: '89', icon: '👥', color: 'from-purple-500 to-purple-600', change: '+5', changeColor: 'text-purple-600' },
  ];

  const recentMatches = [
    { id: 1, team1: 'India', team2: 'Australia', date: '2024-11-15', status: 'Completed' },
    { id: 2, team1: 'England', team2: 'Pakistan', date: '2024-11-14', status: 'Completed' },
    { id: 3, team1: 'New Zealand', team2: 'South Africa', date: '2024-11-13', status: 'Live' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage your cricket scoreboard system</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} text-white text-3xl p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <span className={`${stat.changeColor} text-sm font-bold bg-gray-100 px-2 py-1 rounded-lg`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2 font-medium">{stat.label}</p>
              <p className="text-4xl font-bold text-gray-800 group-hover:scale-110 transition-transform inline-block">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Matches */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-soft p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Matches</h2>
              <Link to="/admin/matches" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2">
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>
            <div className="space-y-3">
              {recentMatches.map((match) => (
                <div key={match.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all border border-gray-100">
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg">
                      {match.team1} vs {match.team2}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{match.date}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    match.status === 'Live'
                      ? 'bg-red-100 text-red-700 animate-pulse'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {match.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/admin/matches"
                  className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 border border-white/30"
                >
                  🏏 Manage Matches
                </Link>
                <Link
                  to="/admin/teams"
                  className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 border border-white/30"
                >
                  👥 Manage Teams
                </Link>
                <Link
                  to="/admin/reports"
                  className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 border border-white/30"
                >
                  📊 View Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
