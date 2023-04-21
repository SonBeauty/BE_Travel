/**
 * image controller
 */

import { factories } from "@strapi/strapi";
const jwt_decode = require("jwt-decode");

export default factories.createCoreController(
  "api::image.image",
  ({ strapi }) => ({
    async create(ctx) {
      const { token } = ctx.request.body;

      const result = await strapi.query("api::image.image").create({
        data: {
          token,
        },
      });

      const decoded = jwt_decode(token);

      const file = ctx.request.files["file"];

      const { path, name, type } = file;

      const files = {
        path,
        name,
        type,
      };

      console.log(decoded);

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: decoded.id,
          ref: "plugin::users-permissions.user",
          field: "images",
        },
        files: files,
      });
      upload;
      result.uploadUrl = upload[0].url;

      return result;
    },
  })
);
