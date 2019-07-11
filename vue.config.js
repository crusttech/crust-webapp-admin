const buildVueConfig = require('corteza-webapp-admin/vue.config-builder')

module.exports = buildVueConfig({
  appName: 'admin',
  appLabel: 'Crust Admin',
  theme: 'crust-base',
  packageAlias: 'crust-webapp-admin',
})
