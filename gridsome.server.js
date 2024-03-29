const nodeExternals = require('webpack-node-externals');

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    api.chainWebpack((config, { isServer }) => {
      config.mode('development');
      if (isServer) {
        config.externals([
          nodeExternals({
            allowlist: [/^vuetify/],
          }),
        ]);
      }
    });
    //
  });

  api.createPages(({ createPage }) => {
    //
  });
};
