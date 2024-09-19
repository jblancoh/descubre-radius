module.exports = {
    apps: [
      {
      name: 'Descubre radius',
      cwd: '/home/ubuntu/descubre-radius/cms-radius',
      script: 'npm',
      args: 'start',
      env: {
        APP_KEYS: process.env.APP_KEYS,
        API_TOKEN_SALT: process.env.API_TOKEN_SALT,
        ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
        JWT_SECRET: process.env.JWT_SECRET,
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_USERNAME: process.env.DATABASE_USERNAME,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_ACCESS_SECRET: process.env.AWS_ACCESS_SECRET,
        AWS_REGION: process.env.AWS_REGION,
        AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
      },
    }
  ],
}
