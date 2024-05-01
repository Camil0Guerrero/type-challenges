import { Equal, Expect } from '../utils'

/* es
  Este ejercicio si es bastante sencillo ya que solo necesitamos una ternaria y no hay mucho que agregar. 

  tal vez deberían de ponerlo un poco mas al inicio de los retos
*/

/* en
  This exercise is quite simple since we only need a ternary and there is not much to add.

  maybe they should put it a little more at the beginning of the challenges
*/

type If<C extends boolean, T, F> = C extends true ? T : F

type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>]

// @ts-expect-error
type error = If<null, 'a', 'b'>
