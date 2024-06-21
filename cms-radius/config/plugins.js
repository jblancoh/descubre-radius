module.exports = ({env}) => ({
  'random-sort': {
    enabled: true,
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET_NAME'),
          },
        }
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
          user: 'zlatanjon@hotmail.com',
          pass: 'tmpawqphfodwsysf'
        },
        secure: false,
      },
      settings: {
        defaultFrom: 'zlatanjon@hotmail.com',
        defaultReplyTo: 'zlatanjon@hotmail.com',
      }
    }
  },
  ckeditor: {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
});
