module.exports = {
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
  images: {
    domains: ["cms.potsdamer-buergerstiftung.com", "img.evbuc.com"],
  },
  env: {
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  },
  async rewrites() {
    return [
      {
        source: "/js/insights.js",
        destination: "https://plausible.io/js/plausible.js",
      },
      {
        source: "/api/insights/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};
