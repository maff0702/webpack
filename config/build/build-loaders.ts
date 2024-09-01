import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { ModuleOptions } from "webpack"
import { TBuildOptions } from "./types.ts"
import ReactRefreshTypeScript from 'react-refresh-typescript'

export const buildLoader = (options: TBuildOptions): ModuleOptions['rules'] => {
  const isDev = options.mode === 'development';

  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]'
            },
          },
        },
        "sass-loader"
      ],
    },
    {
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        }
      }],
      exclude: /node_modules/,
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'convertColors',
                  params: {
                    currentColor: true
                  }
                }
              ]
            }
          }
        }
      ],
    }
  ]
}