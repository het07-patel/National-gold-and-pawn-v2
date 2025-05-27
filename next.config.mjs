/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.mp4": {
          loaders: [
            {
              loader: "file-loader",
              options: {
                publicPath: "/_next/static/videos/",
                publicPath: "/_next/static/favicon/",
                outputPath: "videos/",
                name: "[name].[hash].[ext]",
              },
            },
          ],
        },
      },
    },
  },
  reactStrictMode: false,
  images: {
    domains: ["www.bluesap.us", "unsplash.com", "cloudinary.com"],
    unoptimized: true,
  },
};

export default nextConfig;
