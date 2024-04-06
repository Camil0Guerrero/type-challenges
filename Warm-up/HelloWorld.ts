import type { Equal, Expect, NotAny } from '../utils'

// In this challenge you just need to make sure that the type of the variable `HelloWorld` is a string.

type HelloWorld = string

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
