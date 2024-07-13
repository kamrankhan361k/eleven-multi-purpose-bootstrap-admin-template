import AnimatedIcon from "../components/core/AnimatedIcon";
import Cloudy from "../public/animated-icons/cloudy-weather/cloudy-weather.json";
import Lightning from "../public/animated-icons/lightning-weather/lightning-weather.json";
import Night from "../public/animated-icons/night-weather/night-weather.json";
import RainCloud from "../public/animated-icons/rain-cloud-weather/rain-cloud-weather.json";
import RainCloud2 from "../public/animated-icons/rain-cloud-weather-2/rain-cloud-weather-2.json";
import SnowStorm from "../public/animated-icons/snow-storm-weather/snow-storm-weather.json";
import Sun from "../public/animated-icons/sunset-weather/sunset-weather.json";

const weatherIcons = {
  "01d": Sun,
  "02d": Cloudy,
  "03d": Cloudy,
  "04d": Cloudy,
  "09d": RainCloud,
  "10d": RainCloud2,
  "11d": Lightning,
  "13d": SnowStorm,
  "50d": Cloudy,
  "01n": Night,
  "02n": Night,
  "03n": Night,
  "04n": Night,
  "09n": RainCloud,
  "10n": RainCloud2,
  "11n": Lightning,
  "13n": SnowStorm,
  "50n": Cloudy
};

// Capitalize
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Lowercase
export function lowercase(string) {
  return string.toLowerCase();
}

// Format price
export function formatPrice(number) {
  const fnumber = parseFloat(number);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(fnumber);
}

// Get weather icon class
export function getWeatherIcon(code, size, color) {
  const icon = weatherIcons[code];
  return (
    <AnimatedIcon
      animationData={icon}
      size={size}
      color={color}
      isStopped={false}
    />
  );
}
