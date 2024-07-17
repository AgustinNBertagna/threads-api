import threadsClient from "./threadsClient";
import { feedDocs } from "../config/consts";
import type { FeedQuery } from "../types/feedTypes";

export async function fetchFeed({
  country: specified_country,
  quantity: first,
}: FeedQuery) {
  const response = await threadsClient({
    doc_id: feedDocs.feed,
    specified_country,
    first,
  });
  return response;
}
