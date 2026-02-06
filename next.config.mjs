import { createMDX } from "fumadocs-mdx/next";
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url, { interopDefault: true, moduleCache: false });
const { docs, blog } = jiti("./source.config.ts");

const withMDX = createMDX({
  collections: { docs, blog },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  // i18n: {
  //   locales: ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'ru', 'ar', 'pt', 'it', 'tr', 'id', 'th', 'ms', 'uk', 'vi'],
  //   defaultLocale: 'en',
  // },
  images: {
    unoptimized: true,  // 静态导出必须禁用图片优化
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.casbin.org",
      },
      {
        protocol: "https",
        hostname: "hsluoyz.github.io",
      },
      {
        protocol: "https",
        hostname: "learn.microsoft.com",
        pathname: "/**",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/**/*": ["./content/**/*", "./.source/**/*"],
  },
};

export default withMDX(config);
