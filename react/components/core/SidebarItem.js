import { Badge, Collapse, Nav, NavItem, NavLink } from "reactstrap";

import AnimatedIcon from "./AnimatedIcon";
import Chevron from "../../public/animated-icons/expand/expand.json";
import Link from "next/link";
import PropTypes from "prop-types";
import { capitalize } from "../../lib/helpers";
import { useEffect } from "react";
import useHover from "./UseHover";

const SidebarItem = ({
  currentPath,
  activeRoute,
  path,
  index,
  route,
  toggleMenu,
  pathname
}) => {
  const hasChildren = route.children ? true : false;
  const [ref, hovered] = useHover();
  const iconSize = 18;

  useEffect(() => {
    if (!currentPath || activeRoute === index || route.path === "/") return;
    toggleMenu(index);
  }, []);

  const badgeTemplate = badge => (
    <Badge color={badge.type ? badge.type : "default"} pill>
      {badge.value}
    </Badge>
  );

  return (
    <div className="sidebar-item" ref={ref}>
      <NavItem key={index} className={activeRoute === index ? "active" : ""}>
        <>
          {!hasChildren && (
            <Link
              href={`${route.path}`}
              as={`${
                route.path.indexOf("//") !== -1 ? "" : process.env.baseUrl
              }${route.path.replace("/", "")}`}
              passHref
            >
              <NavLink
                onClick={() => toggleMenu(index)}
                className="d-flex align-items-center"
              >
                <AnimatedIcon
                  animationData={route.icon}
                  size={iconSize}
                  isStopped={!hovered}
                />
                <span className="mr-auto menu-name">
                  {capitalize(route.name)}
                </span>
                {route.badge && badgeTemplate(route.badge)}
              </NavLink>
            </Link>
          )}
          {hasChildren && (
            <NavLink
              className="nav-link d-flex align-items-center"
              onClick={() => toggleMenu(index)}
            >
              <AnimatedIcon
                animationData={route.icon}
                size={iconSize}
                isStopped={!hovered}
              />
              <span className="mr-auto menu-name">
                {capitalize(route.name)}
              </span>
              {route.badge && badgeTemplate(route.badge)}
              {hasChildren && (
                <span
                  className={`caret  ${
                    activeRoute === index ? "caret-active" : ""
                  }`}
                >
                  <AnimatedIcon animationData={Chevron} size={12} />
                </span>
              )}
            </NavLink>
          )}
        </>

        {hasChildren && (
          <Collapse
            isOpen={activeRoute === index ? true : false}
            className="sub-menu"
          >
            <Nav vertical>
              {route.children.map((subitem, index) => (
                <NavItem
                  key={index}
                  className={
                    pathname === route.path + subitem.path ? "active" : ""
                  }
                >
                  <Link
                    href={`${route.path ? route.path : ""}${
                      subitem.path ? subitem.path : ""
                    }`}
                    as={`${
                      subitem.path.indexOf("//") !== -1
                        ? ""
                        : process.env.baseUrl
                    }${route.path ? route.path.replace("/", "") : ""}${
                      subitem.path ? subitem.path : ""
                    }`}
                    passHref
                  >
                    <NavLink>
                      <span className="mr-auto menu-name">
                        {capitalize(subitem.name)}
                      </span>
                      {subitem.badge && badgeTemplate(subitem.badge)}
                    </NavLink>
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        )}
      </NavItem>
    </div>
  );
};

SidebarItem.propTypes = {
  route: PropTypes.object,
  index: PropTypes.number,
  activeRoute: PropTypes.number,
  toggleMenu: PropTypes.func
};

export default SidebarItem;
