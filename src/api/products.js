import { getProducts } from "../../src/controllers/products.js";

export default async function handler(req, res) {
  await getProducts(req, res);
}
