const fs = require("fs");
const path = require("path");

class ProductService {
  constructor() {}

  parseProduct(product) {
    const imgPath = path.join(__dirname, "../../public/");
    const productImages = fs.readdirSync(imgPath);
    const thumbnails = productImages.filter((image) =>
      image.includes("thumbnail")
    );
    const big = productImages.filter((image) => !image.includes("thumbnail"));

    product.images.thumbnails = thumbnails;
    product.images.big = big;

    return product;
  }

  findById(id) {
    try {
      const productPath = path.join(__dirname, "../db/database.json");
      const rawProduct = JSON.parse(fs.readFileSync(productPath, "utf8"));
      const [product] = rawProduct.filter((product) => product.id === id);

      if (!product) return;

      return this.parseProduct(product);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductService;
