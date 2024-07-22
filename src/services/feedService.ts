import threadsClient from "./threadsClient";
import { Docs } from "../types/threadsClientTypes";
import type { FeedQuery } from "../types/feedTypes";
import type { FeedResponse } from "../types/threadsResponses/feedResponseTypes";

function transformResponse(response: FeedResponse) {
  const edges = response.data.feedData.edges;
  const posts = edges.map(
    (edge) => edge.text_post_app_thread.thread_items[0].post
  );
  return posts;
}

export async function fetchFeed({
  country: specified_country,
  quantity: first,
}: FeedQuery) {
  const response: FeedResponse = await threadsClient({
    doc_id: Docs.FEED,
    specified_country,
    first,
  });
  return transformResponse(response);
}
