# Lab 6.1: TypeScript and Object-Oriented Programming

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<time datetime="2025-07-10">2025-07-10</time>  

![Preview of inventory-tracker output.](./preview.png)

## Overview
### Viewer Instructions
In the terminal, run:

```bash
cd inventory-tracker && npm run build && npm run start
```

### Submission Source
Top-level program behavior can be found in [`./inventory-tracker/src/main.ts`](./inventory-tracker/src/main.ts).

### Reflection
After completing the lab, consider the following questions:

1. How does TypeScript enforce type safety in this object-oriented program?
> TypeScript allows for the creation and use of types, interfaces, and type annotations that work with IDE intellisense and the `tsc` compiler/transpiler to enforce the types of primitives, the shapes of objects, and the properties and methods of class instances. When the features of TypeScript are properly implemented and leveraged, we can be sure our variables and objects input and output the types we expect, both from built-in IDE support and a compiler/transpiler that will fail if we do not declare our objects and assign our variables according to the standards set by our types.

2. How did inheritance reduce code duplication for `PhysicalProduct` and `DigitalProduct`?
>  Inheritance allowed me to build out only the features of `PhysicalProduct` and `DigitalProduct` that differed&mdash;in terms of existence or implementation&mdash;from `Product`. Without inheritance, I would have had to repeat declarations of the `constructor` method, assignments of properties, and all the methods for all subclass instances of `Product`.

3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
> In this context, encapsulation allows us to seal off access to the properties of `Product` to only instances of `Product` in the case of `private` properties and only subclasses of `Product` in the case of `protected` properties. Since none of the subclasses modify the `sku` or `name` properties of a `Product`, it's useful to wall them off as `private` properties; since subclasses need to be able to work with `price` and `taxRate`, it's useful to designate them as `protected` properties. To ensure no outside entities can modify those properties directly, I implemented `getPrice` and `getTaxRate` methods on them so e.g. `calculateTax` can work with their values but *not* modify them.

4. If you had to add a new type of product (e.g., a `SubscriptionProduct`), how would polymorphism make this extension straightforward?
> A new type of product would simply extend the `Product` base class with its own unique features, and its corresponding type would only need to expand on the existing `ProductType` by way of intersection. Instances of this new product type would still register as instances of `Product`, allowing us to use them in much the same way we're already using `Product` instances. That instances of `SubscriptionProduct` would still be instances of `Product` is an example of polymorphism.

### Assignment Task
Create a simple object-oriented inventory tracker using TypeScript. The tracker will distinguish between PhysicalProduct and DigitalProduct, calculate applicable taxes, and manage inventory using modules. This lab will reinforce the key object-oriented programming concepts learned in the last lesson, including inheritance, encapsulation, abstraction, and polymorphism, while using TypeScript features such as type annotations and interfaces.