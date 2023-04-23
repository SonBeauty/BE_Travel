module.exports = {
  routes: [
    {
      method: "POST",
      path: "/guide/license",
      handler: "license.license",
    },
    {
      method: "POST",
      path: "/guide/card",
      handler: "license.card",
    },
  ],
};
