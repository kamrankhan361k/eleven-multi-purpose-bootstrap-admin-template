import { Fragment, useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Navbar
} from "reactstrap";

import AnimatedIcon from "./core/AnimatedIcon";
import Arrow from "../public/animated-icons/forward/forward.json";
import Avatar from "./core/Avatar";
import Bookmark from "../public/animated-icons/bookmark/bookmark.json";
import Flag from "../public/animated-icons/flag/flag.json";
import Heart from "../public/animated-icons/heart/heart.json";
import Refresh from "../public/animated-icons/restart/restart.json";
import Sidebar from "./core/Sidebar";
import Star from "../public/animated-icons/star/star.json";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import fetch from "../lib/fetch";
import format from "date-fns/format";
import { useAppState } from "./core/AppProvider";
import useSWR from "swr";

const createMarkup = body => {
  return { __html: body };
};

const Messages = () => {
  const [state] = useAppState();
  const { data, error } = useSWR(
    `${process.env.baseUrl}api/messages`,
    fetch
  );
  const [open, setOpened] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setOpened(state.mobile ? false : true);
  }, [state.mobile]);

  const onSetSidebarOpen = open => {
    setOpened(open);
  };

  const messageList = () => {
    if (error) return <div className="d-flex align-items-center justify-content-center h-100">Failed to load data</div>;
    if (!data)
      return (
        <div className="d-flex align-items-center justify-content-center h-100">
          Loading...
        </div>
      );
    return data.map((message, index) => (
      <ListGroupItem
        tag="a"
        href="#"
        action
        flush="true"
        className={`${
          selectedIndex === index
            ? "active-message border-bottom border-left-0 border-right-0"
            : "bg-transparent border-0"
        } rounded-0 border-light py-4`}
        onClick={e => {
          e.preventDefault();
          setSelectedIndex(index);
        }}
        key={index}
      >
        <div className="w-100 d-flex flex-row align-items-center">
          <span className="mr-3 position-relative">
            <Avatar
              src={message.avatar ? message.avatar : ""}
              alt={message.from}
              size={48}
              status={
                ["danger", "success", "info", "warning", "secondary"][
                  Math.floor(Math.random() * 5)
                ]
              }
            />
          </span>

          <span className="w-100">
            <small className="d-flex w-100 text-muted">
              <span>{message.from}</span>
              <span className="mr-auto" />
              <span>{distanceInWordsToNow(new Date(message.date))}</span>
            </small>
            <span className="d-block">{message.subject}</span>
          </span>
        </div>
      </ListGroupItem>
    ));
  };

  const messages = (
    <div className="overflow-hidden d-flex h-100 flex-column flex-1 message-sidebar bg-white">
      <Navbar className="bg-white" expand={true}>
        <Nav
          className="d-flex justify-content-between align-items-center w-100 text-center text-body"
          navbar
        >
          <NavItem>
            <NavLink href="#">
              <AnimatedIcon animationData={Bookmark} size={18} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <AnimatedIcon animationData={Heart} size={18} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <AnimatedIcon animationData={Star} size={18} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <AnimatedIcon animationData={Refresh} size={18} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <AnimatedIcon animationData={Flag} size={18} />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <ListGroup className="scroll-y flex-1">{messageList()}</ListGroup>
    </div>
  );

  const sidebarProps = {
    sidebar: messages,
    width: 350,
    open,
    onSetOpen: onSetSidebarOpen,
    isMobile: state.mobile,
    rootClass: "page-wrapper",
    sidebarClass: "sidebar",
    contentClass: "page-content"
  };

  return (
    <Fragment>
      <Sidebar {...sidebarProps}>
        <Message id={selectedIndex} toggleSidebar={() => setOpened(!open)} />
      </Sidebar>
    </Fragment>
  );
};

const Message = ({ id, toggleSidebar }) => {
  const { data, error } = useSWR(
    `${process.env.baseUrl}api/messages?id=${id}`,
    fetch
  );
  if (error) return <div className="d-flex align-items-center justify-content-center h-100"
  style={{ paddingTop: "60px" }}>Failed to load data</div>;
  if (!data)
    return (
      <div
        className="d-flex align-items-center justify-content-center h-100"
        style={{ paddingTop: "60px" }}
      >
        Loading...
      </div>
    );

  return (
    <>
      <Navbar className="bg-white d-lg-none" expand={true}>
        <Nav
          className="d-flex justify-content-between align-items-center w-100 text-center text-body"
          navbar
        >
          <NavItem>
            <NavLink
              href="#"
              className="d-flex align-items-center p-0"
              onClick={toggleSidebar}
            >
              <span
                className="d-inline-block"
                style={{ transform: "rotate(180deg)" }}
              >
                <AnimatedIcon animationData={Arrow} size={24} />
              </span>
              <span className="d-inline-block px-2">More messages</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="p-5">
        <div className="px-5 py-3">
          <div className="d-flex align-items-center mb-3">
            <span className="mr-3 position-relative">
              <Avatar
                src={data.avatar ? data.avatar : ""}
                alt={data.from}
                size={64}
                status={
                  ["danger", "success", "info", "warning", "secondary"][
                    Math.floor(Math.random() * 5)
                  ]
                }
              />
            </span>
            <div className="pl-3">
              <div className="date">
                {" "}
                {format(new Date(data.date), "MMMM Do YYYY hh:mm")}{" "}
              </div>
              <h6>{data.from}</h6>
            </div>
          </div>
          <p className="lead my-4">{data.subject}</p>
          <div dangerouslySetInnerHTML={createMarkup(data.body)} />
        </div>
      </div>
    </>
  );
};

export default Messages;
