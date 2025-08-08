import { Routes, Route, Link } from 'react-router-dom';
// import { lazy } from 'react';
import { TopMenu } from '@/components/TopMenu/TopMenu';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu';

import { Home } from '@/pages/Home/Home';
import { Orders } from '@/pages/Orders/Orders';
import { Groups } from '@/pages/Groups/Groups';
import { Products } from '@/pages/Products/Products';
import { Users } from '@/pages/Users/Users';
import { Settings } from '@/pages/Settings/Settings';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import './App.css';

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
      </nav> */}

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
    </>
  );
}

export default App;
