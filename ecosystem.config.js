module.exports = {
  apps: [
    {
      name: 'jt-front',
      script: './server/index.js',
      watch: false,
      node_args: ' --max_old_space_size=2048',
      args: 'start',
      max_memory_restart: '2048M',
      // instances : "2",
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000',
        COLLECTION: 'src/plugins/collections/common.collection.js',
        CONFIG_LEVEL: 'dev',
      },
      // env: {
      //   NODE_ENV: 'production',
      //   HOST: '0.0.0.0',
      //   PORT: '3000',
      //   CONFIG_LEVEL: 'prd',
      // },
      env_dev_loc: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000',
        CONFIG_LEVEL: 'dev_loc',
      },
      env_loc: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000',
        CONFIG_LEVEL: 'loc',
      },

      env_dev: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000',
        CONFIG_LEVEL: 'dev',
      },

      env_sta: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000',
        CONFIG_LEVEL: 'sta',
      },

      env_prd: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000',
        CONFIG_LEVEL: 'prd',
      },
    },
  ],
};
