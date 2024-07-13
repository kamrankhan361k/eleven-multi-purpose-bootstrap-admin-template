const withSass = require("@zeit/next-sass");
const isProd = process.env.NODE_ENV === "production";
const assetPrefix = isProd ? "https://example.com/" : "http://localhost:3000/";
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ["swr"]
      }
    ],
    withSass
  ],
  {
    target: "serverless",
    assetPrefix: assetPrefix,
    env: {
      baseUrl: assetPrefix,
      weatherApi: "YOUR_WEATHER_API",
      mapBoxApi: "YOUR_MAPBOX_API"
    },
    onDemandEntries: {
      maxInactiveAge: 1000 * 60 * 60,
      pagesBufferLength: 5
    }
  }
);
