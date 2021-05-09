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
};
