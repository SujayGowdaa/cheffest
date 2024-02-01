import { Outlet } from "react-router-dom";
import Navbar from "../Features/Navbar";
import Container from "./Container";
import Cart from "../Features/Cart/Cart";

export default function AppLayout() {
  return (
    <Container>
      <div className="fixed overflow-hidden top-0 z-20  max-w-max  w-full  pointer-events-none">
        <div className="  pointer-events-none h-screen max-w-max mx-auto w-full">
          <Navbar />
          <Cart />
        </div>
      </div>
      <Outlet />
    </Container>
  );
}
