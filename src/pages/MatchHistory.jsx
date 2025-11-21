import { useState } from 'react';

const MatchHistory = () => {
  const [filter, setFilter] = useState('all');

  const matches = [
    { id: 1, team1: 'India', team2: 'Australia', score: '320/5 vs 298/7', winner: 'India', date: '2024-11-15', venue: 'Wankhede Stadium' },
    { id: 2, team1: 'England', team2: 'Pakistan', score: '280/9 vs 275/8', winner: 'England', date: '2024-11-14', venue: 'Lord\'s' },
    { id: 3, team1: 'New Zealand', team2: 'South Africa', score: '289/6 vs 275/8', winner: 'New Zealand', date: '2024-11-13', venue: 'Eden Park' },
    { id: 4, team1: 'West Indies', team2: 'Bangladesh', score: '245/8 vs 240/9', winner: 'West Indies', date: '2024-11-12', venue: 'Sabina Park' },
    { id: 5, team1: 'Sri Lanka', team2: 'Afghanistan', score: '265/7 vs 260/9', winner: 'Sri Lanka', date: '2024-11-11', venue: 'R. Premadasa' },
  ];

  const filteredMatches = filter === 'all' 
    ? matches 
    : matches.filter(m => m.winner === filter);

  const teams = ['all', 'India', 'England', 'New Zealand'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-5xl">📜</span>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Match History
              </h1>
              <p className="text-gray-600 mt-1">Browse all past matches and results</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Team</h3>
          <div className="flex flex-wrap gap-3">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setFilter(team)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  filter === team
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {team === 'all' ? 'All Matches' : team}
              </button>
            ))}
          </div>
        </div>

        {/* Match Cards */}
        <div className="space-y-4">
          {filteredMatches.map((match) => (
            <div 
              key={match.id} 
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="text-sm text-gray-500 mb-2">{match.venue}</div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors mb-2">
                    {match.team1} <span className="text-gray-400 font-normal">vs</span> {match.team2}
                  </h3>
                  <div className="text-sm text-gray-500">{match.date}</div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4">
                    <p className="text-gray-700 font-bold text-lg">{match.score}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end">
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Winner</div>
                    <span className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md">
                      {match.winner}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-600 text-xl font-medium">No matches found</p>
            <p className="text-gray-500 text-sm mt-2">Try selecting a different filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchHistory;
