import {
  url,
  method,
  headers,
  fb_lsd,
  defaultVariables,
} from "../config/consts";
import type { ThreadsClientOptions } from "../types/threadsClientTypes";

export default async function threadsClient(options: ThreadsClientOptions) {
  const { doc_id, ...variables } = options;
  const response = await fetch(url, {
    method,
    headers,
    body: new URLSearchParams({
      doc_id,
      lsd: fb_lsd,
      variables: JSON.stringify({ ...defaultVariables, ...variables }),
    }),
  });
  const json = await response.json();
  return json;
}
