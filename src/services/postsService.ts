import threadsClient from "./threadsClient";
import { Docs } from "../types/threadsClientTypes";
import type { PostsParams } from "../types/postsTypes";

export async function fetchPost({ postID }: PostsParams) {
  const response = await threadsClient({ doc_id: Docs.POST, postID });
  return response;
}

export async function fetchRelatedPosts({ postID }: PostsParams) {
  const response = await threadsClient({
    doc_id: Docs.RELATED_POSTS,
    targetPostID: postID,
  });
  return response;
}
