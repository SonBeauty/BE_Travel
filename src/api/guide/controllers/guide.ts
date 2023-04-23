/**
 * guide controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::guide.guide",
  ({ strapi }) => ({
    async create(ctx) {
      //   const file = ctx.request.files["file"];

      console.log(ctx.request.body);
      const now = Date.now();

      const result = await strapi.query("api::guide.guide").create({
        data: { ...ctx.request.body, publishedAt: now },
      });
      const file = ctx.request.files["file"];
      const { path, name, type } = file;

      const files = {
        path,
        name,
        type,
      };

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: result.id,
          ref: "api::guide.guide",
          field: "videoIntroduction",
        },
        files: files,
      });
      upload;
      return result;
    },
  })
);
