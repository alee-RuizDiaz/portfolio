import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDark from './pages/dark/Home';
import Works from './pages/dark/works';
import SingleProject from './pages/dark/single-project';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeDark />} />
        <Route path="/proyectos" element={<Works />} />
        <Route path="/proyecto/:title" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;

