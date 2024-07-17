import { Elysia, t } from "elysia";
import { Section } from "../types/usersTypes";

const params = t.Object({
  username: t.String(),
  userID: t.Numeric({ error: "UserID must be a number" }),
  section: t.Enum(Section, { error: "Section not found" }),
});

const queries = t.Object({
  query: t.String(),
  quantity: t.Optional(t.Numeric({ error: "Quantity must be a number" })),
});

export default new Elysia().model({
  usernameParams: t.Pick(params, ["username"]),
  userIDParams: t.Pick(params, ["userID"]),
  userIdAndSectionParams: t.Omit(params, ["username"]),
  searchQuery: queries,
  sectionQuery: t.Pick(queries, ["quantity"]),
});
