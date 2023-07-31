export default async function sitemap() {
  // Customize this for your url
  // https://nextjs.org/blog/next-13-3
  const res = await fetch("https://.../posts");
  const allPosts = await res.json();

  const posts = allPosts.map((post) => ({
    url: `https://acme.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/about", "/blog"].map((route) => ({
    url: `https://acme.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
