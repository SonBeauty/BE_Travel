/**
 * journey controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::journey.journey",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);
      console.log(response);
    },
  })
);
