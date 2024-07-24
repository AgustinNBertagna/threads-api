import { Elysia } from "elysia";

export class UnauthorizedError extends Error {
  public status: number = 401;
  public code: string = "UNAUTHORIZED";
  constructor(message?: string) {
    super(message);
  }
}

export default new Elysia()
  .error({ UNAUTHORIZED: UnauthorizedError })
  .onError({ as: "global" }, ({ code, error }) => {
    console.log(code);
    const errorMsg = error.message;
    if (code === "NOT_FOUND") {
      const message =
        errorMsg !== "NOT_FOUND" ? errorMsg : "Resource Not Found";
      const status = error.status;
      return { message, status, code };
    }

    if (code === "UNAUTHORIZED") {
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
