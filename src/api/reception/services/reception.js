'use strict';

/**
 * reception service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reception.reception');
