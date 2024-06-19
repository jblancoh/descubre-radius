module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://strapiradiusbucket.s3.us-east-2.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://strapiradiusbucket.s3.us-east-2.amazonaws.com'],
          'connect-src': ["'self'", 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
