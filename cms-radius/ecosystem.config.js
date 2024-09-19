module.exports = ({ env }) => ({
    apps: [
      {
      name: 'Descubre radius',
      cwd: '/home/ubuntu/descubre-radius/cms-radius',
      script: 'npm',
      args: 'start',
      env: {
        APP_KEYS: env.array('APP_KEYS'),
        API_TOKEN_SALT: env.array('API_TOKEN_SALT'),
        ADMIN_JWT_SECRET: env.array('ADMIN_JWT_SECRET'),
        JWT_SECRET: env.array('JWT_SECRET'),
        NODE_ENV: env.array('NODE_ENV'),
        DATABASE_HOST: env.array('DATABASE_HOST'),
        DATABASE_PORT: env.array('DATABASE_PORT'),
        DATABASE_NAME: env.array('DATABASE_NAME'),
        DATABASE_USERNAME: env.array('DATABASE_USERNAME'),
        DATABASE_PASSWORD: env.array('DATABASE_PASSWORD'),
        AWS_ACCESS_KEY_ID: env.array('AWS_ACCESS_KEY_ID'),
        AWS_ACCESS_SECRET: env.array('AWS_ACCESS_SECRET'),
        AWS_REGION: env.array('AWS_REGION'),
        AWS_BUCKET_NAME: env.array('AWS_BUCKET_NAME'),
      },
    }
  ],
})
