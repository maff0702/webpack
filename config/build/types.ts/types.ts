export type TBuildPath = {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export type TBuildMode = 'production' | 'development'
export type TBuildPlatform = 'mobile' | 'desktop'

export type TBuildOptions = {
  port: number;
  paths: TBuildPath;
  mode: TBuildMode;
  platform: TBuildPlatform;
  analyzer?: boolean;
}