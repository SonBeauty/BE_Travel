export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: "https://f53c-2402-800-6279-7e33-5c4c-d2f3-4e4a-bf80.ngrok-free.app",
});
