import { DiscountableProduct } from "../interfaces/DiscountableProduct"

const DEFAULT_TAX_RATE = 0.08875 // NYC sales tax rate

export class Product implements DiscountableProduct {
  private sku: string
  private name: string
  private price: number

  constructor(sku: string, name: string, price: number) {
    this.sku = sku
    this.name = name
    this.price = price
  }

  displayDetails(): string {
    return `${this.name} (${this.sku}): $${this.price.toFixed(2)}`
  }

  getPriceWithTax(taxRate: number = DEFAULT_TAX_RATE): number {
    const priceWithTax = this.price * (1 + taxRate)
    return parseFloat(priceWithTax.toFixed(2))
  }

  applyDiscount(discount: number): void {
    // Expects `discount` to be a percentage; e.g., 10% off -> 0.1
    this.price = this.price - this.price * discount
  }
}
