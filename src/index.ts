import { Elysia } from "elysia";
import {
  fetchFeed,
  fetchSearch,
  fetchPost,
  fetchUserProfile,
  fetchUserPosts,
  fetchRelatedPosts,
} from "./utils/fetch";

const app = new Elysia()
  .get("/api/feed", ({ query: { country, quantity } }) =>
    fetchFeed(country, quantity)
  )
  .get("/api/user/id/:userID", ({ params: { userID } }) =>
    fetchUserProfile({ userID })
  )
  .get("/api/user/username/:username", ({ params: { username } }) =>
    fetchUserProfile({ username })
  )
  .get(
    "api/user/posts/:userID",
    ({ params: { userID }, query: { quantity } }) =>
      fetchUserPosts(userID, quantity)
  )
  .get("/api/search", ({ query: { query, quantity } }) =>
    fetchSearch(query, quantity)
  )
  .get("api/relatedposts/:targetPostID", ({ params: { targetPostID } }) =>
    fetchRelatedPosts(targetPostID)
  )
  .get("api/post/:postID", ({ params: { postID } }) => fetchPost(postID))
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);
