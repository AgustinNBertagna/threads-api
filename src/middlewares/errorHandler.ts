import { Elysia } from "elysia";

export class BadRequestError extends Error {
  public status: number = 400;
  public code: string = "BAD_REQUEST";
  constructor(message?: string) {
    super(message);
  }
}

export default new Elysia()
  .error({ BAD_REQUEST: BadRequestError })
  .onError({ as: "global" }, ({ code, error }) => {
    const errorMsg = error.message;
    if (code === "NOT_FOUND") {
      const message =
        errorMsg !== "NOT_FOUND" ? errorMsg : "Resource Not Found";
      const status = error.status;
      return { message, status, code };
    }

    if (code === "BAD_REQUEST") {
      const { message, status } = error;
      return { message, status, code };
    }

    if (code === "VALIDATION") {
      const { message, all, status } = error;
      const errors: any = {};
      all.forEach((err, indx) => {
        errors[`error${all.length === 1 ? "" : indx + 1}`] = err.schema.error;
      });
      return { message, errors, code, status };
    }
  });
