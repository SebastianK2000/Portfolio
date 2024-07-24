import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './styles/Switch.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/MyProjects/Projects';
import Frontend from './components/MyProjects/Front/Frontend.tsx';
import Backend from './components/MyProjects/Back/Backend.tsx';
import Game from './components/MyProjects/Game/Game.tsx';
import Mockup from './components/MyProjects/Mockup/Mockup.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="footer" element={<Footer />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="projects" element={<Projects />} />
        <Route path="mockup" element={<Mockup />} />
        <Route path="game" element={<Game />} />
        <Route path="backend" element={<Backend />} />
        <Route path="frontend" element={<Frontend />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
