module.exports = {
  apps: [
    {
      name: 'dxwood',
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV: "production"
     },
    },
  ],
};
