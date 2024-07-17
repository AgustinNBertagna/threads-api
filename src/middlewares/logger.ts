import { Elysia } from "elysia";

export default new Elysia().onRequest(({ request }) => {
  const { method, url } = request;
  const moment = new Date().toLocaleString();
  console.log(`Request ${method} | ${url.slice(21)} | ${moment} `);
});
