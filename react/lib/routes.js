import Authentication from "../public/animated-icons/shield/shield.json";
import Calendar from "../public/animated-icons/calendar/calendar.json";
import Charts from "../public/animated-icons/loading-bar/loading-bar.json";
import Components from "../public/animated-icons/folder/folder.json";
import Documentation from "../public/animated-icons/subscribe-3/subscribe-3.json";
import Errors from "../public/animated-icons/warning-1/warning-1.json";
import Form from "../public/animated-icons/toggle/toggle.json";
import Home from "../public/animated-icons/shopping-bag/shopping-bag.json";
import Maps from "../public/animated-icons/up-down/up-down.json";
import Media from "../public/animated-icons/youtube/youtube.json";
import Messages from "../public/animated-icons/speech/speech.json";
import Pages from "../public/animated-icons/document/document.json";
import Social from "../public/animated-icons/thumb/thumb.json";
import Tables from "../public/animated-icons/box/box.json";
import Taskboard from "../public/animated-icons/bookmark-in-book/bookmark-in-book.json";
import Widgets from "../public/animated-icons/book/book.json";

export default [
  {
    path: "/",
    name: "Home",
    icon: Home
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: Widgets,
    badge: {
      type: "danger",
      value: "5"
    }
  },
  {
    path: "/components",
    name: "Bootstrap UI",
    icon: Components,
    children: [
      {
        path: "/alerts",
        name: "Alerts"
      },
      {
        path: "/badge",
        name: "Badge"
      },
      {
        path: "/buttons",
        name: "Buttons"
      },
      {
        path: "/card",
        name: "Card"
      },
      {
        path: "/carousel",
        name: "Carousel"
      },
      {
        path: "/jumbotron",
        name: "Jumbotron"
      },
      {
        path: "/list-group",
        name: "List Group"
      },
      {
        path: "/modals",
        name: "Modals"
      },
      {
        path: "/progress",
        name: "Progress"
      },
      {
        path: "/other",
        name: "Other"
      }
    ]
  },

  {
    path: "/messages",
    name: "Messages",
    icon: Messages
  },
  {
    path: "/forms",
    name: "Form",
    icon: Form,
    children: [
      {
        path: "/basic",
        name: "Basic Form"
      },
      {
        path: "/editor",
        name: "Editor"
      },
      {
        path: "/validation",
        name: "Validation"
      }
    ]
  },
  {
    path: "/tables",
    name: "Tables",
    icon: Tables,
    children: [
      {
        path: "/basic",
        name: "Basic Table"
      },
      {
        path: "/responsive",
        name: "Responsive"
      }
    ]
  },
  {
    path: "/taskboard",
    name: "Taskboard",
    icon: Taskboard,
    badge: {
      type: "primary",
      value: "New"
    }
  },
  {
    path: "/charts",
    name: "Charts",
    icon: Charts
  },
  {
    path: "/media",
    name: "Media",
    icon: Media
  },
  {
    path: "/maps",
    name: "Mapbox",
    icon: Maps,
    children: [
      {
        path: "/markers",
        name: "Markers"
      },
      {
        path: "/location",
        name: "Location"
      }
    ]
  },
  {
    path: "/pages",
    name: "Pages",
    icon: Pages,
    children: [
      {
        path: "/invoice",
        name: "Invoice"
      },
      {
        path: "/timeline",
        name: "Timeline"
      },
      {
        path: "/blank",
        name: "Blank"
      },
      {
        path: "/pricing",
        name: "Pricing"
      }
    ]
  },
  {
    path: "/social",
    name: "Social",
    icon: Social
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: Calendar
  },
  {
    name: "Authentication",
    icon: Authentication,
    children: [
      {
        path: "/signin",
        name: "Signin"
      },
      {
        path: "/signup",
        name: "Signup"
      },
      {
        path: "/forgot",
        name: "Forgot"
      },
      {
        path: "/lockscreen",
        name: "Lockscreen"
      }
    ]
  },
  {
    name: "Error",
    icon: Errors,
    children: [
      {
        path: "/thisroutedoesntwork",
        name: "404"
      },
      {
        path: "/500",
        name: "Error"
      }
    ]
  },
  {
    path: "//eleven.fusepx.com/docs",
    name: "Documentation",
    icon: Documentation
  }
];
