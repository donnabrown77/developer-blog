#Developer-Blog

Developer-Blog is a blog designed for developers to write tutorials or to write about other topics. It is built with Next JS 13, TypeScript, and Tailwind CSS.

The blog has a dark and a light mode. It also uses Next MDX, React Syntax Highlighter, and Rehype Pretty Code to markup text. Also, there is a copy button to copy code blocks.

The colors and design are basic so the user can customize it easily. I added a projects pages to display a developers projects from GitHub using a GitHub token. I choose to integrate the list of GitHub projects into a page rather than having a link to the user's projects on the GitHub website because I thought it looks more visually consistent with the other pages.

Included are some sample blog posts in the \_posts directory.

For SEO, rename customize_sitemap.js to sitemap.js. Add in your infomation.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
