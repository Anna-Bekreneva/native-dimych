export type ManType = {
	name: string
	age: number
}

const people: Array<ManType> = [
	{name: "Andrew Ivanov", age: 33},
	{name: "Alexandr Petrov", age: 24},
	{name: "Dmitry Sidorov", age: 18},
]

const dimchTransformator = (man: ManType) => {
	return {
		stack: ["css, html", "js", "tdd", "react"],
		firstName: man.name.split(" ")[0],
		lastName: man.name.split(" ")[1]
	}
}

const devs = [
	{
		stack: ["css, html", "js", "tdd", "react"],
		firstName: "Andrew", lastName: "Ivanov"
	},
	{
		stack: ["css, html", "js", "tdd", "react"],
		firstName: "Alexandr", lastName: "Petrov"
	},
	{
		stack: ["css, html", "js", "tdd", "react"],
		firstName: "Dmitry", lastName: "Sidorov"
	},
]

const devs2 = people.map(dimchTransformator)
const devs3 = people.map(man => ({
	stack: ["css, html", "js", "tdd", "react"],
	firstName: man.name.split(" ")[0],
	lastName: man.name.split(" ")[1]
}))

const messages = people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
	return people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}