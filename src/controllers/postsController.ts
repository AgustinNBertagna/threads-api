import { Elysia } from "elysia";

import postsModels from "../models/postsModels";
import { fetchPost, fetchRelatedPosts } from "../services/postsService";

export default new Elysia({ name: "posts", prefix: "post" })
  .use(postsModels)
  .group("/:postID", { params: "params" }, (app) =>
    app
      .get("", ({ params }) => fetchPost(params))
      .get("related", ({ params }) => fetchRelatedPosts(params))
  );
