export type UserType = {
	name: string
	hair: number
	address: {
		city: string
		house?: number
	}
}

export type LaptopType = {
	title: string
}

export type UserWithLaptopType = UserType & {
	laptop: LaptopType
}

export type UserWithBooksType = UserType & {
	books: Array<string>
}

export type UserWithSkillsType = UserType & {
	skills: Array<number>
}

export type CompanyType = {
	id: number,
	title: string
}

export type WidthCompaniesType = UserType & {
	companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
	return {...u, hair: u.hair / power};
}

export function moveUser(u: UserWithLaptopType, city: string) {
	return {...u, address: {...u.address, city}};
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
	return {...u, address: {...u.address, house}};
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
	return {...u, laptop: {...u.laptop, title: laptop}};
}

// export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
// 	return {...u, books: [...u.books, ...newBooks]};
// }

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
	return {...u, books: [...u.books, newBooks]};
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
	return {...u, books: u.books.map(book => book === oldBook ? newBook : book)}
}

export const updateSkills = (u: UserWithLaptopType & UserWithBooksType & UserWithSkillsType, oldSkill: number, newSkill: number) => ({
	...u, skills:  u.skills.map(skill => skill === oldSkill ? newSkill : oldSkill)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, removeBook: string) => ({
	...u, books: u.books.filter(book => book !== removeBook)
})

export const updateCompany = (u: WidthCompaniesType, id: number, title: string) => ({
	...u, companies: u.companies.map(company => company.id === id ? {...company, title} : company)
})

export function updateCompany2(companies: {[ key: string] : Array<CompanyType>}, userName: string, companyId: number, newTitle: string) {
	let copy = {...companies}
	copy[userName] = copy[userName].map(company => company.id === companyId ? {...company, title: newTitle} : company)
	return copy
}