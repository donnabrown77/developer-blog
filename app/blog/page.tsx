import React from "react";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "@/components/PostCard";

import "../../app/globals.css";

const Blog = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl mb-8'>Developer Blog</h1>

        {posts.map((post, idx) => (
          <div key={idx}>
            <hr className='grey-200 h-1 mb-10'></hr>
            <PostCard key={idx} {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
