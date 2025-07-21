import Header from "./Header";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <Container as="main">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
