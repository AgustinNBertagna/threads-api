import { Elysia } from "elysia";
import usersModels from "../models/usersModels";
import {
  fetchUser,
  fetchUserSearch,
  fetchUserSection,
} from "../services/usersService";

export default new Elysia({ name: "users", prefix: "user" })
  .use(usersModels)
  .get("search", ({ query }) => fetchUserSearch(query), {
    query: "searchQuery",
  })
  .get("username/:username", ({ params }) => fetchUser(params), {
    params: "usernameParams",
  })
  .group("/:userID", (app) =>
    app
      .get("", ({ params }) => fetchUser(params), { params: "userIDParams" })
      .get(
        ":section",
        ({ params, query }) => fetchUserSection({ ...params, ...query }),
        { params: "userIdAndSectionParams", query: "sectionQuery" }
      )
  );
