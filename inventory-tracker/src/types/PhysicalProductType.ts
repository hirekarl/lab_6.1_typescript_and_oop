import ProductType from "./ProductType"
import DiscountableProductInterface from "./DiscountableProductInterface"

type PhysicalProductType = ProductType &
  DiscountableProductInterface & {
    getWeightInKg(): number
  }

export default PhysicalProductType
