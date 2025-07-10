type DepartmentPrefixes = "FGT" | "SKN"
type Digits = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

type SKU = `${DepartmentPrefixes}-${Digits}${Digits}${Digits}`

export { SKU }
