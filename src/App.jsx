import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Search from './Pages/Search';
import Authentication from './Pages/Authentication';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './UI/AppLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppContext from './store/AppContext';
import Order from './Pages/Order';
import Meal from './Pages/Meal';
import { queryClient } from './services/reactQuery';
import ProtectedRoute from './UI/ProtectedRoute';

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
              <Route path='*' element={<PageNotFound />} />
            </Route>
            <Route path='login' element={<Authentication />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </QueryClientProvider>
  );
}

export default App;
