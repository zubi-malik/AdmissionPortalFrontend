import { Route, Routes } from "react-router-dom";
import Page from "./User/Page";
import Home from "./component/Home";
import Admin from "./component/Admin";
import AllUsers from "./component/AllUsers";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/allUsers" element={<AllUsers />} />
    </Routes>
  );
}
