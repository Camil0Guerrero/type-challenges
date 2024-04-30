import type { Expect, Equal } from '../utils'

// ? Challenge url: https://tsch.js.org/43

/* es 
	Este reto supongo que es creado para que podamos usar el 'never' y las ternarias en los tipos, esto me parece muy bien ya que esta bastante sencillo y creo que sera el punto de entrada para retos mas complejos

	Una cosa a recalcar es que el 'never' es un tipo que se usa para indicar que algo nunca va a pasar, por ello es que se usa en los tipos, ya que en el mundo real no tiene sentido tener un 'never' en una variable
*/

/* en 
	This challenge I suppose is created so that we can use the 'never' and the ternaries in the types, this seems very good to me since it is quite simple and I think it will be the entry point for more complex challenges

	One thing to emphasize is that the 'never' is a type that is used to indicate that something will never happen, that is why it is used in types, since in the real world it does not make sense to have a 'never' in a variable
*/

type MyExclude<T, K> = T extends K ? never : T

type example = 'a' | 'b' | 'c'

type hola = MyExclude<example, 'a'>

// Tests
type cases = [
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
	Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>
]
