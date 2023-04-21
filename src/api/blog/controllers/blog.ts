/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async create(ctx) {
      const { title, description } = ctx.request.body;

      const result = await strapi.query("api::blog.blog").create({
        data: {
          title,
          description,
        },
      });

      const { id } = result;

      const file = ctx.request.files["file"];

      const { path, name, type } = file;

      const files = {
        path,
        name,
        type,
      };

      await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: id,
          ref: "api::blog.blog",
          field: "Image",
        },
        files: files,
      });

      return result;
    },
  })
);
