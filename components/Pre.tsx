import React from "react";
import { CopyButton } from "./CopyButton";

/**
 * When the copy button is clicked, text is stored in the
 * text prop of CopyButton
 * @param The parameter raw comes from the anonymous function
 * defined in contentlayer.config.js. This functions use the visit
 * method from unist-util-visit. Visit walks the Abstract Syntax Tree
 * of the dom elements.
 * @returns jsx to display the text as a code block, displays the coding
 * language, and a copy button to copy the display code.
 */

export const Pre = ({ ...props }) => {
  const lang = props["data-language"] || "shell";

  const code = props["raw"];

  return (
    <pre {...props} className={"p-0"}>
      <div className='bg-gray-50 rounded-md overflow-x-auto'>
        <div
          className={
            "bg-gray-200 dark:text-black flex items-center relative px-4 py-2 text-sm font-sans justify-between rounded-t-md"
          }
        >
          {lang}
          <CopyButton text={code} />
        </div>
        <div className='mx-4 pt-4 pb-4  dark:text-black'>{code}</div>
      </div>
    </pre>
  );
};
