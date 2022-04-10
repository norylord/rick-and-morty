import {Routes, Navigate, Route, BrowserRouter as Router} from 'react-router-dom'
import "./styles/App.sass"
import Home from "./pages/Home/Home"
import AppLayout from "./layout/AppLayout/AppLayout";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
