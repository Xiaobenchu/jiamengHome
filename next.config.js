const withImages = require('next-images');
const path = require('path');

module.exports = {
  ...withImages({
    webpack: (config) => {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@utils'] = path.resolve(__dirname, './src/utils');
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@images'] = path.resolve(__dirname, './src/images');
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@jmlib'] = path.resolve(__dirname, './src/jmlib');
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@components'] = path.resolve(
        __dirname,
        './src/components',
      );
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@services'] = path.resolve(
        __dirname,
        './src/services',
      );
      return config;
    },
  }),
  future: {
    webpack5: true,
  },
};
