import { createContext, useContext, useEffect, useReducer } from "react";

const Context = createContext();
const { Provider } = Context;
let mql;

const saveToLocal = state => {
  let stateCopy = { ...state };
  delete stateCopy.mobile;
  localStorage.setItem("settings", JSON.stringify(stateCopy));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleFullscreen": {
      const element = document.querySelector("#__next");
      const isFullscreen =
        document.webkitIsFullScreen || document.mozFullScreen || false;

      element.requestFullScreen =
        element.requestFullScreen ||
        element.webkitRequestFullScreen ||
        element.mozRequestFullScreen ||
        function() {
          return false;
        };

      document.cancelFullScreen =
        document.cancelFullScreen ||
        document.webkitCancelFullScreen ||
        document.mozCancelFullScreen ||
        function() {
          return false;
        };

      isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();

      return { ...state, fullscreen: !isFullscreen };
    }
    case "toggleBoxed": {
      const newState = { ...state, boxed: !state.boxed };
      saveToLocal(newState);
      return newState;
    }
    case "toggleCollapsed": {
      const newState = { ...state, collapsed: !state.collapsed };
      saveToLocal(newState);
      return newState;
    }
    case "toggleDarkMode": {
      const newState = { ...state, darkMode: !state.darkMode };
      saveToLocal(newState);
      return newState;
    }
    case "toggleStickyHeader": {
      const newState = { ...state, stickyHeader: !state.stickyHeader };
      saveToLocal(newState);
      return newState;
    }
    case "toggleStickySidebar": {
      const newState = { ...state, stickySidebar: !state.stickySidebar };
      saveToLocal(newState);
      return newState;
    }
    case "toggleTopHeader": {
      const newState = { ...state, topHeader: !state.topHeader };
      saveToLocal(newState);
      return newState;
    }
    case "setMobile":
      return { ...state, mobile: !mql.matches };
    case "initialSetup": {
      const settings = JSON.parse(localStorage.getItem("settings"));
      return { ...state, mobile: !mql.matches, ...settings };
    }
    default:
      return state;
  }
};

const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Eleven",
    mobile: false,
    boxed: false,
    darkMode: false,
    stickyHeader: false,
    stickySidebar: true,
    collapsed: false,
    topHeader: false,
    fullscreen: false
  });

  useEffect(() => {
    mql = window.matchMedia(`(min-width: 992px)`);
    mql.addListener(mediaQueryChanged);
    dispatch({ type: "initialSetup" });
    return () => mql.removeListener(mediaQueryChanged);
  }, []);

  const mediaQueryChanged = () => {
    dispatch({ type: "setMobile" });
  };

  return <Provider value={[state, dispatch]}>{props.children}</Provider>;
};

export default AppProvider;
export const useAppState = () => useContext(Context);
