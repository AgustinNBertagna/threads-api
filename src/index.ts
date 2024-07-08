import { Elysia } from "elysia";
import {
  fetchFeed,
  fetchSearch,
  fetchPost,
  fetchUserProfile,
  fetchUserPosts,
  fetchRelatedPosts,
  fetchUserResponses,
  fetchUserReposts,
} from "./utils/fetch";

const app = new Elysia()
  .get("/api/feed", ({ query: { country, quantity } }) =>
    fetchFeed(country, quantity)
  )
  .get("/api/search", ({ query: { query, quantity } }) =>
    fetchSearch(query, quantity)
  )
  .get("/api/user/username/:username", ({ params: { username } }) =>
    fetchUserProfile({ username })
  )
  .get("/api/user/:userID", ({ params: { userID } }) =>
    fetchUserProfile({ userID })
  )
  .get(
    "/api/user/:userID/posts",
    ({ params: { userID }, query: { quantity } }) =>
      fetchUserPosts(userID, quantity)
  )
  .get(
    "/api/user/:userID/responses",
    ({ params: { userID }, query: { quantity } }) =>
      fetchUserResponses(userID, quantity)
  )
  .get(
    "/api/user/:userID/reposts",
    ({ params: { userID }, query: { quantity } }) =>
      fetchUserReposts(userID, quantity)
  )
  .get("api/post/:postID", ({ params: { postID } }) => fetchPost(postID))
  .get("api/post/:postID/related", ({ params: { postID } }) =>
    fetchRelatedPosts(postID)
  )
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);
