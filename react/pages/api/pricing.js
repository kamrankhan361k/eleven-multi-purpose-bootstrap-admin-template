import Basic from "../../public/animated-icons/design/design.json";
import Extended from "../../public/animated-icons/idea/idea.json";
import Managed from "../../public/animated-icons/shipped/shipped.json";
import Standard from "../../public/animated-icons/book/book.json";

const data = [
  {
    icon: Standard,
    title: "Standard Licence",
    subtitle: "Test account",
    price: 0,
    features: [
      {
        title: "Secure"
      },
      {
        title: "1 user"
      },
      {
        title: "Analytics"
      }
    ]
  },
  {
    icon: Basic,
    title: "Basic License",
    subtitle: "Freelancer",
    price: 10,
    features: [
      {
        title: "Secure"
      },
      {
        title: "2 users"
      },
      {
        title: "Analytics"
      }
    ]
  },
  {
    icon: Managed,
    title: "Managed License",
    subtitle: "Small business",
    price: 49,
    features: [
      {
        title: "Secure"
      },
      {
        title: "3 users"
      },
      {
        title: "Analytics"
      }
    ]
  },
  {
    icon: Extended,
    title: "Extended License",
    subtitle: "Corporate",
    price: 99,
    features: [
      {
        title: "Secure"
      },
      {
        title: "∞ users"
      },
      {
        title: "Analytics"
      }
    ]
  }
];

export default (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 2000);
};
