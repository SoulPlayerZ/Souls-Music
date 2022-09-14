import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  
 );
}

export default App;
