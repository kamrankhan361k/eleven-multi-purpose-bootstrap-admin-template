import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
  getAll() {
    return [
      {
        path: "/",
        name: "Home",
        icon: "assets/animated-icons/shopping-bag/shopping-bag.json"
      },
      {
        path: "/widgets",
        name: "Widgets",
        icon: "assets/animated-icons/book/book.json",
        badge: {
          type: "danger",
          value: "5"
        }
      },
      {
        name: "Bootstrap UI",
        icon: "assets/animated-icons/folder/folder.json",
        children: [
          {
            path: "/components/buttons",
            name: "Buttons"
          },
          {
            path: "/components/accordion",
            name: "Accordion"
          },
          {
            path: "/components/alert",
            name: "Alert"
          },
          {
            path: "/components/carousel",
            name: "Carousel"
          },
          {
            path: "/components/collapse",
            name: "Collapse"
          },
          {
            path: "/components/datepicker",
            name: "Datepicker"
          },
          {
            path: "/components/dropdown",
            name: "Dropdown"
          },
          {
            path: "/components/modal",
            name: "Modal"
          },
          {
            path: "/components/pagination",
            name: "Pagination"
          },
          {
            path: "/components/popover",
            name: "Popover"
          },
          {
            path: "/components/progress",
            name: "Progress"
          },
          {
            path: "/components/rating",
            name: "Rating"
          },
          {
            path: "/components/tabs",
            name: "Tabs"
          },
          {
            path: "/components/timepicker",
            name: "Timepicker"
          },
          {
            path: "/components/tooltip",
            name: "Tooltip"
          },
          {
            path: "/components/typeahead",
            name: "Typeahead"
          }
        ]
      },
      {
        path: "/messages",
        name: "Messages",
        icon: "assets/animated-icons/speech/speech.json"
      },
      {
        name: "Form",
        icon: "assets/animated-icons/toggle/toggle.json",
        children: [
          {
            path: "/form/basic",
            name: "Basic Form"
          },
          {
            path: "/form/editor",
            name: "Editor"
          },
          {
            path: "/form/validation",
            name: "Validation"
          }
        ]
      },
      {
        name: "Tables",
        icon: "assets/animated-icons/box/box.json",
        children: [
          {
            path: "/table/basic",
            name: "Basic Table"
          },
          {
            path: "/table/responsive",
            name: "Responsive"
          }
        ]
      },
      {
        path: "/taskboard",
        name: "Taskboard",
        icon: "assets/animated-icons/bookmark-in-book/bookmark-in-book.json",
        badge: {
          type: "primary",
          value: "New"
        }
      },
      {
        path: "/charts",
        name: "Charts",
        icon: "assets/animated-icons/loading-bar/loading-bar.json"
      },
      {
        path: "/media",
        name: "Media",
        icon: "assets/animated-icons/youtube/youtube.json"
      },
      {
        name: "Mapbox",
        icon: "assets/animated-icons/up-down/up-down.json",
        children: [
          {
            path: "/mapbox/markers",
            name: "Markers"
          },
          {
            path: "/mapbox/location",
            name: "Location"
          }
        ]
      },
      {
        name: "Pages",
        icon: "assets/animated-icons/document/document.json",
        children: [
          {
            path: "/pages/invoice",
            name: "Invoice"
          },
          {
            path: "/pages/timeline",
            name: "Timeline"
          },
          {
            path: "/pages/blank",
            name: "Blank"
          },
          {
            path: "/pages/pricing",
            name: "Pricing"
          }
        ]
      },
      {
        path: "/social",
        name: "Social",
        icon: "assets/animated-icons/thumb/thumb.json"
      },
      {
        path: "/calendar",
        name: "Calendar",
        icon: "assets/animated-icons/calendar/calendar.json"
      },
      {
        name: "Authentication",
        icon: "assets/animated-icons/shield/shield.json",
        children: [
          {
            path: "/authentication/signin",
            name: "Signin"
          },
          {
            path: "/authentication/signup",
            name: "Signup"
          },
          {
            path: "/authentication/forgot",
            name: "Forgot"
          },
          {
            path: "/authentication/lockscreen",
            name: "Lockscreen"
          }
        ]
      },
      {
        name: "Error",
        icon: "assets/animated-icons/warning-1/warning-1.json",
        children: [
          {
            path: "/error/404",
            name: "404"
          },
          {
            path: "/error/500",
            name: "Error"
          }
        ]
      },
      {
        path: "/https://eleven.fusepx.com/docs",
        name: "Documentation",
        icon: "assets/animated-icons/subscribe-3/subscribe-3.json"
      }
    ];
  }
}
