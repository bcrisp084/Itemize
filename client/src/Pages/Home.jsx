import Nav from "../Components/Navbar/Index";
import { Outlet } from "react-router";

const Login = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Login;
