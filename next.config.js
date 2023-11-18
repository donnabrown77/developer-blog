/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  experimental: {
    appDir: true,
    // https://stackoverflow.com/questions/75571651/using-remark-and-rehype-plugins-with-nextjs-13/75571708#75571708
    mdxRs: false,
  },
});

const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
