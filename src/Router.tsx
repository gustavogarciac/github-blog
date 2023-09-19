import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details";
import DefaultLayout from "./layouts/Default";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default Router;
