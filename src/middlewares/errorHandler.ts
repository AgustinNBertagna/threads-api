import { Elysia } from "elysia";

export default new Elysia().onError({ as: "global" }, ({ code, error }) => {
  if (code === "NOT_FOUND") {
    const message = "Resource not found";
    const { message: _, ...rest } = error;
    return { message, ...rest };
  }

  if (code === "VALIDATION") {
    const message = "Unprocessable Entity";
    const { message: _, all, code, status } = error;
    const errors: any = {};
    all.forEach((err, indx) => {
      errors[`error${all.length === 1 ? "" : indx + 1}`] = err.schema.error;
    });
    return { message, errors, code, status };
  }
});
