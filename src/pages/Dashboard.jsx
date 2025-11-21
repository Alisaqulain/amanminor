import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { label: 'Total Matches', value: '127', icon: '🏏', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
    { label: 'Live Matches', value: '3', icon: '📊', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50' },
    { label: 'Total Players', value: '245', icon: '👤', color: 'from-primary-500 to-primary-600', bgColor: 'bg-primary-50' },
    { label: 'Total Teams', value: '12', icon: '👥', color: 'from-accent-500 to-accent-600', bgColor: 'bg-accent-50' },
  ];

  const recentActivity = [
    { type: 'Match', description: 'India vs Australia - Match Started', time: '2 hours ago', icon: '🏏' },
    { type: 'Score', description: 'Kohli scored a century', time: '3 hours ago', icon: '💯' },
    { type: 'Match', description: 'England vs Pakistan - Match Completed', time: '5 hours ago', icon: '✅' },
    { type: 'Player', description: 'New player registered: Smith', time: '1 day ago', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600">Welcome back! Here's your overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-2 font-medium">{stat.label}</p>
                  <p className="text-4xl font-bold text-gray-800 group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </p>
                </div>
                <div className={`bg-gradient-to-br ${stat.color} text-white text-4xl p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
              </div>
              <div className={`mt-4 h-1 rounded-full ${stat.bgColor} overflow-hidden`}>
                <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full`} style={{ width: '75%' }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-soft p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
              <Link to="/history" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all border border-gray-100">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white text-2xl p-3 rounded-xl shadow-md">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-md text-xs font-bold">
                        {activity.type}
                      </span>
                    </div>
                    <p className="text-gray-800 font-semibold">{activity.description}</p>
                    <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
                  </div>
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
                  to="/scoring" 
                  className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 border border-white/30"
                >
                  ⚾ Start Scoring
                </Link>
                <Link 
                  to="/live-scores" 
                  className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 border border-white/30"
                >
                  📊 View Live Scores
                </Link>
                <Link 
                  to="/history" 
                  className="block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 border border-white/30"
                >
                  📜 Match History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
