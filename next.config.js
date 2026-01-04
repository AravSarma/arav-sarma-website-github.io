/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repo = "AravSarma-Site";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd && isGitHubPages ? `/${repo}` : "",
  assetPrefix: isProd && isGitHubPages ? `/${repo}/` : "",
};

module.exports = nextConfig;
