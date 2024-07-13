import PropTypes from "prop-types";
import { useRef } from "react";

const Sidebar = ({
  open,
  width,
  onSetOpen,
  sidebar,
  children,
  isMobile,
  rootClass,
  sidebarClass,
  contentClass
}) => {
  const sidebarRef = useRef();
  const overlayClicked = () => {
    if (open) {
      onSetOpen(false);
    }
  };
  const isOverlayVisibile = open && isMobile;

  return (
    <div className={`position-relative d-flex flex-row flex-fill ${rootClass}`}>
      <div
        className={`sidebar bg-dark ${sidebarClass}`}
        ref={sidebarRef}
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
          minWidth: `${width}px`,
          maxWidth: `${width}px`
        }}
      >
        {sidebar}
      </div>
      <div
        className="page-overlay"
        onClick={overlayClicked}
        style={{
          visibility: isOverlayVisibile ? "visible" : "hidden",
          opacity: isOverlayVisibile ? "1" : "0"
        }}
      />
      <div
        className={`position-relative d-flex flex-column flex-fill ${contentClass}`}
        style={{ minWidth: 0 }}
      >
        {children}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  // main content to render
  children: PropTypes.node.isRequired,

  // sidebar content to render
  sidebar: PropTypes.node.isRequired,

  // boolean if sidebar should slide open
  open: PropTypes.bool,

  // callback called when the overlay is clicked
  onSetOpen: PropTypes.func
};

Sidebar.defaultProps = {
  open: false,
  onSetOpen: () => {}
};

export default Sidebar;
