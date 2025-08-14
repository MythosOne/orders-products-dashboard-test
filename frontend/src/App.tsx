import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { TopMenu } from '@/components/TopMenu/TopMenu';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu';
import { OrdersTitle } from '@/components/OrdersTitle/OrdersTitle';

import { Home } from '@/pages/Home/Home';
import { Groups } from '@/pages/Groups/Groups';
import { Users } from '@/pages/Users/Users';
import { Settings } from '@/pages/Setting/Settings';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';

import { Main } from './App.styled';

const Orders = lazy(() => import('@/pages/Orders/Orders'));
const Products = lazy(() => import('@/pages/Products/Products'));

function App() {
  return (
    <>
      <TopMenu />
      <NavigationMenu />
      <OrdersTitle />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Main>
    </>
  );
}

export default App;
