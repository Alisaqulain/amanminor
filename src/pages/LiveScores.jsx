const LiveScores = () => {
  const liveMatches = [
    {
      id: 1,
      team1: { name: 'India', score: 245, wickets: 3, overs: 42.3 },
      team2: { name: 'Australia', score: 198, wickets: 7, overs: 38.2 },
      status: 'In Progress',
      currentBatsman: 'Kohli',
      currentBowler: 'Starc',
      venue: 'Wankhede Stadium',
    },
    {
      id: 2,
      team1: { name: 'England', score: 156, wickets: 2, overs: 25.0 },
      team2: { name: 'Pakistan', score: 0, wickets: 0, overs: 0.0 },
      status: 'In Progress',
      currentBatsman: 'Root',
      currentBowler: 'Shaheen',
      venue: 'Lord\'s',
    },
    {
      id: 3,
      team1: { name: 'New Zealand', score: 289, wickets: 6, overs: 50.0 },
      team2: { name: 'South Africa', score: 175, wickets: 4, overs: 32.5 },
      status: 'In Progress',
      currentBatsman: 'de Kock',
      currentBowler: 'Boult',
      venue: 'Eden Park',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-4xl">📊</span>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Live Scores
              </h1>
              <p className="text-gray-600">Real-time match updates</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {liveMatches.map((match) => (
            <div key={match.id} className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold animate-pulse flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>LIVE</span>
                  </span>
                  <span className="text-gray-600 font-medium">{match.venue}</span>
                </div>
                <span className="text-gray-600 text-sm font-medium">{match.status}</span>
              </div>

              {/* Team 1 */}
              <div className="mb-6 pb-6 border-b-2 border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                        {match.team1.name}
                      </h3>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs font-bold">
                        BATTING
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      <span className="font-semibold">{match.currentBatsman}</span> batting | 
                      <span className="font-semibold"> {match.currentBowler}</span> bowling
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-gray-800 mb-1">
                      {match.team1.score}<span className="text-2xl text-red-600">/{match.team1.wickets}</span>
                    </p>
                    <p className="text-sm text-gray-600 font-medium">{match.team1.overs} overs</p>
                  </div>
                </div>
              </div>

              {/* Team 2 */}
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                        {match.team2.name}
                      </h3>
                      {match.team2.overs > 0 && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs font-bold">
                          BATTING
                        </span>
                      )}
                    </div>
                    {match.team2.overs > 0 && (
                      <p className="text-sm text-gray-600 font-medium">
                        <span className="font-semibold">{match.currentBatsman}</span> batting | 
                        <span className="font-semibold"> {match.currentBowler}</span> bowling
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-gray-800 mb-1">
                      {match.team2.score}<span className="text-2xl text-red-600">/{match.team2.wickets}</span>
                    </p>
                    <p className="text-sm text-gray-600 font-medium">{match.team2.overs} overs</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Match Progress</span>
                  <span>{((match.team1.overs + match.team2.overs) / 100 * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((match.team1.overs + match.team2.overs) / 100 * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {liveMatches.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-soft">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-600 text-xl font-medium">No live matches at the moment</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for live updates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveScores;
