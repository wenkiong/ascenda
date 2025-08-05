import { Routes, Route } from 'react-router-dom';
import Homepage from '@/routes';
import RCHomepage from './routes/rc-homepage';
import OnboardingPage from './routes/onboarding';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/rc-homepage" element={<RCHomepage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  );
}

export default App
