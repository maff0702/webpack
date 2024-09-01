import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import { TBuildOptions } from './types.ts/index.js';

export const buildDevServer = (options: TBuildOptions): DevServerConfiguration => {
  return {
    port: options.port ?? 4000,
    open: false,
    historyApiFallback: true,
    hot: true
  }
}