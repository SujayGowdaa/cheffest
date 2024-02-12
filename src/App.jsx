import { queryClient } from './services/reactQuery';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './Pages/Home';
import Search from './Pages/Search';
import Authentication from './Pages/Authentication';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './UI/AppLayout';
import AppContext from './store/AppContext';
import Order from './Pages/Order';
import Meal from './Pages/Meal';
import ProtectedRoute from './UI/ProtectedRoute';
import SignUp from './Features/Authentication/SignUp';
import ResetPassword from './Features/Authentication/ResetPassword';
import Profile from './Pages/Profile';
import OrderDetails from './Features/Order/OrderDetails';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path='/' element={<Navigate replace to={'/meals'} />} />
              <Route path='/meals' index element={<Home />} />
              <Route path='/meals/:mealId' element={<Meal />} />
              <Route path='/search' element={<Search />} />
              <Route path='/order' element={<Order />} />
              <Route path='/order/:orderId' element={<OrderDetails />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
            <Route path='/login' element={<Authentication />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/reset-password' element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </QueryClientProvider>
  );
}

export default App;
