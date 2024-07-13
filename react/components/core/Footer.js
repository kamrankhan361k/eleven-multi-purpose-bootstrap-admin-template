import { Collapse, Nav, NavItem, NavLink, Navbar } from "reactstrap";

import Link from "next/link";

const Footer = () => {
  const currentDate = new Date();

  return (
    <div className="app-footer bg-light">
      <Navbar expand={true}>
        <Collapse isOpen={true} navbar>
          <Nav navbar>
            <NavItem>
              <Link href="/">
                <NavLink>
                  &copy; Copyright FusePX Premium Templates{" "}
                  {currentDate.getFullYear()}
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav className="ml-auto menu-right d-none d-sm-flex" navbar>
          <NavItem>
            <Link href="/">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <NavLink>Team</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <NavLink>Contact</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
