# Notas

## Palabras clave

- **extends**: Esta keyword nos ayuda a restringir nuestro types ya que deberán ser un subtipo de la clase (o interface) que estamos extendiendo.
  - Ejemplo: [Pick](./easy/Pick.ts 'Ver el código en un ejercicio')
- **keyof**: Nos ayuda a obtener las keys (propiedades) de nuestros types (en objetos e interfaces)
  - Ejemplo: [Pick](./easy/Pick.ts 'Ver el código en un ejercicio')
- **in**: Funciona como si fuese un for loop, recorriendo cada key de un type
  - Ejemplo: [Pick](./easy/Pick.ts 'Ver el código en un ejercicio')
- **Index Signature**: Nos permite de una forma más dinámica definir los types de nuestros objetos, `ObjectType[ObjectKeyType]` es como si estuviésemos accediendo a una propiedad de un objeto literal pero en esta occasion estamos accediendo a su type
  - Ejemplo: [Pick](./easy/Pick.ts 'Ver el código en un ejercicio')
  - Doc: [Index Signature](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

## Convenciones

Las convenciones que se usan en el mundo de TypeScript son como buenas practicas que nos ayudan a mantener un código limpio y entendible, esto se hace para que cualquiera que lea nuestro código pueda entenderlo sin tener que hacer un gran esfuerzo.

- **T**: Representa el type dinámico de los genéricos
- **K**: Representa las keys en los genéricos
- **P**: Hace referencia a las propiedades en los genéricos
