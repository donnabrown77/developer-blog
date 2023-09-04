import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Card from "@/components/Card";
import type { DataProps, Repository } from "@/types";

/**
 *
 * @param
 * @returns displays the list of user's github projects and descriptions
 */

export default async function Projects() {
  // You will need to generate a personal access token from github. The
  // github token is included in the .env.local file in this format:
  // GITHUB_TOKEN="Your token"
  // Go to Github: Choose generate new token ( classic )
  // You’ll see a menu with various permissions you can check. Everything is unchecked by default. At a minimum,
  // you’ll want to check “public_repo”, which is under “repo”, and you’ll also want to check “read:user”,
  // which is under “user.” Then click “Generate token”.
  // Save that token (somewhere safe make sure it doesn’t make its way into your repository),
  // and put it in your .env.local file. Now the projects should be able to be read with that token.
  // https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token
  // Using a link to the github api, get data about a user's repositories
  const endpoint = "https://api.github.com/graphql";

  if (!process.env.GITHUB_TOKEN) {
    return (
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        <div className='mx-auto divide-y'>
          <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
            <h1 className='text-left text-3xl font-bold leading-9 tracking-tight sm:leading-10 md:text-3xl md:leading-14'>
              Projects
            </h1>
            <p className='text-lg text-left leading-7'>
              Invalid Github token. Unable to access Github projects.
            </p>
          </div>
        </div>
      </div>
    );
  }
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const query = gql`
    {
      viewer {
        login
        repositories(
          first: 20
          privacy: PUBLIC
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          nodes {
            id
            name
            description
            url
            primaryLanguage {
              color
              id
              name
            }
            forkCount
            stargazerCount
          }
        }
      }
    }
  `;

  const {
    viewer: {
      repositories: { nodes: data },
    },
  } = await graphQLClient.request<DataProps>(query);

  return (
    <>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        <div className='mx-auto divide-y'>
          <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
            <h1 className='text-left text-3xl font-bold leading-9 tracking-tight sm:leading-10 md:text-3xl md:leading-14'>
              Projects
            </h1>
            <p className='text-lg text-left leading-7'>
              List of GitHub projects
            </p>
          </div>
          <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap md:flex-wrap:nowrap'>
              {data.map(
                ({
                  id,
                  url,
                  name,
                  description,
                  primaryLanguage,
                  stargazerCount,
                  forkCount,
                }: Repository) => (
                  <Card
                    key={id}
                    url={url}
                    name={name}
                    description={description}
                    primaryLanguage={primaryLanguage}
                    stargazerCount={stargazerCount}
                    forkCount={forkCount}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
