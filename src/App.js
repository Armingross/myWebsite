import './App.css';
import AboutMe from './components/aboutMe/aboutMe';
import Home from './components/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='aboutMe' element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
