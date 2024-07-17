interface UserByID {
  userID: number;
}

interface UserByName {
  username: string;
}

export interface fetchUserSearchOptions {
  query: string;
  quantity?: number;
}

export type FetchUserOptions = UserByID | UserByName;

export interface fetchUserSectionOptions {
  section: Section;
  userID: number;
  quantity?: number;
}

export enum Section {
  POSTS = "posts",
  RESPONSES = "responses",
  REPOSTS = "reposts",
}
