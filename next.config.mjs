import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
// https://github.com/vercel/next.js/issues/46659
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
};
// TODO Doesn't show line numbers with next js 13.
// want to know why
const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
export default withMDX(nextConfig);
