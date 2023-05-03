const axios = require("axios");

module.exports = (plugin) => {
  // const register = plugin.controllers.auth.register;

  // plugin.controllers.auth.register = async (ctx) => {
  //   console.log(ctx);
  //   //   ctx.request.body.confirmed = false;
  //   //   console.log(ctx.request.body.confirmed);
  //   //   // const token = ctx.request.body.token;
  //   //   // const gres = await axios.post(
  //   //   //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SITEKEY}&response=${token}`
  //   //   // );
  //   //   // console.log(gres.data);
  //   //   // if (!gres.data.success) {
  //   //   //   return ctx.badRequest(
  //   //   //     null
  //   //   //     // formatError({
  //   //   //     //   id: "Auth.form.error.token.provide",
  //   //   //     //   message: "Please provide a valid token.",
  //   //   //     // })
  //   //   //   );
  //   //   // }
  //   //   await register(ctx);
  // };

  plugin.controllers.user.deletePhoto = async (ctx) => {
    const { user } = ctx.state;

    const entry = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      user.id,
      {
        populate: "*",
      }
    );

    const index = entry.images.findIndex((img) => img.id == ctx.params.id);

    if (index !== -1) {
      entry.images.splice(index, 1);
      await strapi.entityService.update(
        "plugin::users-permissions.user",
        user.id,
        {
          data: {
            images: entry.images,
          },
        }
      );
      return { message: "Image deleted successfully" };
    } else {
      return ctx.throw(404, "Image not found in user images array");
    }
  };

  plugin.routes["content-api"].routes.push({
    method: "DELETE",
    path: "/deletePhoto/:id",
    handler: "user.deletePhoto",
  });

  return plugin;
};
