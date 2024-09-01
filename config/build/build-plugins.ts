import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import { TBuildOptions } from "./types.ts";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin  from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = ({mode, paths, analyzer, platform}: TBuildOptions): Configuration['plugins'] => {
  const isDev = mode === 'development';

  return [
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({template: paths.html}),
    isDev && new ProgressPlugin(),
    !isDev && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    analyzer && new BundleAnalyzerPlugin(),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform)
    }),
    isDev && new ForkTsCheckerWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ]
}