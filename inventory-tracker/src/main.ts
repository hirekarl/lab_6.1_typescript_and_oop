import PhysicalProduct from "./models/PhysicalProduct"
import DigitalProduct from "./models/DigitalProduct"
import productList from "./singletons/productList"

main()

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

  const discountedFidgetSpinner = new PhysicalProduct(
    "FGT-002",
    "Discounted Fidget Spinner, 10% off",
    12.99,
    0.25
  )
  discountedFidgetSpinner.applyDiscount(0.1)

  productList.addProduct(fidgetSpinner)
  productList.addProduct(fortniteSkin)
  productList.addProduct(discountedFidgetSpinner)

  productList.sort()

  productList.items.forEach((product) => {
    console.log(product.displayDetails())
    console.log(
      `\u{21b3} Price with tax (${product.displayTaxRate()}): $${product.getPriceWithTax()}`
    )
    console.log()
  })
}
