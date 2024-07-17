import { usersDocs } from "../config/consts";
import type {
  FetchUserOptions,
  fetchUserSearchOptions,
  fetchUserSectionOptions,
} from "../types/usersTypes";
import threadsClient from "./threadsClient";

export async function fetchUserSearch({
  query,
  quantity,
}: fetchUserSearchOptions) {
  const response = await threadsClient({
    doc_id: usersDocs.searchUser,
    query,
    first: quantity,
  });
  return response;
}

export async function fetchUser(options: FetchUserOptions) {
  let response;
  if ("userID" in options) {
    const { userID } = options;
    response = await threadsClient({ doc_id: usersDocs.userByID, userID });
  } else {
    const { username } = options;
    response = await threadsClient({ doc_id: usersDocs.userByName, username });
  }
  return response;
}

export async function fetchUserSection({
  section,
  userID,
  quantity,
}: fetchUserSectionOptions) {
  const response = await threadsClient({
    doc_id: usersDocs[section],
    first: quantity,
    userID,
  });
  return response;
}
