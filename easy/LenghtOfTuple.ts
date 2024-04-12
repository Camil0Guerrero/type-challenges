import type { Equal, Expect } from '../utils'

// ? Challenge url: https://tsch.js.org/18

type Length<T extends readonly (string | number)[]> = T['length']

const example = ['hola', 'mundo'] as const

type hola = Length<typeof example>

// Tests
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
	Expect<Equal<Length<typeof tesla>, 4>>,
	Expect<Equal<Length<typeof spaceX>, 5>>,
	// @ts-expect-error
	Length<5>,
	// @ts-expect-error
	Length<'hello world'>
]
