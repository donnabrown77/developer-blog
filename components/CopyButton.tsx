"use client"; // The "use client" directive is a convention to declare a boundary
// between a Server and Client Component module graph.

import { useState } from "react";
import "./ClipBoard";
import ClipBoard from "./ClipBoard";

type Text = {
  text: string;
};
/**
 * CopyButton implements copy to clipboard functionality
 * @param text
 * @returns
 */
export const CopyButton = ({ text }: Text) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <button
      className='dark:text-black flex ml-auto gap-2'
      disabled={isCopied}
      onClick={copy}
    >
      {/* clipboard icon */}
      <ClipBoard />
      {isCopied ? "Copied!" : "Copy code"}
    </button>
  );
};
