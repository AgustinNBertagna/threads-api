import type {
  FetchUserOptions,
  fetchUserSearchOptions,
  fetchUserSectionOptions,
} from "../types/usersTypes";
import { Docs, DocsKeys } from "../types/threadsClientTypes";
import threadsClient from "./threadsClient";

export async function fetchUserSearch({
  query,
  quantity,
}: fetchUserSearchOptions) {
  const response = await threadsClient({
    doc_id: Docs.SEARCH_USER,
    query,
    first: quantity ?? "",
  });
  return response;
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
  return response;
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
  return response;
}
