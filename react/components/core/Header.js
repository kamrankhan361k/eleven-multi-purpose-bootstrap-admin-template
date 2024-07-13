import {
  Badge,
  Button,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown
} from "reactstrap";
import useSWR, { useSWRPages } from "swr";

import AnimatedIcon from "./AnimatedIcon";
import Avatar from "./Avatar";
import Bell from "../../public/animated-icons/globe/globe.json";
import FullScreen from "../../public/animated-icons/fullscreen/fullscreen.json";
import Link from "next/link";
import Menu from "../../public/animated-icons/menu-back/menu-back.json";
import PropTypes from "prop-types";
import Search from "../../public/animated-icons/search-cancel/search-cancel.json";
import Settings from "../../public/animated-icons/toggle/toggle.json";
import fetch from "../../lib/fetch";
import { useAppState } from "./AppProvider";

const Notifications = () => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    "demo-page-2",
    ({ offset, withSWR }) => {
      const { data, error } = withSWR(
        useSWR(
          `${process.env.baseUrl}api/notifications?offset=${offset || 0}`,
          fetch
        )
      );

      if (error)
        return (
          <div className="d-flex align-items-center justify-content-between py-2 px-3">
            Failed to load notification data
          </div>
        );
      if (!data)
        return (
          <div className="d-flex align-items-center justify-content-between py-2 px-3">
            Loading...
          </div>
        );

      return (
        <ListGroup>
          {data.map(notification => (
            <ListGroupItem
              tag="a"
              href="#"
              action
              className="w-100 d-flex flex-row align-items-center"
              key={notification.id}
            >
              <span className="mr-3">
                <Avatar
                  size={40}
                  src={notification.avatar}
                  alt={notification.user}
                />
              </span>
              <span>
                {notification.user} {notification.subject}
              </span>
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    },

    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) return null;
      return (index + 1) * 3;
    },
    []
  );

  return (
    <>
      <div className="app-notifications-inner">{pages}</div>
      <div className="d-flex align-items-center justify-content-between py-2 px-3">
        <span>
          <Badge color="danger" pill>
            4
          </Badge>
          <small className="mr-auto ml-1">Notifications</small>
        </span>

        <Button
          outline
          color="secondary"
          size={"sm"}
          className="button-shadow"
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
        >
          {isLoadingMore ? ". . ." : isReachingEnd ? "" : "load more"}
        </Button>
      </div>
    </>
  );
};

const Header = ({ toggleOpen }) => {
  const [state, dispatch] = useAppState();
  const iconSize = 18;

  return (
    <div className="app-header">
      <Navbar className="bg-white">
        {state.mobile && (
          <Nav navbar>
            <a className="nav-toggle" onClick={toggleOpen}>
              <AnimatedIcon animationData={Menu} size={24} isStopped={true} />
            </a>
            <NavbarBrand href="/">
              <svg width={24} height={24}>
                <use xlinkHref="#logo-icon"></use>
              </svg>
            </NavbarBrand>
          </Nav>
        )}

        {state.topHeader && (
          <>
            {!state.mobile && (
              <Nav navbar>
                <NavbarBrand href="/">
                  <svg width={24} height={24}>
                    <use xlinkHref="#logo-icon"></use>
                  </svg>
                  <span className="ml-2">Eleven</span>
                </NavbarBrand>
              </Nav>
            )}
          </>
        )}

        {!state.mobile && (
          <Nav navbar>
            <NavItem>
              <Link
                href="/calendar"
                as={`${process.env.baseUrl}calendar`}
                passHref
              >
                <NavLink>Calendar</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href="/messages"
                as={`${process.env.baseUrl}messages`}
                passHref
              >
                <NavLink>Messages</NavLink>
              </Link>
            </NavItem>
          </Nav>
        )}

        <InputGroup className="search d-none d-sm-flex">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <AnimatedIcon animationData={Search} size={20} isStopped={true} />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Search dashboard" />
        </InputGroup>

        <Nav className="ml-auto menu-right" navbar>
          <NavItem>
            <NavLink onClick={() => dispatch({ type: "toggleFullscreen" })}>
              <AnimatedIcon animationData={FullScreen} size={iconSize} />
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <AnimatedIcon animationData={Settings} size={iconSize} />
            </DropdownToggle>
            <DropdownMenu right className="app-settings">
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem divider className="m-0" />
              <DropdownItem className="d-flex align-items-center justify-content-between">
                <label htmlFor="darkModeOption" className="m-0">
                  Dark mode
                </label>
                <CustomInput
                  type="switch"
                  id="darkModeOption"
                  name="darkModeOption"
                  checked={state.darkMode}
                  onChange={e => dispatch({ type: "toggleDarkMode" })}
                />
              </DropdownItem>
              <DropdownItem className="d-flex align-items-center justify-content-between">
                <label htmlFor="boxedOption" className="m-0">
                  Boxed layout
                </label>
                <CustomInput
                  type="switch"
                  id="boxedOption"
                  name="boxedOption"
                  checked={state.boxed}
                  onChange={e => dispatch({ type: "toggleBoxed" })}
                />
              </DropdownItem>
              <DropdownItem className="d-flex align-items-center justify-content-between">
                <label htmlFor="stickyHeaderOption" className="m-0">
                  Sticky header
                </label>
                <CustomInput
                  type="switch"
                  id="stickyHeaderOption"
                  name="stickyHeaderOption"
                  checked={state.stickyHeader}
                  onChange={e => dispatch({ type: "toggleStickyHeader" })}
                />
              </DropdownItem>
              <DropdownItem className="d-flex align-items-center justify-content-between">
                <label htmlFor="stickySidebarOption" className="m-0">
                  Sticky sidebar
                </label>
                <CustomInput
                  type="switch"
                  id="stickySidebarOption"
                  name="stickySidebarOption"
                  checked={state.stickySidebar}
                  onChange={e => dispatch({ type: "toggleStickySidebar" })}
                />
              </DropdownItem>
              <DropdownItem className="d-flex align-items-center justify-content-between">
                <label htmlFor="collapsedSidebarOption" className="m-0">
                  Collapsed sidebar
                </label>
                <CustomInput
                  type="switch"
                  id="collapsedSidebarOption"
                  name="collapsedSidebarOption"
                  checked={state.collapsed}
                  onChange={e => dispatch({ type: "toggleCollapsed" })}
                />
              </DropdownItem>
              <DropdownItem className="d-flex align-items-center justify-content-between">
                <label htmlFor="topHeaderOption" className="m-0">
                  Top header
                </label>
                <CustomInput
                  type="switch"
                  id="topHeaderOption"
                  name="topHeaderOption"
                  checked={state.topHeader}
                  onChange={e => dispatch({ type: "toggleTopHeader" })}
                />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <AnimatedIcon animationData={Bell} size={iconSize} />
              <Badge color="danger" pill className="badge-top">
                6
              </Badge>
            </DropdownToggle>
            <DropdownMenu right className="app-notifications">
              <DropdownItem>Notifications</DropdownItem>
              <DropdownItem divider className="m-0" />
              <Notifications />
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <Avatar
                size={32}
                src={`${process.env.baseUrl}images/avatar.jpg`}
                alt={`avatar`}
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Notifications</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Signout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  toggleOpen: PropTypes.func
};

export default Header;
