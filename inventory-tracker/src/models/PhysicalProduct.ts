import { Product } from "./Product"

const PHYSICAL_PRODUCT_TAX_RATE: number = 0.1
const POUNDS_PER_KG: number = 0.45359237 // https://www.unitconverters.net/weight-and-mass/lbs-to-kg.htm

export class PhysicalProduct extends Product {
  private weight: number // Pounds? Unit not specified.

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price)

    this.weight = weight
  }

  displayDetails(): string {
    return `${super.displayDetails()} (${this.getWeightInKg().toFixed(2)} kg)`
  }

  getPriceWithTax(): number {
    return super.getPriceWithTax(PHYSICAL_PRODUCT_TAX_RATE)
  }

  getWeightInKg() {
    return this.weight * POUNDS_PER_KG
  }
}
