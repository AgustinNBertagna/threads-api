import {
  URL,
  METHOD,
  HEADERS,
  DOCUMENTS_ID,
  FB_LSD,
  VARIABLES,
} from "./constants";

async function baseFetch({ doc_id, variables }: any) {
  const response = await fetch(URL, {
    method: METHOD,
    headers: HEADERS,
    body: new URLSearchParams({
      doc_id,
      lsd: FB_LSD,
      variables: JSON.stringify({ ...VARIABLES, ...variables }),
    }),
  });
  const json = await response.json();
  return json;
}

export async function fetchUserProfile({ username = "", userID = "" }) {
  const { userProfileByName, userProfileByID } = DOCUMENTS_ID;
  const doc_id = username ? userProfileByName : userProfileByID;
  const response = await baseFetch({
    doc_id,
    variables: { username, userID },
  });
  return response;
}

export async function fetchPost(postID: string) {
  const response = await baseFetch({
    doc_id: DOCUMENTS_ID.userPost,
    variables: { postID },
  });
  return response;
}

export async function fetchRelatedPosts(targetPostID: string) {
  const response = await baseFetch({
    doc_id: DOCUMENTS_ID.userPostRelatedPosts,
    variables: { targetPostID },
  });
  return response;
}

export async function fetchFeed(
  specified_country: string = "US",
  first: string = "10"
) {
  const response = await baseFetch({
    doc_id: DOCUMENTS_ID.feed,
    variables: { specified_country, first },
  });
  return response;
}

export async function fetchSearch(query: string = "", first: string = "") {
  const response = await baseFetch({
    doc_id: DOCUMENTS_ID.searchUser,
    variables: { query, first },
  });
  return response;
}

export async function fetchUserPosts(userID: string = "", first: string = "") {
  const response = await baseFetch({
    doc_id: DOCUMENTS_ID.userPosts,
    variables: { userID, first },
  });
  return response;
}
