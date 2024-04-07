import type { Expect, Equal } from '../utils'

// ? Challenge url: https://tsch.js.org/4

interface Todo {
	title: string
	description: string
	completed: boolean
}

interface Expected1 {
	title: string
}

interface Expected2 {
	title: string
	completed: boolean
}

/* es
	El reto consistía en básicamente crear el funcionamiento de Pick nosotros mismos

	? Pick es un utility type que nos ayuda a tomar el tipo de dato de algunas propiedades de objetos e interfaces.

	Mi planteamiento:
	Lo primero que debíamos de plantearnos era que nuestro type genérico 'K' debía de estar presente como key de nuestro type. Para ello estamos usando las keywords extends y keyof

	Luego debemos de obtener el nuestra propiedad, para ello estamos usando nuestro tercer type 'P', el cual nos ayudara a guardar la propiedad que nos dará el type que queremos
	Lo ultimo que se me plantee fue tomar el type de nuestra propiedad, esto se hace con T[P], también lo podríamos interpretar como si estuviéramos accediendo en un objeto literal
*/

/* en
	The challenge was basically to create the Pick functionality ourselves

	? Pick is a utility type that helps us to take the data type of some properties of objects and interfaces.

	My approach: 
	The first thing we had to consider was that our generic type 'K' had to be present as a key in our type. To do this, we are using the extends and keyof keywords

	Then we must obtain our property, for this we are using our third type 'P', which will help us to store the property that will give us the type we want
	The last thing I thought about was to take the type of our property, this is done with T[P], we could also interpret it as if we were accessing a literal object
*/

type MyPick<T, K extends keyof T> = {
	[P in K]: T[P]
}

type cases = [
	Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
	Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
	// @ts-expect-error
	MyPick<Todo, 'title' | 'completed' | 'invalid'>
]
