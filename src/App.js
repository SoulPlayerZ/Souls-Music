import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
 );
}

export default App;
