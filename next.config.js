/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/arav-sarma-website-github.io" : "",
  assetPrefix: isProd ? "/arav-sarma-website-github.io/" : "",
};

module.exports = nextConfig;
