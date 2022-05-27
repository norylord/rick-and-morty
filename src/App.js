import {Routes, Navigate, Route, BrowserRouter as Router} from 'react-router-dom'
import "./styles/App.sass"
import './styles/Normalize.css'
import Home from "./pages/Home/Home"
import AppLayout from "./layout/AppLayout/AppLayout";
import EpisodePage from "./pages/EpisodesPage/EpisodePage";
import CharacterInfo from "./components/Characters/CharacterInfo/CharacterInfo";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="episode" element={<EpisodePage/>}/>
            <Route path="character/:id" element={<CharacterInfo/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
