import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// User Pages
import Home from './pages/Home';
import LiveScores from './pages/LiveScores';
import MatchHistory from './pages/MatchHistory';
import Dashboard from './pages/Dashboard';
import MatchScoring from './pages/MatchScoring';
import PlayerStats from './pages/PlayerStats';
import ScoreSummary from './pages/ScoreSummary';
import Profile from './pages/Profile';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ManageMatches from './pages/ManageMatches';
import ManageTeamsPlayers from './pages/ManageTeamsPlayers';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/live-scores" element={<LiveScores />} />
            <Route path="/history" element={<MatchHistory />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scoring" element={<MatchScoring />} />
            <Route path="/player-stats" element={<PlayerStats />} />
            <Route path="/summary" element={<ScoreSummary />} />
            <Route path="/profile" element={<Profile />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/matches" element={<ManageMatches />} />
            <Route path="/admin/teams" element={<ManageTeamsPlayers />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
