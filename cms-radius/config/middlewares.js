module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://strapiradiusbucket.s3.us-east-2.amazonaws.com', "https://cdnjs.cloudflare.com"],
          'media-src': ["'self'", 'data:', 'blob:', 'https://strapiradiusbucket.s3.us-east-2.amazonaws.com', "https://cdnjs.cloudflare.com"],
          'connect-src': ["'self'", 'https:'],
          "script-src": ["https://cdnjs.cloudflare.com"],
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
