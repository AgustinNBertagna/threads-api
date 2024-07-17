import threadsClient from "./threadsClient";
import { Docs } from "../types/threadsClientTypes";
import type { FeedQuery } from "../types/feedTypes";

export async function fetchFeed({
  country: specified_country,
  quantity: first,
}: FeedQuery) {
  const response = await threadsClient({
    doc_id: Docs.FEED,
    specified_country,
    first,
  });
  return response;
}
