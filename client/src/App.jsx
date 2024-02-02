import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar/Index";
import BackToTopButton from "./Components/BackToTop";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Outlet />
        <BackToTopButton />
      </div>
    </>
  );
}
