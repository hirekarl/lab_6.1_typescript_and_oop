import { Product } from "./Product"
import { SKU } from "../types/SKU"

const DIGITAL_PRODUCT_TAX_RATE: number = 0
const BYTES_PER_MB: number = 1000

export class DigitalProduct extends Product {
  private fileSize: number // Bytes (B)

  constructor(sku: SKU, name: string, price: number, fileSize: number) {
    super(sku, name, price)
    this.fileSize = fileSize
    this.taxRate = DIGITAL_PRODUCT_TAX_RATE
  }

  displayDetails(): string {
    return `${super.displayDetails()} (${
      Math.round(this.getSizeInMB() * 100) / 100
    } MB)`
  }

  getPriceWithTax(): number {
    return super.getPriceWithTax()
  }

  getSizeInMB(): number {
    return this.fileSize / BYTES_PER_MB
  }
}
