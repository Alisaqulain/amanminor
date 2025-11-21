const PlayerStats = () => {
  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      team: 'India',
      avatar: '👤',
      batting: { runs: 12543, matches: 254, avg: 59.34, centuries: 43, strikeRate: 92.84 },
      bowling: { wickets: 4, matches: 254, economy: 5.2 },
    },
    {
      id: 2,
      name: 'Steve Smith',
      team: 'Australia',
      avatar: '👤',
      batting: { runs: 8456, matches: 128, avg: 61.28, centuries: 27, strikeRate: 88.45 },
      bowling: { wickets: 17, matches: 128, economy: 4.8 },
    },
    {
      id: 3,
      name: 'Joe Root',
      team: 'England',
      avatar: '👤',
      batting: { runs: 11234, matches: 198, avg: 50.15, centuries: 29, strikeRate: 85.67 },
      bowling: { wickets: 23, matches: 198, economy: 5.5 },
    },
    {
      id: 4,
      name: 'Kane Williamson',
      team: 'New Zealand',
      avatar: '👤',
      batting: { runs: 7890, matches: 165, avg: 54.41, centuries: 22, strikeRate: 82.34 },
      bowling: { wickets: 29, matches: 165, economy: 4.9 },
    },
    {
      id: 5,
      name: 'Babar Azam',
      team: 'Pakistan',
      avatar: '👤',
      batting: { runs: 5678, matches: 98, avg: 58.55, centuries: 18, strikeRate: 89.12 },
      bowling: { wickets: 0, matches: 98, economy: 0 },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-5xl">👤</span>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Player Statistics
              </h1>
              <p className="text-gray-600 mt-1">Detailed performance metrics for all players</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white text-5xl p-6 rounded-2xl shadow-lg">
                    {player.avatar}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-gray-600 font-medium mt-1">{player.team}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Batting Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <span>🏏</span>
                    <span>Batting</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Runs</p>
                      <p className="text-2xl font-bold text-gray-800">{player.batting.runs.toLocaleString()}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Matches</p>
                      <p className="text-2xl font-bold text-gray-800">{player.batting.matches}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Average</p>
                      <p className="text-2xl font-bold text-gray-800">{player.batting.avg}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Centuries</p>
                      <p className="text-2xl font-bold text-gray-800">{player.batting.centuries}</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-xl p-4 shadow-md">
                    <p className="text-xs text-gray-600 mb-1 font-medium">Strike Rate</p>
                    <p className="text-2xl font-bold text-gray-800">{player.batting.strikeRate}</p>
                  </div>
                </div>

                {/* Bowling Stats */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <span>⚾</span>
                    <span>Bowling</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Wickets</p>
                      <p className="text-2xl font-bold text-gray-800">{player.bowling.wickets}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Matches</p>
                      <p className="text-2xl font-bold text-gray-800">{player.bowling.matches}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md col-span-2">
                      <p className="text-xs text-gray-600 mb-1 font-medium">Economy</p>
                      <p className="text-2xl font-bold text-gray-800">{player.bowling.economy || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
