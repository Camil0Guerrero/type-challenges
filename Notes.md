# Notes

## Keywords

- **extends**: Helps us to restrict our types since they must be a subtype of the class (or interface) we are extending.
  - Example: [Pick](./easy/Pick.ts 'See the code in an exercise')
- **keyof**: Helps us to get the keys (properties) of our types (in objects and interfaces)
  - Example: [Pick](./easy/Pick.ts 'See the code in an exercise')
- **in**: Acts like a for loop, iterating over each key of a type
  - Example: [Pick](./easy/Pick.ts 'See the code in an exercise')
- **Index Signature**: Allows us to define the types of our objects in a more dynamic way, `ObjectType[ObjectKeyType]` is like accessing a property of a literal object but in this case we are accessing its type
  - Example: [Pick](./easy/Pick.ts 'See the code in an exercise')
  - Doc: [Index Signature](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

## Conventions

The conventions used in the TypeScript world are like good practices that help us to keep clean and understandable code, this is done so that anyone who reads our code can understand it without having to make a great effort.

- **T**: Represents the dynamic type of generics
- **K**: Represents the keys in the generics
- **P**: Refers to properties in the generics
