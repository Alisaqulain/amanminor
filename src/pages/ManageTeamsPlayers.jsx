import { useState } from 'react';

const ManageTeamsPlayers = () => {
  const [activeTab, setActiveTab] = useState('teams');
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [showPlayerForm, setShowPlayerForm] = useState(false);
  const [teamFormData, setTeamFormData] = useState({ name: '', country: '' });
  const [playerFormData, setPlayerFormData] = useState({ name: '', team: '', role: '' });

  const teams = [
    { id: 1, name: 'India', country: 'India', players: 25 },
    { id: 2, name: 'Australia', country: 'Australia', players: 23 },
    { id: 3, name: 'England', country: 'England', players: 24 },
    { id: 4, name: 'Pakistan', country: 'Pakistan', players: 22 },
  ];

  const players = [
    { id: 1, name: 'Virat Kohli', team: 'India', role: 'Batsman' },
    { id: 2, name: 'Steve Smith', team: 'Australia', role: 'Batsman' },
    { id: 3, name: 'Joe Root', team: 'England', role: 'Batsman' },
    { id: 4, name: 'Mitchell Starc', team: 'Australia', role: 'Bowler' },
    { id: 5, name: 'Jasprit Bumrah', team: 'India', role: 'Bowler' },
  ];

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    alert('Team added successfully! (UI only)');
    setShowTeamForm(false);
    setTeamFormData({ name: '', country: '' });
  };

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    alert('Player added successfully! (UI only)');
    setShowPlayerForm(false);
    setPlayerFormData({ name: '', team: '', role: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Manage Teams & Players</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('teams')}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'teams'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Teams
          </button>
          <button
            onClick={() => setActiveTab('players')}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'players'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Players
          </button>
        </div>

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Teams</h2>
              <button
                onClick={() => setShowTeamForm(!showTeamForm)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {showTeamForm ? 'Cancel' : '+ Add Team'}
              </button>
            </div>

            {showTeamForm && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Team</h3>
                <form onSubmit={handleTeamSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={teamFormData.name}
                        onChange={(e) => setTeamFormData({ ...teamFormData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter team name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={teamFormData.country}
                        onChange={(e) => setTeamFormData({ ...teamFormData, country: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter country"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Add Team
                  </button>
                </form>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Team Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Country</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Players</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teams.map((team) => (
                    <tr key={team.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{team.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{team.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{team.country}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{team.players}</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Players Tab */}
        {activeTab === 'players' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Players</h2>
              <button
                onClick={() => setShowPlayerForm(!showPlayerForm)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {showPlayerForm ? 'Cancel' : '+ Add Player'}
              </button>
            </div>

            {showPlayerForm && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Player</h3>
                <form onSubmit={handlePlayerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Player Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={playerFormData.name}
                        onChange={(e) => setPlayerFormData({ ...playerFormData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter player name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team
                      </label>
                      <select
                        name="team"
                        value={playerFormData.team}
                        onChange={(e) => setPlayerFormData({ ...playerFormData, team: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select team</option>
                        {teams.map((team) => (
                          <option key={team.id} value={team.name}>
                            {team.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role
                      </label>
                      <select
                        name="role"
                        value={playerFormData.role}
                        onChange={(e) => setPlayerFormData({ ...playerFormData, role: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select role</option>
                        <option value="Batsman">Batsman</option>
                        <option value="Bowler">Bowler</option>
                        <option value="All-rounder">All-rounder</option>
                        <option value="Wicket-keeper">Wicket-keeper</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Add Player
                  </button>
                </form>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Player Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Team</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {players.map((player) => (
                    <tr key={player.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{player.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{player.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{player.team}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{player.role}</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTeamsPlayers;

