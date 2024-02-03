import { Outlet } from "react-router-dom";
import Navbar from "../Features/Navbar";
import Container from "./Container";
import Cart from "../Features/Cart/Cart";
import UIPositionFixed from "./UIPositionFixed";

export default function AppLayout() {
  return (
    <Container>
      <UIPositionFixed>
        <Navbar />
        <Cart />
      </UIPositionFixed>
      <Outlet />
    </Container>
  );
}
