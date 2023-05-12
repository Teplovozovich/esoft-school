import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import GameTab from './components/GameTab/GameTab';
import RatingTab from './components/RatingTab/RatingTab';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/RatingTab" element={<RatingTab />} />
        <Route path="/GameTab" element={<GameTab />} />
        <Route path="/ActivePlayersTab" element={<GameTab />} />
        <Route path="/GameHistoryTab" element={<GameTab />} />
        <Route path="/PlayersListTab" element={<GameTab />} />
      </Routes>
    </div>
  );
}

export default App;
