/**
 * traveler controller
 */

import { factories } from "@strapi/strapi";
const jwt_decode = require("jwt-decode");

export default factories.createCoreController(
  "api::guide.guide",
  ({ strapi }) => ({
    async index(ctx) {
      ctx.send({ msg: "this is hello" });
    },

    async avatar(ctx) {
      const decoded = jwt_decode(ctx.request.header.token);
      const file = ctx.request.files["file"];
      const { path, name, type } = file;

      const files = {
        path,
        name,
        type,
      };

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: decoded.id,
          ref: "plugin::users-permissions.user",
          field: "avatar",
        },
        files: files,
      });
      upload;
      upload[0].url;

      ctx.send({ msg: "this is post", url: `${upload[0].url}` });
    },

    async cover(ctx) {
      console.log(ctx.request.header.token);
      const decoded = jwt_decode(ctx.request.header.token);
      console.log(decoded);
      const file = ctx.request.files["file"];
      const { path, name, type } = file;

      const files = {
        path,
        name,
        type,
      };

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: decoded.id,
          ref: "plugin::users-permissions.user",
          field: "cover",
        },
        files: files,
      });
      upload;
      upload[0].url;

      ctx.send({ msg: "this is post", url: `${upload[0].url}` });
    },
  })
);
