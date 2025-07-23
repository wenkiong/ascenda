import { Routes, Route } from 'react-router-dom';
import Homepage from '@/routes';
import RCHomepage from './routes/rc-homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/rc-homepage" element={<RCHomepage />} />
    </Routes>
  );
}

export default App
