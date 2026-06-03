export async function apiFetch(path, options) {
  const res = await fetch(path, options);
  return res.json();
}
