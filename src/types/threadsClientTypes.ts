import { Country } from "./feedTypes";

export enum Docs {
  SEARCH_USER = "7156716761073591",
  USER_BY_NAME = "7608244852635754",
  USER_BY_ID = "7519946354721015",
  USER_POSTS = "7960125154039780",
  USER_RESPONSES = "7943510042395008",
  USER_REPOSTS = "7865158943522605",
  POST = "7694029870651498",
  RELATED_POSTS = "7922331414476362",
  FEED = "7442991059144077",
}

export type DocsKeys = "USER_POSTS" | "USER_RESPONSES" | "USER_REPOSTS";

interface FeedOptions {
  doc_id: Docs.FEED;
  specified_country?: Country;
  first?: number;
}

interface PostOptions {
  doc_id: Docs.POST;
  postID: string;
}

interface RelatedPostsOptions {
  doc_id: Docs.RELATED_POSTS;
  targetPostID: string;
}

interface SearchUserOptions {
  doc_id: Docs.SEARCH_USER;
  query: string;
  first?: number | string;
}

interface UserByNameOptions {
  doc_id: Docs.USER_BY_NAME;
  username: string;
}

interface UserByIdOptions {
  doc_id: Docs.USER_BY_ID;
  userID: number;
}

interface UserSectionOptions {
  doc_id: Docs.USER_POSTS | Docs.USER_RESPONSES | Docs.USER_REPOSTS;
  userID: number;
  first?: number;
}

export type ThreadsClientOptions =
  | FeedOptions
  | PostOptions
  | RelatedPostsOptions
  | SearchUserOptions
  | UserByNameOptions
  | UserByIdOptions
  | UserSectionOptions;
