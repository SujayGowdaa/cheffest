import { Outlet } from 'react-router-dom';

import Navbar from '../Features/Navbar/Navbar';
import Cart from '../Features/Cart/Cart';
import UIPositionFixed from '../UI/UIPositionFixed';
import Developer from './Developer';
import ContainerUI from './ContainerUI';

export default function AppLayout() {
  return (
    <ContainerUI>
      <div className=' shadow-lg overflow-hidden h-screen overflow-y-auto pb-[40px]'>
        <UIPositionFixed>
          <Navbar />
          <Cart />
        </UIPositionFixed>
        <Outlet />
      </div>
      <Developer />
    </ContainerUI>
  );
}
