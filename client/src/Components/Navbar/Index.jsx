import { useState } from "react";
import Logo from "../Logo";
import Login from "../Login";
import Signup from "../Signup";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { useLocation } from "react-router";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Features");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const location = useLocation();

  const handleClick = (item) => {
    setActiveLink(item);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleOpenSignup = () => {
    setIsSignupOpen(true);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  const menuItems = ["Features", "Customers", "Integrations", "Log Out"];

  const navItems = ["Features", "Customers", "Integrations"];

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            style={{ color: "white" }}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3 text-white" justify="center">
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-orange-500">
              Itemize
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-8 text-white items-center"
          justify="center"
        >
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-orange-700">
              Itemize
            </p>
          </NavbarBrand>
          {navItems.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              className={`${
                activeLink === item ? "active" : ""
              } items-center relative p-2`}
              style={{ marginRight: "20px" }}
            >
              <Link
                onClick={() => handleClick(item)}
                color="foreground"
                href={`#${item}`}
                size="lg"
                className={`${
                  activeLink === item
                    ? "pb-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-2 after:rounded-full after:bg-primary"
                    : ""
                }`}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          {location.pathname === "/hub" ? (
            <NavbarItem className="lg:flex">
              <Link href="/">Logout</Link>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem className="lg:flex">
                <Link href="#" onClick={handleOpenLogin}>
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  onClick={handleOpenSignup}
                  as={Link}
                  color="primary"
                  href="#"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full "
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={`#${item}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Login isOpen={isLoginOpen} onOpenChange={handleCloseLogin} />
      <Signup isOpen={isSignupOpen} onOpenChange={handleCloseSignup} />
    </>
  );
}
