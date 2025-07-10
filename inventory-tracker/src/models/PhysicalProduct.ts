import Product from "./Product"
import PhysicalProductType from "../types/PhysicalProductType"
import SKUType from "../types/SKUType"

const BULK_DISCOUNT_WEIGHT_THRESHOLD = 100 // Pounds (lbs)
const BULK_DISCOUNT_RATE = 0.25
const PHYSICAL_PRODUCT_TAX_RATE: number = 0.1
const POUNDS_PER_KG: number = 0.45359237 // https://www.unitconverters.net/weight-and-mass/lbs-to-kg.htm

class PhysicalProduct extends Product implements PhysicalProductType {
  private weight: number // Pounds (lbs)

  constructor(sku: SKUType, name: string, price: number, weight: number) {
    super(sku, name, price)
    this.weight = weight
    this.taxRate = PHYSICAL_PRODUCT_TAX_RATE

    if (this.weight >= BULK_DISCOUNT_WEIGHT_THRESHOLD) {
      this.applyDiscount(BULK_DISCOUNT_RATE)
    }
  }

  displayDetails(): string {
    const qualifiesForBulkDiscount =
      this.weight >= BULK_DISCOUNT_WEIGHT_THRESHOLD

    const bulkDiscountMessage = qualifiesForBulkDiscount
      ? `: BULK DISCOUNT APPLIED! (weight >${BULK_DISCOUNT_WEIGHT_THRESHOLD} lbs)`
      : ""

    return `${super.displayDetails()} (${
      Math.round(this.weight * 100) / 100
    } lbs/${
      Math.round(this.getWeightInKg() * 100) / 100
    } kg${bulkDiscountMessage})`
  }

  getPriceWithTax(): number {
    return super.getPriceWithTax()
  }

  getWeightInKg(): number {
    return this.weight * POUNDS_PER_KG
  }

  applyDiscount(discount: number) {
    // Expects `discount` to be a percentage; e.g., 10% off -> 0.1
    this.price = this.price - this.price * discount
  }
}

export default PhysicalProduct
