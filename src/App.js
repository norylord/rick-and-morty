import {Routes, Navigate, Route, BrowserRouter, HashRouter as Router} from 'react-router-dom'
import "./styles/App.sass"
import './styles/Normalize.css'
import AppLayout from "./layout/AppLayout/AppLayout";
import EpisodePage from "./pages/EpisodesPage/EpisodePage";
import CharacterInfo from "./components/Characters/CharacterInfo/CharacterInfo";
import CharactersPage from "./pages/CharactersPage/CharactersPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<CharactersPage/>}/>
            <Route path="episode" element={<EpisodePage/>}/>
            <Route path="character/:id" element={<CharacterInfo/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
