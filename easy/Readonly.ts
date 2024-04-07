import type { Expect, Equal } from '../utils'

// ? Challenge url: https://tsch.js.org/7

interface Todo1 {
	title: string
	description: string
	completed: boolean
	meta: {
		author: string
	}
}

/* Objetivo / Goal:
	interface Todo1 {
		readonly title: string
		readonly description: string
		readonly completed: boolean
		readonly meta: {
			author: string
		}
	}
 
*/

/* en
	This challenge consists of creating a type that allows us to make all the properties of an object read-only. Like the TypeScript `Readonly` utility type.

	To do this, we must go through all the properties of the object and make them read-only.

	My approach:

	The first thing I considered was to create an example of our goal (you can see this below the Todo1 interface).

	The next thing was to create a way to go through all the properties of our object from our generic, for this we used the 'in' and 'keyof' keywords to obtain all the properties of our object in our type `P`

	Finally, we must make all the properties of our object read-only, for this we use the 'readonly' keyword and access the property of our object with T[P]
*/

/* es 
	Este reto consiste en crear un type que nos permita hacer que todas las propiedades de un objeto sean de solo lectura. Como el utility type `Readonly` de TypeScript.

	Para ello debemos de recorrer todas las propiedades del objeto y hacer que sean de solo lectura.

	Mi planteamiento:
	Lo primero que me plantee es el crear un ejemplo de nuestro objetivo (esto lo puedes ver abajo de la interface Todo1).

	lo siguiente fue crear una manera de a partir de nuestro genérico recorrer todas las propiedades de nuestro objeto, para ello usamos la keyword 'in' y 'keyof' para obtener todas las propiedades de nuestro objeto en nuestro type `P`
	
	por ultimo debemos de hacer que todas las propiedades de nuestro objeto sean de solo lectura, para ello usamos la keyword 'readonly' y accedemos a la propiedad de nuestro objeto con T[P]

*/

type MyReadonly<T> = {
	readonly [P in keyof T]: T[P]
}

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]
