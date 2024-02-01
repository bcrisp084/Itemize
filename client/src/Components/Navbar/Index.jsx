import { useState } from "react";
import Logo from "../Logo";
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Features");

  const handleClick = (item) => {
    setActiveLink(item);
  };

  const menuItems = ["Features", "Customers", "Integrations", "Log Out"];

  const navItems = ["Features", "Customers", "Integrations"];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          style={{ color: "white" }}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 text-white" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-orange-500">
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
          <p className="font-bold text-inherit text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500  to-orange-700">
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
              href="#"
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
        <NavbarItem className="lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}