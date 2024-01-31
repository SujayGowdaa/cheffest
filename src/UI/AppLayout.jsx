import { Outlet } from "react-router-dom";
import Navbar from "../Features/Navbar";
import Container from "./Container";

export default function AppLayout() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}
