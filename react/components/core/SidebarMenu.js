import { Nav, Navbar, NavbarBrand } from "reactstrap";

import AnimatedIcon from "./AnimatedIcon";
import Menu from "../../public/animated-icons/menu-back/menu-back.json";
import ROUTES from "../../lib/routes";
import SidebarItem from "./SidebarItem";
import { useAppState } from "./AppProvider";
import { useState } from "react";
import { withRouter } from "next/router";

const SidebarContent = ({ router }) => {
  const [state, dispatch] = useAppState();
  const [activeRoute, setActiveRoute] = useState(undefined);
  const { pathname } = router;

  const toggleMenu = index => {
    if (activeRoute === index) index = undefined;
    setActiveRoute(index);
  };

  return (
    <div className={`h-100 d-flex flex-column flex-1`}>
      {!state.mobile && (
        <>
          {!state.topHeader && (
            <Navbar expand="md" className="bg-dark">
              <NavbarBrand href="/">
                <svg width={24} height={24}>
                  <use xlinkHref="#logo-icon"></use>
                </svg>
                <span className="ml-3">Eleven</span>
              </NavbarBrand>
              <a
                href="#"
                className="nav-toggle"
                onClick={() => dispatch({ type: "toggleCollapsed" })}
              >
                <AnimatedIcon animationData={Menu} size={24} isStopped={true} />
              </a>
            </Navbar>
          )}
        </>
      )}

      <Nav vertical className="d-block scroll-y flex-1 py-3">
        {ROUTES.map((route, index) => {
          const isCurrentPath =
            pathname.indexOf(route.path) > -1 ? true : false;

          return (
            <SidebarItem
              key={index}
              index={index}
              route={route}
              activeRoute={activeRoute}
              pathname={pathname}
              toggleMenu={toggleMenu}
              currentPath={isCurrentPath}
            />
          );
        })}
      </Nav>
    </div>
  );
};

export default withRouter(SidebarContent);
