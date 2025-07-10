import ProductType from "./ProductType"

type DigitalProductType = ProductType & {
  getSizeInMB(): number
}

export default DigitalProductType
