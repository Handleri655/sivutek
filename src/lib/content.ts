import { getCollection } from "astro:content";

export async function getPalvelut() {
  const items = await getCollection("palvelut");
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getReferenssit() {
  const items = await getCollection("referenssit");
  return items
    .filter((item) => item.data.placeholder !== true)
    .sort((a, b) => a.data.order - b.data.order);
}
