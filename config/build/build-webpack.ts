import { Configuration } from 'webpack';
import { buildDevServer } from './build-dev-server';
import { buildResolvers } from './build-resolvers';
import { buildPlugins } from './build-plugins';
import { buildLoader } from './build-loaders';
import { TBuildOptions } from './types.ts';

export const buildWebpack = (options: TBuildOptions): Configuration => {
  const {mode, paths, analyzer} = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'production',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options)
  }
}