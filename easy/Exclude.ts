import type { Expect, Equal } from '../utils'

// ? Challenge url: https://tsch.js.org/43

type MyExclude<T, K> = T extends K ? never : T

type example = 'a' | 'b' | 'c'

type hola = MyExclude<example, 'a'>

// Tests
type cases = [
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
	Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>
]
