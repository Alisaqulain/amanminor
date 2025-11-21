import { useState } from 'react';

const MatchScoring = () => {
  const [currentOver, setCurrentOver] = useState(0);
  const [currentBall, setCurrentBall] = useState(0);
  const [team1Score, setTeam1Score] = useState(0);
  const [team1Wickets, setTeam1Wickets] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team2Wickets, setTeam2Wickets] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);

  const handleRun = (runs) => {
    if (currentTeam === 1) {
      setTeam1Score(team1Score + runs);
    } else {
      setTeam2Score(team2Score + runs);
    }
    updateBall();
  };

  const handleWicket = () => {
    if (currentTeam === 1) {
      setTeam1Wickets(team1Wickets + 1);
    } else {
      setTeam2Wickets(team2Wickets + 1);
    }
    updateBall();
  };

  const handleExtra = (type) => {
    if (currentTeam === 1) {
      setTeam1Score(team1Score + 1);
    } else {
      setTeam2Score(team2Score + 1);
    }
  };

  const updateBall = () => {
    if (currentBall < 5) {
      setCurrentBall(currentBall + 1);
    } else {
      setCurrentBall(0);
      setCurrentOver(currentOver + 1);
    }
  };

  const resetOver = () => {
    setCurrentBall(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-5xl">⚾</span>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Match Scoring
              </h1>
              <p className="text-gray-600 mt-1">Score matches ball by ball</p>
            </div>
          </div>
        </div>

        {/* Current Match Status */}
        <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl shadow-xl p-8 mb-8 border border-primary-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Team {currentTeam === 1 ? '1' : '2'} Batting
              </h2>
              <p className="text-gray-600">Current innings in progress</p>
            </div>
            <div className="text-right bg-white rounded-2xl p-6 shadow-lg border border-primary-100">
              <p className="text-5xl font-bold text-primary-700 mb-1">
                {currentOver}.<span className="text-4xl">{currentBall}</span>
              </p>
              <p className="text-sm text-gray-600 font-semibold">Overs</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 mb-2 font-medium">Team 1 Score</p>
              <p className="text-4xl font-bold text-gray-800">
                {team1Score}<span className="text-2xl text-red-600">/{team1Wickets}</span>
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 mb-2 font-medium">Team 2 Score</p>
              <p className="text-4xl font-bold text-gray-800">
                {team2Score}<span className="text-2xl text-red-600">/{team2Wickets}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Runs Buttons */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
            <span>🏏</span>
            <span>Runs</span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[0, 1, 2, 3, 4, 6].map((runs) => (
              <button
                key={runs}
                onClick={() => handleRun(runs)}
                className="bg-gradient-to-br from-primary-600 to-primary-700 text-white px-6 py-6 rounded-2xl font-bold text-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
              >
                {runs}
              </button>
            ))}
          </div>
        </div>

        {/* Wicket and Extras */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
              <span>🏏</span>
              <span>Wicket</span>
            </h3>
            <button
              onClick={handleWicket}
              className="w-full bg-gradient-to-br from-red-600 to-red-700 text-white px-6 py-6 rounded-2xl font-bold text-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              🏏 Wicket
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
              <span>➕</span>
              <span>Extras</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['Wide', 'No Ball', 'Bye', 'Leg Bye'].map((type) => (
                <button
                  key={type}
                  onClick={() => handleExtra(type.toLowerCase())}
                  className="bg-gradient-to-br from-accent-500 to-accent-600 text-white px-4 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Over Controls */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Over Controls</h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={resetOver}
              className="bg-gradient-to-br from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              🔄 Reset Over
            </button>
            <button
              onClick={() => setCurrentTeam(currentTeam === 1 ? 2 : 1)}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              🔀 Switch Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchScoring;
