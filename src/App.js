import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import GameTab from './components/GameTab/GameTab';
import RatingTab from './components/RatingTab/RatingTab';
import ActivePlayersTab from './components/ActivePlayersTab/ActivePlayersTab'
import GameHistoryTab from './components/GameHistoryTab/GameHistoryTab';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/RatingTab" element={<RatingTab />} />
        <Route path="/GameTab" element={<GameTab />} />
        <Route path="/ActivePlayersTab" element={<ActivePlayersTab />} />
        <Route path="/PlayersListTab" element={<GameTab />} />
        <Route path="/GameHistoryTab" element={<GameHistoryTab />} />
      </Routes>
    </div>
  );
}

export default App;
