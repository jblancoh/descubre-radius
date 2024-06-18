module.exports = {
    apps: [
      {
      name: 'Descubre radius',
      cwd: '/home/ubuntu/descubre-radius/cms-radius',
      script: 'npm',
      args: 'start',
      env: {
        APP_KEYS:"XxtyjVPS9qpVaITJ4IX1ag==,b2hisyehgu6+Mqx31NCXtw==,s1wE5LywR9ZdGTBfLhyFBw==,OW2jXF9liF2pFLSxI4uKGw==",
        API_TOKEN_SALT: "+nzbDy8KEYUw3rMlqk3vZw==",
        ADMIN_JWT_SECRET: "dCwIyPrQAtkBwfUp90BFMA==",
        JWT_SECRET: "h7WamnnL9uIuKPdGN4TsDA==",
        NODE_ENV: 'production',
        DATABASE_HOST: "radius-strapi.cheyh15e6e8t.us-east-2.rds.amazonaws.com",
        DATABASE_PORT: '5432',
        DATABASE_NAME: "postgres",
        DATABASE_USERNAME: "postgres",
        DATABASE_PASSWORD: "gLmNQ9HZ",
        AWS_ACCESS_KEY_ID: "AKIAUBWUXHEHHK5ZW5XR",
        AWS_ACCESS_SECRET: "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",
        AWS_REGION: "us-east-2",
        AWS_BUCKET_NAME: "strapiradiusbucket"
      },
    }
  ],
}
