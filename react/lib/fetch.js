import fetch from "isomorphic-unfetch";

export default async function(...args) {
  const res = await fetch(...args);
  const result = await res.json();
  if (res.status !== 200) {
    throw new Error(result.error);
  }
  return result;
}
