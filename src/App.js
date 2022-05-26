import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import SingleNftPage from './Pages/SingleNftPage';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nft" element={<SingleNftPage />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
