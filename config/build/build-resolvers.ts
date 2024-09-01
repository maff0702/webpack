import { Configuration } from "webpack";
import { TBuildOptions } from "./types.ts";


export const buildResolvers = (options: TBuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src
    }
  }
}