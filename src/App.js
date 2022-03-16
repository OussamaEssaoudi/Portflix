import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ProjectsPage from './ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />} />
          {//<Route path="Home" element={<Homeflix />} />
          //<Route path="About" element={<AboutMeBox />} />
          <Route path="Projets" element={<ProjectsPage />} />
          
          //<Route path="*" element={<NoPage />} />
        }
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
