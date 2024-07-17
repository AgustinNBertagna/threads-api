import { Elysia, t } from "elysia";

const params = t.Object({
  postID: t.String({ error: "Post ID must be a number", pattern: "^[0-9]+$" }),
});

export default new Elysia().model({
  params,
});
