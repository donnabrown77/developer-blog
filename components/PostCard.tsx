import React from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";

/**
 *
 * @param post
 * @returns jsx to display post
 */
const PostCard = (post: Post) => {
  let tags = [...post.tags];
  return (
    <article className='mb-12'>
      <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
        <dl>
          <dd className='text-gray-500 dark:text-gray-400 text-base font-medium leading-6'>
            <time dateTime={post.date} className='mr-2 '>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </dd>
        </dl>
        <div className='space-y-5 xl:col-span-3'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                <Link href={post.url}>{post.title}</Link>
              </h2>
              <div className='flex flex-wrap'>
                {post.tags && (
                  <ul className='inline-flex'>
                    {tags.map((tag) => (
                      <li
                        key={post.date}
                        className='mr-3 uppercase block text-sm text-blue-800 dark:text-blue-400 font-medium'
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className='text-gray-500 dark:text-gray-400 prose max-w-none'>
              {post.excerpt}
            </div>
          </div>
          <div className='text-base font-medium leading-6'>
            <Link
              href={post.url}
              className=' text-blue-800 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-200'
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
