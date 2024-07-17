import { Elysia, t } from "elysia";
import { Country } from "../types/feedTypes";

const queries = t.Partial(
  t.Object({
    country: t.Enum(Country, { error: "Country not found/supported" }),
    quantity: t.Numeric({ error: "Quantity must be a number" }),
  })
);

export default new Elysia().model({
  feedQuery: queries,
});
