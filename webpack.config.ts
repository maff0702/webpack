import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/build-webpack';
import { TBuildMode, TBuildPlatform } from './config/build/types.ts';

interface EnvVariables {
   mode?: TBuildMode,
   port?: number,
   analyzer?: boolean,
   platform?: TBuildPlatform
}

export default (env: EnvVariables) => {

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode?? 'development',
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
    }
  })

  return config;
}