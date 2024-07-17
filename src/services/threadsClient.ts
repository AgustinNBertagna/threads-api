import {
  url,
  method,
  headers,
  fb_lsd,
  defaultVariables,
} from "../config/consts";

export default async function threadsClient(options: any) {
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
