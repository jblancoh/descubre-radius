require('dotenv').config();
module.exports = {
    apps: [
      {
      name: 'Descubre radius',
      cwd: '/home/ubuntu/descubre-radius/cms-radius',
      script: 'npm',
      args: 'start',
      env: {
        ...process.env,
      },
    }
  ],
}
