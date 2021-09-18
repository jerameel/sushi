const MODULE_RESOLVER = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
  },
];

module.exports = {
  plugins: [MODULE_RESOLVER],
  presets: ['module:metro-react-native-babel-preset'],
};
