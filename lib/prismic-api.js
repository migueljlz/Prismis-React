import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL);

async function fetchAPI(query, { variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE
      }
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
    query {
      allPosts {
        edges {
          node {
            title
            coverimage
            excerpt
            _meta {
              uid
            }
          }
        }
      }
    }
  `
  );

  return data.allPosts.edges;
}

export async function getPost(uid) {
  const data = await fetchAPI(
    `
    query Post($uid: String!){
      post(uid: $uid, lang: "es-es") {
        title
        excerpt
        coverimage
        body {
          ... on PostBodyText {
            type
            label
            primary {
              text
            }
          }
          ... on PostBodyQuote {
            type
            label
            primary {
              quote
              name_of_the_author
            }
          }
        }
        _meta {
          uid
        }
      }
    }
    `,
    {
      variables: { uid }
    }
  );

  return data;
}

export async function getAllPostsSlugs() {
  const data = await fetchAPI(
    `
    query {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `
  );

  return data.allPosts.edges;
}
