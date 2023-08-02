import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { Pre } from "@/components/Pre";
import type { PreProps } from "types";

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));
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

  const mdxComponents = {
    pre: Pre,
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
        {/* TODO does not display all style info */}
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
};

export default PostLayout;
