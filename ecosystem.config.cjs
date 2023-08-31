module.exports = {
  apps : [{
    name: "expressed",
    script: "./bin/www.js",
    watch: '.',
    instances: "max",
    env_development: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
