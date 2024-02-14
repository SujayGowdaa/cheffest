import { Outlet } from 'react-router-dom';
import Navbar from '../Features/Navbar/Navbar';
import Cart from '../Features/Cart/Cart';
import UIPositionFixed from '../UI/UIPositionFixed';
import Container from '../UI/Container';
import Developer from './Developer';

export default function AppLayout() {
  return (
    <Container>
      <div className=' shadow-lg overflow-hidden h-screen overflow-y-auto pb-[40px]'>
        <UIPositionFixed>
          <Navbar />
          <Cart />
        </UIPositionFixed>
        <Outlet />
      </div>
      <Developer />
    </Container>
  );
}
