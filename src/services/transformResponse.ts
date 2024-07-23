import type { UserResponse } from "../types/threadsResponses/userTypes";
import type { FeedResponse } from "../types/threadsResponses/feedTypes";
import type { PostResponse } from "../types/threadsResponses/postTypes";
import type { SearchUserResponse } from "../types/threadsResponses/searchUser";
import type { UserPostsResponse } from "../types/threadsResponses/userPostsTypes";
import type { UserRepostsResponse } from "../types/threadsResponses/userRepostsTypes";
import type { RelatedPostsResponse } from "../types/threadsResponses/relatedPostsTypes";
import type { UserResponsesResponse } from "../types/threadsResponses/userResponsesTypes";

export function transformFeedResponse(response: FeedResponse) {
  const edges = response.data.feedData.edges;
  const posts = edges.map(
    (edge) => edge.text_post_app_thread.thread_items[0].post
  );
  return posts;
}

export function transformPostResponse(response: PostResponse) {
  const edges = response.data.data.edges;
  const post = edges.splice(0, 1)[0].node.thread_items[0].post;
  const replies = edges.map((edge) => edge.node.thread_items[0].post);
  return { post, replies };
}

export function transformRelatedPostsResponse(response: RelatedPostsResponse) {
  const threads = response.data.relatedPosts.threads;
  const posts = threads.map((thread) => thread.thread_items[0].post);
  return posts;
}

export function transformSearchUserResponse(response: SearchUserResponse) {
  const edges = response.data.xdt_api__v1__users__search_connection.edges;
  const users = edges.map((edge) => edge.node);
  return users;
}

export function transformUserResponse(response: UserResponse) {
  return response.data.user;
}

export function transformUserPostsResponse(response: UserPostsResponse) {
  const edges = response.data.mediaData.edges;
  const posts = edges.map((edge) => edge.node.thread_items[0].post);
  return posts;
}

export function transformUserResponsesResponse(
  response: UserResponsesResponse
) {
  const edges = response.data.mediaData.edges;
  const responses = edges.map((edge) =>
    edge.node.thread_items.map((thread) => thread.post)
  );
  return responses;
}

export function transformUserRepostsResponse(response: UserRepostsResponse) {
  const edges = response.data.mediaData.edges;
  const reposts = edges.map((edge) => edge.node.thread_items[0].post);
  return reposts;
}
