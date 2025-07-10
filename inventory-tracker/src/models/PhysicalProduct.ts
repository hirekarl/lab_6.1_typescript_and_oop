import { Product } from "./Product"
import { DiscountableProduct } from "../interfaces/DiscountableProduct"

const PHYSICAL_PRODUCT_TAX_RATE: number = 0.1
const POUNDS_PER_KG: number = 0.45359237 // https://www.unitconverters.net/weight-and-mass/lbs-to-kg.htm

export class PhysicalProduct extends Product implements DiscountableProduct {
  private weight: number // Pounds (lbs)

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price)
    this.weight = weight
    this.taxRate = PHYSICAL_PRODUCT_TAX_RATE
  }

  displayDetails(): string {
    return `${super.displayDetails()} (${
      Math.round(this.getWeightInKg() * 100) / 100
    } kg)`
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
