import { BadRequestError } from "../types/errors";

/**
 * Decode JSON string body into an object of a given type
 * @throws {BadRequestError("BAD_JSON")}
 * @param body - Event body string which should JSON.parse into <B>
 */
export function decodeBody<B>(body: string | null): B {
  try {
    if (!body) throw new Error();
    return JSON.parse(body);
  } catch (e) {
    throw new BadRequestError({ code: "BAD_BODY" });
  }
}
