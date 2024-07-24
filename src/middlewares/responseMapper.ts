import { Elysia } from "elysia";

export default new Elysia().onAfterHandle(
  { as: "global" },
  ({ response: data }) => ({
    success: true,
    data,
  })
);
