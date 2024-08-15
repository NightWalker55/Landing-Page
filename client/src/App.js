import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/ProductPage/ProductPage';
import CheckOut from './Pages/CheckOut/CheckOut';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
