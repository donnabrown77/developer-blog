import { DetailedHTMLProps, HTMLAttributes } from "react";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { CopyButton } from "@/components/CopyButton";
import "../../globals.css";

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));

// Dynamic information, such as the current route parameters,
// which can be set by exporting a generateMetadata function that returns
// a Metadata object.
export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, excerpt: post?.excerpt };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  const MDXContent = useMDXComponent(post!.body.code);

  const mdxComponents: MDXComponents = {
    // Override the default <pre> element
    pre: function ({
      children,
      ...props
    }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
      const propsObj = { ...props };
      const propsValues = Object.values(propsObj);
      const [, , dataLanguage, dataTheme, code] = propsValues;
      const lang = dataLanguage || "shell";

      return (
        <pre data-language={lang} data-theme={dataTheme} className={"py-4"}>
          <div className='bg-gray-50 rounded-md overflow-x-auto'>
            <div
              className={
                "bg-gray-200 dark:text-black flex items-center relative px-4 py-2 text-sm font-sans justify-between rounded-t-md"
              }
            >
              {lang}
              <CopyButton text={code} />
            </div>

            <div className={"p-2"}>{children}</div>
          </div>
        </pre>
      );
    },
  };

  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <h1 className='text-xl'>{post.title}</h1>
      <p>
        <span className='text-gray-500 dark:text-gray-400'>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </span>
      </p>
      <article>
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
};

export default PostLayout;
