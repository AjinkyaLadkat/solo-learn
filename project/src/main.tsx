import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Discuss from './components/Discuss';  
import TeamsPage from './components/TeamsPage';
import Loginmain from './components/Loginmain';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CoursePage from './components/CoursePage';
import Leaderboard from './components/Leaderboard';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/teamsPage" element={<TeamsPage />} />
        <Route path="/Loginmain" element={<Loginmain />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CoursePage" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);