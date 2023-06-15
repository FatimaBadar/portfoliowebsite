import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <BrowserRouter basename='Portfolio-Website'> */}
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      {/* </BrowserRouter> */}
      </>


  );
}

export default App;
