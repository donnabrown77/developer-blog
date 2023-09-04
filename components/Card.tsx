import Link from "next/link";
import type { Repository } from "../types";
import Stars from "./Star";
import Forks from "./Fork";
/**
 *
 * @param url of github projects, name description, language, stars, forks
 * @returns jsx to display
 */

const Card = ({
  url,
  name,
  description,
  primaryLanguage,
  stargazerCount,
  forkCount,
}: Repository) => {
  return (
    <>
      <div className='md p-4 sm:w-full md:w-1/2' style={{ maxWidth: "544px" }}>
        <div className='w-full rounded-md border-2 p-2'>
          <h2 className='font-xl font-semibold my-4 mr-0 ml-8 text-center'>
            <Link href={url}>{name}</Link>
          </h2>
          <p className='grow shrink-0 mt-2'>{description}</p>
          <p className='mt-2'>
            {primaryLanguage && (
              <span className='mr-4'>
                <span
                  // TODO is there a way to not inline style this?
                  style={{
                    position: "relative",
                    top: "1px",
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: primaryLanguage?.color,
                  }}
                />{" "}
                <span itemProp='programmingLanguage'>
                  {primaryLanguage?.name}
                </span>
              </span>
            )}
            {stargazerCount > 0 && (
              <Link
                href={`${url}/stargazers`}
                className='no_underline hover:#0969da'
              >
                <Stars /> <span>{stargazerCount}</span>
              </Link>
            )}
            {forkCount > 0 && (
              <Link href={`${url}/network/members`} className='ml-4'>
                <Forks /> <span>{forkCount}</span>
              </Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
