import { useEffect, useState } from "react";

import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import NProgress from "nprogress";
import Router from "next/router";
import Sidebar from "./Sidebar";
import SidebarMenu from "./SidebarMenu";
import { capitalize } from "../../lib/helpers";
import { useAppState } from "./AppProvider";
import { withRouter } from "next/router";

const NonDashboardRoutes = [
  "/signin",
  "/signup",
  "/forgot",
  "/lockscreen",
  "/_error"
];

const HeaderHidden = ["/messages", "/maps/location"];
const FooterHidden = [
  "/messages",
  "/taskboard",
  "/maps/markers",
  "/maps/location"
];

const Page = ({ router, children }) => {
  const [state] = useAppState();
  const [open, setOpened] = useState(true);

  useEffect(() => {
    setOpened(state.mobile ? false : true);
  }, [state.mobile]);

  const onSetOpen = open => {
    setOpened(open);
  };

  const toggleOpen = ev => {
    setOpened(!open);

    if (ev) {
      ev.preventDefault();
    }
  };

  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    if (state.mobile) setOpened(false);
    NProgress.done();
    document.querySelector("body").scrollTop = 0;
  };
  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);
  const isHeaderHidden =
    HeaderHidden.includes(router.pathname) && !state.mobile;
  const isFooterHidden = FooterHidden.includes(router.pathname);
  const sidebar = <SidebarMenu />;

  const sidebarProps = {
    sidebar,
    width: 280,
    open,
    onSetOpen: onSetOpen,
    isMobile: state.mobile,
    rootClass: "page-wrapper",
    sidebarClass: "page-sidebar",
    contentClass: "page-content"
  };

  let topHeader = null,
    contentHeader = null;

  state.topHeader
    ? (topHeader = <Header toggleOpen={toggleOpen} />)
    : (contentHeader = <Header toggleOpen={toggleOpen} />);

  const pageName = router.pathname.split("/").reverse()[0];

  return (
    <>
      <Head>
        <title>
          {pageName ? capitalize(pageName) : "Eleven"} | Eleven Admin Template
        </title>
      </Head>
      <div
        className={`page ${state.darkMode ? "dark-mode" : ""} ${
          state.stickyHeader ? "page-sticky-header" : ""
        } ${state.stickySidebar ? "page-sticky-sidebar" : ""} ${
          state.boxed ? "page-boxed" : ""
        } ${isHeaderHidden ? "page-header-hidden" : ""} ${
          state.collapsed ? "page-sidebar-collapsed" : ""
        } ${state.topHeader ? "page-top-header" : ""}`}
      >
        {!isNotDashboard ? (
          <>
            {topHeader}
            <Sidebar {...sidebarProps}>
              {!isHeaderHidden && contentHeader}
              <div
                className={`page-inner bg-light ${
                  router.pathname === "/messages" ? "p-0" : ""
                }`}
              >
                {children}
              </div>
              {!isFooterHidden && <Footer />}
            </Sidebar>
          </>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default withRouter(Page);
