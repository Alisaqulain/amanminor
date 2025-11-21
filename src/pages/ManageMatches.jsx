import { useState } from 'react';

const ManageMatches = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    date: '',
    venue: '',
  });

  const matches = [
    { id: 1, team1: 'India', team2: 'Australia', date: '2024-11-15', venue: 'Wankhede Stadium', status: 'Completed' },
    { id: 2, team1: 'England', team2: 'Pakistan', date: '2024-11-14', venue: 'Lord\'s', status: 'Completed' },
    { id: 3, team1: 'New Zealand', team2: 'South Africa', date: '2024-11-13', venue: 'Eden Park', status: 'Live' },
    { id: 4, team1: 'West Indies', team2: 'Bangladesh', date: '2024-11-12', venue: 'Sabina Park', status: 'Scheduled' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (not implemented yet)
    alert('Match added successfully! (UI only)');
    setShowForm(false);
    setFormData({ team1: '', team2: '', date: '', venue: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Manage Matches</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {showForm ? 'Cancel' : '+ Add Match'}
          </button>
        </div>

        {/* Add Match Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Match</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team 1
                  </label>
                  <input
                    type="text"
                    name="team1"
                    value={formData.team1}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter team name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team 2
                  </label>
                  <input
                    type="text"
                    name="team2"
                    value={formData.team2}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter team name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter venue"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Add Match
              </button>
            </form>
          </div>
        )}

        {/* Matches Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Teams</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Venue</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {matches.map((match) => (
                <tr key={match.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">{match.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {match.team1} vs {match.team2}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{match.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{match.venue}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      match.status === 'Live'
                        ? 'bg-red-100 text-red-800'
                        : match.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {match.status}
                    </span>
                  </td>
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
    </div>
  );
};

export default ManageMatches;

