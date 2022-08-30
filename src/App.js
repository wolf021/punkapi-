import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/Productdetails/:id' element={<ProductDetails  />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
