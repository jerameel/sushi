module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,

        // setting Disabled due to
        // https://github.com/facebook/metro/issues/682
        inlineRequires: false,
      },
    }),
  },
};
