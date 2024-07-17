export const url = new URL("https://www.threads.net/api/graphql");
export const method = "POST";
export const fb_lsd = "AVrVPIItubY";
export const headers = {
  "Content-type": "application/x-www-form-urlencoded",
  "sec-fetch-site": "same-origin",
  "user-agent": "API Threads",
  "x-ig-app-id": "238260118697367",
  "x-fb-lsd": fb_lsd,
};
export const defaultVariables = {
  __relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:
    false,
  __relay_internal__pv__BarcelonaIsLoggedInrelayprovider: false,
  __relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider: false,
  __relay_internal__pv__BarcelonaUseCometVideoPlaybackEnginerelayprovider:
    false,
  __relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider: true,
  __relay_internal__pv__BarcelonaIsSableEnabledrelayprovider: false,
  username: "",
  userID: "",
  postID: "",
  targetPostID: "",
  specified_country: "",
  query: "",
  first: "",
};
export const feedDocs = { feed: "7442991059144077" };
export const usersDocs = {
  searchUser: "7156716761073591",
  userByName: "7608244852635754",
  userByID: "7519946354721015",
  posts: "7960125154039780",
  responses: "7943510042395008",
  reposts: "7865158943522605",
};
export const postsDocs = {
  post: "7694029870651498",
  relatedPosts: "7922331414476362",
};
