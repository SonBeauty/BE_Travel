/**
 * journey controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::journey.journey",
  ({ strapi }) => ({
    async create(ctx) {
      const create = await super.create(ctx);
      const entry = await strapi.entityService.findOne(
        "api::journey.journey",
        create.data.id,
        {
          populate: "*",
        }
      );
      ctx.send(entry);
    },
  })
);
