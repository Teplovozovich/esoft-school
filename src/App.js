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



function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/RatingTab" element={
          <>
            <Header />
            <RatingTab fullNamaData={props.state.ratingPage.fullNamaData} winsNumDate={props.state.ratingPage.winsNumDate} lossesDate={props.state.ratingPage.lossesDate} allGamesDate={props.state.ratingPage.allGamesDate} percentWinsDate={props.state.ratingPage.percentWinsDate} />
          </>} />
        <Route path="/GameTab" element={
          <>
            <Header />
            <GameTab />
          </>} />
        <Route path="/ActivePlayersTab" element={
          <>
            <Header />
            <ActivePlayersTab itemsActivePlayers={props.state.itemsActivePlayers} />
          </>} />
        <Route path="/GameHistoryTab" element={
          <>
            <Header />
            <GameHistoryTab itemsGameHistoryTable={props.state.itemsGameHistoryTable} />
          </>} />
        <Route path="/PlayersListTab" element={
          <>
            <Header />
            <PlayersListTab handleAddButtonClick={props.handleAddButtonClick} state={props.state.itemsPlayersList} handleStatusChange={props.handleStatusChange} />
          </>} />
      </Routes>
    </div>
  );
}


export default App;
