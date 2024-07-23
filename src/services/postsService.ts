import threadsClient from "./threadsClient";
import { Docs } from "../types/threadsClientTypes";
import type { PostsParams } from "../types/postsTypes";
import type { PostResponse } from "../types/threadsResponses/postTypes";
import {
  transformPostResponse,
  transformRelatedPostsResponse,
} from "./transformResponse";

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
