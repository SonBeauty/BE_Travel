module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: `${process.env.SMTP_HOST}`, //SMTP Host
        port: `${process.env.SMTP_PORT}`, //SMTP Port
        secure: true,
        username: `${process.env.FROM_EMAIL}`,
        password: `${process.env.SMTP_PASSWORD}`,
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: `${process.env.FROM_EMAIL}`,
      defaultReplyTo: `${process.env.FROM_EMAIL}`,
    },
  },
});
