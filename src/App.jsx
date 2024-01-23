import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Search from './Pages/Search';
import Cart from './Pages/Cart';
import Authentication from './Pages/Authentication';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './UI/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route path='login' element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
