const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, "..");

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

config.resolver.disableHierarchicalLookup = true;

// Pin react-native and react to the example's versions to prevent
// metro from resolving the root workspace's react-native@0.84 (devDep)
// instead of the example's react-native@0.81.
config.resolver.extraNodeModules = {
  "react-native": path.resolve(projectRoot, "node_modules/react-native"),
  react: path.resolve(projectRoot, "node_modules/react"),
};

const configWithNativewind = withNativeWind(config, {
  input: './src/globals.css',
  inlineRem: 16
});

module.exports = withStorybook(configWithNativewind);
