import './App.css';
import AboutMe from './components/aboutMe/aboutMe';
import Home from './components/home/home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='aboutMe' element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
}
