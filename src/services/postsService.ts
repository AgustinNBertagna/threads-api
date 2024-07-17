import { postsDocs } from "../config/consts";
import type { PostsParams } from "../types/postsTypes";
import threadsClient from "./threadsClient";

export async function fetchPost({ postID }: PostsParams) {
  const response = await threadsClient({ doc_id: postsDocs.post, postID });
  return response;
}

export async function fetchRelatedPosts({ postID }: PostsParams) {
  const response = await threadsClient({
    doc_id: postsDocs.relatedPosts,
    targetPostID: postID,
  });
  return response;
}
