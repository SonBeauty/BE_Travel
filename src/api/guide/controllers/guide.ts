/**
 * guide controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::guide.guide",
  ({ strapi }) => ({
    async create(ctx) {
      const now = Date.now();

      const result = await strapi.query("api::guide.guide").create({
        data: { ...ctx.request.body, publishedAt: now },
      });
      const file = ctx.request.files["file"];
      var { path, name, type, size } = file;

      const files = {
        path,
        name,
        type,
        size,
      };

      const refId = Number(result.id); // Attempt to convert result.id to a number
      if (isNaN(refId)) {
        console.error("Invalid refId:", result.id);
      }

      const upload = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId,
          ref: "api::guide.guide",
          field: "videoIntroduction",
        },
        files: files,
      });

      const card = ctx.request.files["card"];
      var { path, name, type } = card;

      const fileCard = {
        path,
        name,
        type,
      };

      const uploadCard = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: result.id,
          ref: "api::guide.guide",
          field: "card",
        },
        files: fileCard,
      });

      const license = ctx.request.files["license"];
      var { path, name, type } = license;

      const fileLicense = {
        path,
        name,
        type,
      };

      const uploadlicense = await strapi.plugins.upload.services.upload.upload({
        data: {
          refId: result.id,
          ref: "api::guide.guide",
          field: "card",
        },
        files: fileLicense,
      });
      upload;
      uploadCard;
      uploadlicense;
      return result;
    },
  })
);
