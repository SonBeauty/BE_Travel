module.exports = {
  routes: [
    { method: "GET", path: "/traveler/hello", handler: "hello.index" },
    {
      method: "POST",
      path: "/traveler/avatar",
      handler: "hello.avatar",
    },
    {
      method: "POST",
      path: "/traveler/cover",
      handler: "hello.cover",
    },
  ],
};
