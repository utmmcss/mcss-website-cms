'use strict';

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);

      // Don't include Content attribute when querying for all events
      const new_data = data.map(item => {
        const newItem = { ...item };
        if (newItem.attributes) {
          delete newItem.attributes.Content;
        }
        return newItem;
      });

      return { new_data, meta };
    },

    async findOne(ctx) {
        var response = await super.findOne(ctx);

        // Don't include Featured attribute when querying for one event
        delete response.data.attributes.Featured;

        return response;
      }

  }));
