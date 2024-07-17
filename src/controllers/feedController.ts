import { Elysia } from "elysia";
import feedModels from "../models/feedModels";
import { fetchFeed } from "../services/feedService";

export default new Elysia({ name: "feed", prefix: "feed" }).use(feedModels).get(
  "",
  ({ query }) => {
    return fetchFeed(query);
  },
  { query: "feedQuery" }
);
