import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repositoryName = "Duoniq-BeBloomy-Website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.limassoldelmar.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  basePath: isProduction ? `/${repositoryName}` : "",
  assetPrefix: isProduction ? `/${repositoryName}/` : "",
};

export default nextConfig;
