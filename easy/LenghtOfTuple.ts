import type { Equal, Expect } from '../utils'

// ? Challenge url: https://tsch.js.org/18
/* es 
	A medida que avanzo en los ejercicios me doy cuenta de algunas cosas que me ayudan a solucionarlos de manera mas sencilla, una de ellas es que debo ser lo mas especifico posible con mi genérico, esto me ayuda a que el código sea mas claro y no me complique tanto. Ademas, el crear un tipo de ejemplo 'hola' el cual me facilita la visualización de lo que mi tipo esta haciendo

	En este caso, los pasos anteriores fueron fundamentales para que este ejercicio no se me complicara mucho, al saber que mi genérico es un arreglo de string o number, me ayudo a intuir que podía acceder a sus propiedades como si fuese un objeto, por ello acceder a su propiedad 'length' fue muy sencillo

*/

/* en
	As I progress through the exercises, I realize some things that help me solve them more easily, one of them is that I must be as specific as possible with my generic, this helps me make the code clearer and not complicate it so much. Also, creating an example type 'hola' which facilitates the visualization of what my type is doing

	In this case, the previous steps were fundamental so that this exercise did not complicate me much, knowing that my generic is an array of string or number, helped me to intuit that I could access its properties as if it were an object, so accessing its property 'length' was very simple

*/

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
