import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";

/** @type {import('rehype-pretty-code').Options} */
const options: import("rehype-pretty-code").Options = {
  theme: {
    light: "github-light",
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    tags: {
      type: "json",
      description: "post topics",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "summary of post",
      required: true,
    },
    author: {
      type: "string",
      description: "who wrote the post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "_posts",
  documentTypes: [Post],
  mdx: {
    // rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
    // Create a visitor function that traverses the node tree of the content
    // and extracts the unmodified (raw text) content from all code elements nested
    // inside the pre tag. We'll store this text content on the pre node itself.
    // To traverse the node tree, we'll use the visit function from the unist-util-visit
    // package.
    // This visitor function should be added to the list of existing Rehype plugins.
    // This will give us a way to keep the unmodified code content,
    //  which we can access later in Pre.tsx from the node's raw property.
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") return;
            node.raw = codeEl.children?.[0].value;
          }
        });
      },
      [rehypePrettyCode, options],
      () => (tree) => {
        visit(tree, (node) => {
          // Select all div elements that contain a data-rehype-pretty-code-fragment data attribute.
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            // Iterate over the pre children within each div (one for each theme) and
            // add the raw code content as a property to them.
            for (const child of node.children) {
              if (child.tagName === "pre") {
                child.properties["raw"] = node.raw;
              }
            }
          }
        });
      },
    ],
  },
});
