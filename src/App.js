import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Tracks from './pages/Tracks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/album/:id" element={<Tracks />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
 );
}

export default App;
