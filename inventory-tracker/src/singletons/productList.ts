import Product from "../models/Product"
import ProductListType from "../types/ProductListType"

const productList: ProductListType = {
  items: [],
  addProduct(product: Product): void {
    this.items.push(product)
  },
  sort(): void {
    this.items.sort((a: Product, b: Product) => {
      return a.getPrice() - b.getPrice()
    })
  },
}

export default productList
