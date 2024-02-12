import { Outlet } from 'react-router-dom';
import Navbar from '../Features/Navbar/Navbar';
import Cart from '../Features/Cart/Cart';
import UIPositionFixed from '../UI/UIPositionFixed';

export default function AppLayout() {
  return (
    <>
      <UIPositionFixed>
        <Navbar />
        <Cart />
      </UIPositionFixed>
      <Outlet />
    </>
  );
}
