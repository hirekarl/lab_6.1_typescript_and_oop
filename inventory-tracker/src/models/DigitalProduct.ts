import { Product } from "./Product"

const DIGITAL_PRODUCT_TAX_RATE: number = 0
const BYTES_PER_MB: number = 1000

export class DigitalProduct extends Product {
  private fileSize: number // Bytes? Unit not specified.

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price)

    this.fileSize = fileSize
  }

  displayDetails(): string {
    return `${super.displayDetails()} (${this.getSizeInMB().toFixed(2)} MB)`
  }

  getPriceWithTax(): number {
    return super.getPriceWithTax(DIGITAL_PRODUCT_TAX_RATE)
  }

  getSizeInMB(): number {
    return this.fileSize / BYTES_PER_MB
  }
}
