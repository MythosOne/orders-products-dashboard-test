import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { TopMenu } from '@/components/TopMenu/TopMenu';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu';
import {OrdersTitle} from '@/components/OrdersTitle/OrdersTitle'

import { Home } from '@/pages/Home/Home';
import { Orders } from '@/pages/Orders/Orders';
import { Groups } from '@/pages/Groups/Groups';
import { Products } from '@/pages/Products/Products';
import { Users } from '@/pages/Users/Users';
import { Settings } from '@/pages/Setting/Settings';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
// import {Modal} from '@/components/Modal/Modal';
import { Main } from './App.styled';

// import { OrdersList } from '@/components/OrdersList/OrdersList';

function App() {
  return (
    <>
      <TopMenu />
      <NavigationMenu />
      <OrdersTitle/>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
