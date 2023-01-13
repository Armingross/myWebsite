import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Home from './components/home/home';
import Resume from './components/resume/Resume';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='aboutMe' element={<AboutMe />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
}
