import AboutMe from './components/aboutMe/aboutMe';
import Home from './components/home/home';
import Contact from './components/contact/Contact';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='aboutMe' element={<AboutMe />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
