import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Create from './components/CreateProduct';
import Card from './components/Card';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/Products" element={<Product />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<CheckOut/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
