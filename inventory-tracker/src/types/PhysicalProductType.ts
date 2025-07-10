import ProductType from "./ProductType"
import DiscountableProduct from "./DiscountableProduct"

type PhysicalProductType = ProductType &
  DiscountableProduct & {
    getWeightInKg(): number
  }

export default PhysicalProductType
