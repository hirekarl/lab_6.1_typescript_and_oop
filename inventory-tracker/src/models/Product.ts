import ProductType from "../types/ProductType"
import calculateTax from "../utils/taxCalculator"
import SKUType from "../types/SKUType"

const DEFAULT_TAX_RATE: number = 0.08875 // NYC sales tax rate

class Product implements ProductType {
  private sku: SKUType
  private name: string
  protected price: number
  protected taxRate: number

  constructor(
    sku: SKUType,
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
    return `${this.name} (SKU #${this.sku}): $${
      Math.round(this.price * 100) / 100
    }`
  }

  displayTaxRate(): string {
    return `${this.taxRate * 100}%`
  }

  getName(): string {
    return this.name
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

export default Product
