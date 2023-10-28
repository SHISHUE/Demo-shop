

import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
   <>
   <div className='bg-slate-900'>
    <Navbar />
   </div>
    
    <Routes >
      <Route path='/Demo-shop' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
   </>
  );
}

export default App;
