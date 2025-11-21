const ScoreSummary = () => {
  const battingStats = [
    { player: 'Virat Kohli', runs: 120, balls: 108, fours: 12, sixes: 3, strikeRate: 111.11, out: 'c Smith b Starc' },
    { player: 'Rohit Sharma', runs: 85, balls: 76, fours: 8, sixes: 2, strikeRate: 111.84, out: 'b Cummins' },
    { player: 'KL Rahul', runs: 45, balls: 42, fours: 5, sixes: 0, strikeRate: 107.14, out: 'Not Out' },
    { player: 'Rishabh Pant', runs: 32, balls: 28, fours: 3, sixes: 1, strikeRate: 114.29, out: 'run out' },
  ];

  const bowlingStats = [
    { player: 'Mitchell Starc', overs: 10, maidens: 1, runs: 58, wickets: 2, economy: 5.8 },
    { player: 'Pat Cummins', overs: 10, maidens: 0, runs: 65, wickets: 1, economy: 6.5 },
    { player: 'Josh Hazlewood', overs: 9, maidens: 1, runs: 52, wickets: 1, economy: 5.78 },
    { player: 'Adam Zampa', overs: 10, maidens: 0, runs: 68, wickets: 0, economy: 6.8 },
  ];

  const fallOfWickets = [
    { wicket: 1, runs: 145, player: 'Rohit Sharma', overs: '24.3' },
    { wicket: 2, runs: 198, player: 'Rishabh Pant', overs: '32.1' },
    { wicket: 3, runs: 320, player: 'Virat Kohli', overs: '48.5' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-5xl">📋</span>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Score Summary
              </h1>
              <p className="text-gray-600 mt-1">Complete match scorecard and statistics</p>
            </div>
          </div>
        </div>

        {/* Match Info */}
        <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl shadow-xl p-8 mb-8 border border-primary-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">India vs Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 mb-2 font-medium">India</p>
              <p className="text-4xl font-bold text-gray-800">320/3</p>
              <p className="text-sm text-gray-600 mt-2">50.0 overs</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 mb-2 font-medium">Australia</p>
              <p className="text-4xl font-bold text-gray-800">298/7</p>
              <p className="text-sm text-gray-600 mt-2">50.0 overs</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-primary-200">
            <p className="text-xl font-bold text-primary-700 bg-primary-100 inline-block px-6 py-3 rounded-xl">
              🏆 India won by 22 runs
            </p>
          </div>
        </div>

        {/* Batting Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
            <span>🏏</span>
            <span>Batting</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold">Batsman</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">R</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">B</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">4s</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">6s</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">SR</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">How Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {battingStats.map((stat, index) => (
                  <tr key={index} className="hover:bg-primary-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">{stat.player}</td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-gray-800">{stat.runs}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.balls}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.fours}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.sixes}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.strikeRate}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{stat.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bowling Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
            <span>⚾</span>
            <span>Bowling</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold">Bowler</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">O</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">M</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">R</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">W</th>
                  <th className="px-6 py-4 text-center text-sm font-bold">Econ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bowlingStats.map((stat, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">{stat.player}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-800">{stat.overs}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.maidens}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.runs}</td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-gray-800">{stat.wickets}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{stat.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fall of Wickets */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
            <span>📉</span>
            <span>Fall of Wickets</span>
          </h3>
          <div className="space-y-3">
            {fallOfWickets.map((wicket, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
                    {wicket.wicket}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{wicket.player}</p>
                    <p className="text-sm text-gray-600">{wicket.runs} runs</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm font-medium bg-white px-4 py-2 rounded-lg">
                  ({wicket.overs})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
