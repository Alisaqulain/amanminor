const Reports = () => {
  const reportData = {
    topScorers: [
      { player: 'Virat Kohli', runs: 12543, matches: 254 },
      { player: 'Joe Root', runs: 11234, matches: 198 },
      { player: 'Steve Smith', runs: 8456, matches: 128 },
      { player: 'Kane Williamson', runs: 7890, matches: 165 },
    ],
    topWicketTakers: [
      { player: 'Jasprit Bumrah', wickets: 245, matches: 98 },
      { player: 'Mitchell Starc', wickets: 198, matches: 112 },
      { player: 'Trent Boult', wickets: 187, matches: 105 },
      { player: 'Kagiso Rabada', wickets: 175, matches: 89 },
    ],
    matchStats: [
      { label: 'Total Matches', value: 127 },
      { label: 'Completed Matches', value: 115 },
      { label: 'Live Matches', value: 3 },
      { label: 'Scheduled Matches', value: 9 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Reports & Analytics</h1>

        {/* Match Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reportData.matchStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Top Scorers */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Run Scorers</h2>
          <div className="space-y-4">
            {reportData.topScorers.map((scorer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{scorer.player}</p>
                    <p className="text-sm text-gray-600">{scorer.matches} matches</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-800">{scorer.runs.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">runs</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Wicket Takers */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Wicket Takers</h2>
          <div className="space-y-4">
            {reportData.topWicketTakers.map((bowler, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{bowler.player}</p>
                    <p className="text-sm text-gray-600">{bowler.matches} matches</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-800">{bowler.wickets}</p>
                  <p className="text-sm text-gray-600">wickets</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Match Performance Chart</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder - Performance over time</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Team Statistics</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder - Team comparison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

