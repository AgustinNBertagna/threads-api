import threadsClient from "./threadsClient";
import { Docs } from "../types/threadsClientTypes";
import { transformFeedResponse } from "./transformResponse";
import type { FeedQuery } from "../types/feedTypes";
import type { FeedResponse } from "../types/threadsResponses/feedTypes";

export async function fetchFeed({ country, quantity }: FeedQuery) {
  const response: FeedResponse = await threadsClient({
    doc_id: Docs.FEED,
    specified_country: country,
    first: quantity,
  });
  return transformFeedResponse(response);
}
