/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
const isGhPages = !!repoName && !!process.env.GITHUB_ACTIONS;
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGhPages ? `/${repoName}` : "");

const nextConfig = {
  output: "export",
  // When deploying to GitHub Pages under a repo (e.g. /username/repo),
  // Next must know the basePath and assetPrefix so `_next/*` assets resolve.
  ...(configuredBasePath ? { basePath: configuredBasePath, assetPrefix: configuredBasePath } : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
