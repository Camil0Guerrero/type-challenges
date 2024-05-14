import type { Equal, Expect } from '../utils'

// ? Challenge url: https://tsch.js.org/533

/* es
	Particularmente es el reto que hasta el momento me ha gustado mas, ya que he aclarado algunas dudas y me ha permitido afianzar ideas que tenia. 
	
	Realmente pensaba que el spread operator no se podía usar en los types, por lo que he tratado de hacer como en los anteriores ejercicios, tratar de hacerlo con lo que sabia, lo primero que hice fue los casos particulares, es decir, cuando los arreglos están vacíos se debe devolver un []. 

	Por lo que mi primera idea fue usar las ternarias, lo cual me funciono bien para los 3 primeros casos. 
	Para que te hagas una idea: mi type se veía así: 

	type Concat<T extends ReadonlyArray<any>, U extends ReadonlyArray<any>> = T extends never[]
		? U extends never[]
			? []
			: [U[number]]
		: U extends never[]
			? [T[number]]
			: [T[number], U[number]]

	El problema es que T[number] aunque recorre los datos, los devuelve como un union type, '[1 | 2]'. Lo cual no era lo que necesitaba, por lo que he tenido que buscar otra forma de hacerlo.

	Este ejercicio me ha permitido saber en que ocasiones es posible usar el spread operator en los types, lo cual abre un mundo de posibilidades para ejercicios futuros
*/

/* en 
	This is the challenge that I have liked the most so far, since I have clarified some doubts and it has allowed me to consolidate ideas that I had.

	I really thought that the spread operator could not be used in types, so I tried to do it like in the previous exercises, try to do it with what I knew, the first thing I did was the particular cases, that is, when the arrays are empty it should return a [].

	So my first idea was to use the ternaries, which worked well for the first 3 cases.
	To give you an idea: my type looked like this:

	type Concat<T extends ReadonlyArray<any>, U extends ReadonlyArray<any>> = T extends never[]
		? U extends never[]
			? []
			: [U[number]]
		: U extends never[]
			? [T[number]]
			: [T[number], U[number]]

	The problem is that T[number] although it goes through the data, it returns them as a union type, '[1 | 2]'. Which was not what I needed, so I had to find another way to do it.

	This exercise has allowed me to know when it is possible to use the spread operator in types, which opens up a world of possibilities for future exercises
*/
type Concat<
	T extends ReadonlyArray<string | number>,
	U extends ReadonlyArray<string | number | boolean>
> = [...T, ...U]

const tuple = [1] as const

type hola = Concat<[1, 2], []>

type cases = [
	Expect<Equal<Concat<[], []>, []>>,
	Expect<Equal<Concat<[], [1]>, [1]>>,
	Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
	Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
	Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>
]

// @ts-expect-error
type error = Concat<null, undefined>
