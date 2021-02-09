import type { UserConfig, DefaultThemeOptions } from "vuepress";

const config: UserConfig<DefaultThemeOptions> = {
  base: "/docs/",
  lang: "zh-CN",
  title: "whalue-design",
  description: "whalue design for vue",

  themeConfig: {},

  port: 9527,
};

export default config;
