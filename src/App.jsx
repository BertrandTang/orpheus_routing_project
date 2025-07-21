import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
