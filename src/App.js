import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import GameTab from './components/GameTab/GameTab';
import RatingTab from './components/RatingTab/RatingTab';
import ActivePlayersTab from './components/ActivePlayersTab/ActivePlayersTab'
import GameHistoryTab from './components/GameHistoryTab/GameHistoryTab';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import PlayersListTab from './components/PlayersListTab/PlayersListTab';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/RatingTab" element={
          <>
            <Header />
            <RatingTab />
          </>} />
        <Route path="/GameTab" element={
          <>
            <Header />
            <GameTab />
          </>} />
        <Route path="/ActivePlayersTab" element={
          <>
            <Header />
            <ActivePlayersTab />
          </>} />
        <Route path="/PlayersListTab" element={
          <>
            <Header />
            <PlayersListTab />
          </>} />
        <Route path="/GameHistoryTab" element={
          <>
            <Header />
            <GameHistoryTab />
          </>} />
      </Routes>
    </div>
  );
}


export default App;
