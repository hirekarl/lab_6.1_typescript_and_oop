import { calculateTax } from "../utils/taxCalculator"
import { SKU } from "../types/SKU"

const DEFAULT_TAX_RATE: number = 0.08875 // NYC sales tax rate

export class Product {
  private sku: SKU
  private name: string
  protected price: number
  protected taxRate: number

  constructor(
    sku: SKU,
    name: string,
    price: number,
    taxRate: number = DEFAULT_TAX_RATE
  ) {
    this.sku = sku
    this.name = name
    this.price = price
    this.taxRate = taxRate
  }

  displayDetails(): string {
    return `${this.name} (SKU #${this.sku}): $${Math.round(this.price * 100) / 100}`
  }

  displayTaxRate(): string {
    return `${this.taxRate * 100}%`
  }

 
  getPrice(): number {
    return this.price
  }

 
  getPriceWithTax(): number {
    const tax = calculateTax(this)
    return Math.round((this.price + tax) * 100) / 100
  }

 
  getTaxRate(): number {
    return this.taxRate
  }
}
