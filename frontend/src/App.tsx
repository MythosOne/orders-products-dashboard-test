import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { TopMenu } from '@/components/TopMenu/TopMenu';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu';

import { Home } from '@/pages/Home/Home';
import { Orders } from '@/pages/Orders/Orders';
import { Groups } from '@/pages/Groups/Groups';
import { Products } from '@/pages/Products/Products';
import { Users } from '@/pages/Users/Users';
import { Settings } from '@/pages/Setting/Settings';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
// import {Modal} from '@/components/Modal/Modal';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <TopMenu />
      <NavigationMenu />
      {/* <Modal/> */}
    </>
  );
}

export default App;

