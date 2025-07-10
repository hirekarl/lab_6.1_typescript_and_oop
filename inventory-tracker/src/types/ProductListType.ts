import Product from "../models/Product"

type ProductListType = {
  items: Product[]
  sort: () => void
  addProduct: (product: Product) => void
}

export default ProductListType
