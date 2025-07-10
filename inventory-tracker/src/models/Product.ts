const DEFAULT_TAX_RATE = 0.08875 // NYC sales tax rate

export class Product {
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
}
