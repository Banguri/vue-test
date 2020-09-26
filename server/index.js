/*

ELK Agent 설정

const apm = require('elastic-apm-node').start({
  serviceName: '',
  secretToken: '',
  serverUrl: ''
})

 */

const suffix = require('../node_modules/nuxt/package.json').name.includes(
  '-edge'
)
  ? '-edge'
  : '';
require('@nuxt/cli' + suffix)
  .run()
  .catch(error => {
    require('consola').fatal(error);
    process.exit(2);
  });
