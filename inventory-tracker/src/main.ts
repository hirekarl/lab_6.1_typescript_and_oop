import { PhysicalProduct } from "./models/PhysicalProduct"
import { DigitalProduct } from "./models/DigitalProduct"
import { calculateTax } from "./utils/taxCalculator"

function main() {
  const fidgetSpinner = new PhysicalProduct(
    "FGT-001",
    "Fidget Spinner",
    12.99,
    0.25
  )

  const fortniteSkin = new DigitalProduct(
    "SKN-001",
    "Ice Spice Fortnite Skin",
    3.99,
    2048
  )

  const allProducts = [fidgetSpinner, fortniteSkin]

  allProducts.forEach((product) => {
    console.log(product.displayDetails())
    console.log(`Price with tax: $${calculateTax(product)}`)
  })
}

main()
