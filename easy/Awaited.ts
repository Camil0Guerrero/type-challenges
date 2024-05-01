import type { Expect, Equal } from '../utils'

// ? Challenge url: https://tsch.js.org/189

/* es 
	Este reto es el que mas me costado con diferencia, ya que no conocía esta utilidad de TypeScript, lo que me ha ayudado a desenredar el nudo que tenia era conseguir la keyword 'infer' que me ha servido a plantear la solución

	Entendía que necesitaba obtener de alguna forma el genérico de la promesa, el problema es que lo intentaba con lo que sabia, que para este ejercicio parecía no ser suficiente. Con infer todo esto se soluciono y aunque no esta del todo correcto mi planteamiento ya que se supone que debería ser un solo tipo, considero que mi nivel a subido un poco

	este reto es muy completo ya que no solo he utilizado mas de un nivel de las ternarias por primera vez en los retos, sino que he utilizado infer, ademas de usar la recursion en los types que era algo que no había hecho antes
*/

/* en 
	This challenge is the one that has cost me the most by far, since I did not know this TypeScript utility, which has helped me to unravel the knot I had was to get the 'infer' keyword that has served me to propose the solution

	I understood that I needed to somehow obtain the generic of the promise, the problem is that I tried it with what I knew, which for this exercise seemed not to be enough. With infer all this was solved and although my approach is not entirely correct since it is supposed to be a single type, I consider that my level has increased a bit
*/

type GetThenArgType<T> = T extends { then: (onfulfilled: (arg: infer U) => any) => any } ? U : never

type MyAwaited<T extends { then: (arg?: any) => any }> = T extends Promise<infer U>
	? U extends Promise<any>
		? MyAwaited<U>
		: U
	: GetThenArgType<T>

type hola = MyAwaited<{ then: (onfulfilled: (arg: number) => any) => any }>

// Tests
type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
	Expect<Equal<MyAwaited<X>, string>>,
	Expect<Equal<MyAwaited<Y>, { field: number }>>,
	Expect<Equal<MyAwaited<Z>, string | number>>,
	Expect<Equal<MyAwaited<Z1>, string | boolean>>,
	Expect<Equal<MyAwaited<T>, number>>
]

// @ts-expect-error
type error = MyAwaited<number>
