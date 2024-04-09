import type { Equal, Expect } from '../utils'

// ? Challenge url: https://tsch.js.org/14

/* es 
  Este reto me ha costado mucho menos entendiendo el anterior 'TupleToObject' ya que sigue la misma lógica

  He aprendido que lo primero que debo es tratar de ser lo mas especifico con mi genérico, esto me ayudo a solucionar este ejercicio con mucha mas claridad
  
  lo segundo que intente hacer fue T[0], lo cual funcionaba muy bien, esto lo llegue a intuir con la solución del ejercicio anterior. El único detalle es que para cuando nuestro arreglo estaba vació no me daba el 'never' sino undefined

  Por ello es necesario la validación

  Este ejercicio aunque me resulto mas sencillo creo que esta bien para afianzar conceptos y conocer que las ternarias también son utilizables en los tipos
*/

/* en
  This challenge has cost me much less understanding the previous 'TupleToObject' since it follows the same logic

  I have learned that the first thing I should do is try to be as specific with my generic, this helped me solve this exercise much more clearly

  The second thing I tried to do was T[0], which worked very well, I came to intuit this with the solution of the previous exercise. The only detail is that when our array was empty it did not give me undefined instead of 'never'
  
  That's why the validation is necessary

  This exercise, although it was easier for me, I think it is good to consolidate concepts and know that ternaries are also usable in types
*/

type First<T extends (string | number | (() => number) | { a: string } | undefined)[]> =
	T extends never[] ? never : T[0]

// Tests
type cases = [
	Expect<Equal<First<[3, 2, 1]>, 3>>,
	Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
	Expect<Equal<First<[]>, never>>,
	Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
	// @ts-expect-error
	First<'notArray'>,
	// @ts-expect-error
	First<{ 0: 'arrayLike' }>
]
