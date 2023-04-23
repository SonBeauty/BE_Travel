import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::guide.guide",
  ({ strapi }) => ({
    async card(ctx) {
      const file = ctx.request.files["card"];
      const { path, name, type } = file;
      const { id } = ctx.request.body;

      const files = {
        path,
        name,
        type,
      };

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: id,
          ref: "api::guide.guide",
          field: "card",
        },
        files: files,
      });
      upload;
      upload[0].url;

      ctx.send({ msg: "this is card", url: `${upload[0].url}` });
    },

    async license(ctx) {
      const { id } = ctx.request.body;

      const file = ctx.request.files["card"];
      const { path, name, type } = file;

      const files = {
        path,
        name,
        type,
      };

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: id,
          ref: "api::guide.guide",
          field: "license",
        },
        files: files,
      });
      upload;
      upload[0].url;

      ctx.send({ msg: "this is license", url: `${upload[0].url}` });
    },
  })
);
