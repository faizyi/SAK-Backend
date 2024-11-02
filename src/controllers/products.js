import ProductModel from "../../src/models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching products" });
  }
};
