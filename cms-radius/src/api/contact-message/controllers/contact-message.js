'use strict';

/**
 * contact-message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-message.contact-message', ({ strapi }) => ({
  async create(ctx) {
    // @ts-ignore
    const { name, email, message, company, phone, originCountry} = ctx.request.body;

    if (!name || !email || !message || !company || !phone || !originCountry) {
      return ctx.badRequest('All fields are required.');
    }

    try {
      const date = new Date();
      const newMessage = await strapi.service('api::contact-message.contact-message').create({
        data: { name, email, message, created: date, company, phone, originCountry},
      });

      // Opcional: enviar un correo electrónico de notificación
      await strapi.plugin('email').service('email').send({
        to: process.env.EMAIL_TO_NOTIFICATE,
        from: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${name} - ${company} - ${email || phone} desde ${originCountry}`,
        text: message,
      });

      ctx.send(newMessage);
    } catch (err) {
      ctx.send(err);
    }
    
  },
}));
