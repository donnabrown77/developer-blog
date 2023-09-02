"use client";
import React, { useState } from "react";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "@/components/PostCard";
import MagnfiyingGlass from "@/components/MagnifyingGlass";
import "./globals.css";
import MagnifyingGlass from "@/components/MagnifyingGlass";

// TODO https://github.com/iamvishnusankar/next-sitemap/tree/master/examples/no-index-sitemaps
// TODO https://www.npmjs.com/package/next-sitemap
// TODO https://www.linkedin.com/posts/itsrennyman_creating-a-blog-as-a-developer-is-a-must-activity-7011593923408080896-eOB7/?originalSubdomain=rs
export default function Home() {
  // handleInput will contain an array of topics or nothing
  // if there is something returned, look for a matching post
  // then display matching posts
  const [topic, setTopic] = useState<string>("");
  // get text from input control, use the value to set the topic.
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.currentTarget.value);
  };

  // given an array of tags, return if there is a matching topic
  function findTags(t: string[]) {
    for (const element of t) {
      // Matching topics are not case sensitive
      let str1: string = element.toString().toLowerCase();
      let str2: string = topic.toString().toLowerCase();
      if (str1 === str2) return true;
    }
    return false;
  }
  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // test array of tags for matching topic
  let filteredPosts = posts.filter((post) => findTags(post.tags));
  // if there are a posts which match the topic, display only those posts
  if (filteredPosts.length > 0) posts = filteredPosts;

  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl mb-8'>Developer Blog</h1>
        <div className='relative max-w-lg mb-5 dark:bg-transparent'>
          <input
            type='text'
            aria-label='Search articles'
            placeholder='Search articles'
            value={topic}
            onChange={handleInput}
            size={100}
            className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
          ></input>
          <MagnifyingGlass />
        </div>
        {posts.map((post, idx) => (
          <div key={idx}>
            <hr className='grey-200 h-1 mb-10'></hr>
            <PostCard key={idx} {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}
