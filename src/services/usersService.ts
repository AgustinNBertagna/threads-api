import threadsClient from "./threadsClient";
import {
  transformSearchUserResponse,
  transformUserPostsResponse,
  transformUserRepostsResponse,
  transformUserResponse,
  transformUserResponsesResponse,
} from "./transformResponse";
import { Docs, DocsKeys } from "../types/threadsClientTypes";
import type {
  FetchUserOptions,
  fetchUserSearchOptions,
  fetchUserSectionOptions,
} from "../types/usersTypes";

export async function fetchUserSearch({
  query,
  quantity,
}: fetchUserSearchOptions) {
  const response = await threadsClient({
    doc_id: Docs.SEARCH_USER,
    query,
    first: quantity ?? "",
  });
  return transformSearchUserResponse(response);
}

export async function fetchUser(options: FetchUserOptions) {
  let response;
  if ("userID" in options) {
    const { userID } = options;
    response = await threadsClient({ doc_id: Docs.USER_BY_ID, userID });
  } else {
    const { username } = options;
    response = await threadsClient({ doc_id: Docs.USER_BY_NAME, username });
  }
  return transformUserResponse(response);
}

export async function fetchUserSection({
  section,
  userID,
  quantity,
}: fetchUserSectionOptions) {
  const key = `USER_${section.toUpperCase()}` as DocsKeys;
  const doc_id = Docs[key];
  const response = await threadsClient({
    doc_id,
    first: quantity,
    userID,
  });
  if (doc_id === Docs.USER_POSTS) return transformUserPostsResponse(response);
  else if (doc_id === Docs.USER_RESPONSES)
    return transformUserResponsesResponse(response);
  else return transformUserRepostsResponse(response);
}
