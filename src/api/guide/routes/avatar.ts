module.exports = {
  routes: [
    {
      method: "POST",
      path: "/guide/avatar",
      handler: "avatar.avatar",
    },
    {
      method: "POST",
      path: "/guide/cover",
      handler: "avatar.cover",
    },
  ],
};
