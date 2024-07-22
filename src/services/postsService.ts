import threadsClient from "./threadsClient";
import { Docs } from "../types/threadsClientTypes";
import type { PostsParams } from "../types/postsTypes";
import type { PostResponse } from "../types/threadsResponses/postResponseTypes";
import type { RelatedPostsResponse } from "../types/threadsResponses/relatedPostsResponseTypes";

function transformPostResponse(response: PostResponse) {
  const edges = response.data.data.edges;
  const post = edges.splice(0, 1)[0].node.thread_items[0].post;
  const replies = edges.map((edge) => edge.node.thread_items[0].post);
  return { post, replies };
}

function transformRelatedPostsResponse(response: RelatedPostsResponse) {
  const threads = response.data.relatedPosts.threads;
  const posts = threads.map((thread) => thread.thread_items[0].post);
  return posts;
}

export async function fetchPost({ postID }: PostsParams) {
  const response: PostResponse = await threadsClient({
    doc_id: Docs.POST,
    postID,
  });
  return transformPostResponse(response);
}

export async function fetchRelatedPosts({ postID }: PostsParams) {
  const response = await threadsClient({
    doc_id: Docs.RELATED_POSTS,
    targetPostID: postID,
  });
  return transformRelatedPostsResponse(response);
}
