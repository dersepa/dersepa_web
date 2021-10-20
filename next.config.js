const withCSS = require("@zeit/next-css");
// const withPurgeCss = require("next-purgecss");
const withFonts = require("next-fonts");
// const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withPWA = require("next-pwa");
const withOffline = require("next-offline");
const isProd = process.env.NODE_ENV === "production";

module.exports = withOffline(
  withCSS(
    withFonts(
      withImages(
        withPWA({
          pwa: {
            disable: !isProd,
            dest: "public",
          },
          webpack: (config, { isServer }) => {
            if (isServer) {
              require("./scripts/generate-sitemap");
            }

            return config;
          },
        })
      )
    )
  )
);
