import type { Expect, Equal } from '../utils'

// ? Challenge url: https://tsch.js.org/11

/* es
	Este reto me resulto un poco mas complejo que los anteriores por lo que tal vez mis comentarios sean un poco confusos

	Nuestro objetivo estaba en obtener cada elemento de una tupla y transformarlo a un objeto, tanto como llave como a valor.
	
	Lo primero es saber con que tipo vamos a trabajar, en este puse las de los test, esto me parecía que no era de mucha importancia al principio, sin embargo, estos detalles tomar una gran importancia en los types ya que debemos ser lo mas específicos que podamos

	Este ejercicio se basaba en encontrar o investigar como acceder a los valores de nuestra tupla, y como lo puedes ver en el código es con `[P in T[number]]`.

	TypeScript cuando se itera sobre un arreglo (o tupla) infiere los elementos, en este caso con `T[number]` representa cada elemento y con `P in` se lo asigna a nuestro type 'P'
	
	Es importante aclarar que este ejercicio tiene algunas sutilezas y es muy concreto, ya que para que esto se pueda hacer se debe cumplir que nuestra tupla debe ser de solo lectura, que lo logramos con el ``` as const ``` ademas que debemos pasarla a nuestro genérico con ```typeof``` ya que TypeScript solo maneja los tipos de nuestras variables 
*/

/* en
	This challenge was a bit more complex than the previous ones, so maybe my comments are a bit confusing 

	Our goal was to get each element of a tuple and transform it into an object, both as a key and as a value.

	The fist thing is to know with what type we are going to work, in this case I put the ones from the tests, this seemed to me that it was not very important at first, however, these details take on great importance in the types since we must be as specific as we can

	This exercise was based on finding or investigating how to access the values of our tuple, and as you can see in the code it is with `[P in T[number]]`.

	TypeScript when iterating over an array (or tuple) infers the elements, in this case with `T[number]` represents each element and with `P in` assigns it to our type 'P'

	It is important to clarify that this exercise has some subtleties and is very specific, since for this to be done it must be fulfilled that our tuple must be read-only, which we achieve with the ``` as const ``` also that we must pass it to our generic with ```typeof``` since TypeScript only handles the types of our variables

*/

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
	[P in T[number]]: P
}

// Tests
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const

type cases = [
	Expect<
		Equal<
			TupleToObject<typeof tuple>,
			{ tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
		>
	>,
	Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
	Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1; [sym2]: typeof sym2 }>>,
	Expect<
		Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4'; [sym1]: typeof sym1 }>
	>
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
