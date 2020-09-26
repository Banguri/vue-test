module.exports = {
  apps: [
    {
      name: 'service-as-desktop',
      script: './server/index.js',
      watch: false,
      node_args: ' --max_old_space_size=2048',
      args: 'start',
      max_memory_restart: '2048M',
      // instances : "2",
      env: {
        NODE_ENV: 'production',
        'HOST': '0.0.0.0',
        'PORT': '8000',
        'CONFIG_LEVEL': 'prd',
        'DEVICE': 'pc',
        'COLLECTION': 'src/plugins/collections/pc.collection.js'
      },

      env_loc: {
        NODE_ENV: 'production',
        'HOST': '0.0.0.0',
        'PORT': '8000',
        'CONFIG_LEVEL': 'loc',
        'DEVICE': 'pc',
        'COLLECTION': 'src/plugins/collections/pc.collection.js'
      },

      env_dev: {
        NODE_ENV: 'production',
        'HOST': '0.0.0.0',
        'PORT': '8000',
        'CONFIG_LEVEL': 'dev',
        'DEVICE': 'pc',
        'COLLECTION': 'src/plugins/collections/pc.collection.js'
      },

      env_prd: {
        NODE_ENV: 'production',
        'HOST': '0.0.0.0',
        'PORT': '8000',
        'CONFIG_LEVEL': 'prd',
        'DEVICE': 'pc',
        'COLLECTION': 'src/plugins/collections/pc.collection.js'
      },
    },
  ],
};
