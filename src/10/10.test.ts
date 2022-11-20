import {
	addNewBooksToUser,
	makeHairStyle,
	moveUser,
	moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2, updateSkills,
	upgradeUserLaptop,
	UserType,
	UserWithBooksType,
	UserWithLaptopType, UserWithSkillsType, WidthCompaniesType
} from './10';

test('reference type test', () => {
	let user: UserType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk'
		}
	};

	const awesomeUser = makeHairStyle(user, 2);

	user = awesomeUser;

	expect(awesomeUser.hair).toBe(16);
	expect(user.hair).toBe(32);
	expect(awesomeUser.address).toBe(user.address);
});

test('change address', () => {
	let user: UserWithLaptopType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		}
	};

	const movedUser = moveUser(user, 'Kiev')

	expect(user).not.toBe(movedUser);
	expect(user.address).not.toBe(movedUser.address)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(movedUser.address.city).toBe('Kiev')
});

test('upgrade laptop to macbook', () => {
	let user: UserWithLaptopType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		}
	};

	const userCopy = upgradeUserLaptop(user, 'Macbook')

	expect(user).not.toBe(userCopy);
	expect(user.address).toBe(userCopy.address)
	expect(user.laptop).not.toBe(userCopy.laptop)
	expect(userCopy.laptop.title).toBe('Macbook')
	expect(user.laptop.title).toBe('ZenBook')
});

test('upgrade laptop to macbook', () => {
	let user: UserWithLaptopType & UserWithBooksType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	};

	const userCopy = moveUserToOtherHouse(user, 99)

	expect(user).not.toBe(userCopy);
	expect(user.books).toBe(userCopy.books)
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).not.toBe(userCopy.address)
	expect(userCopy.address.house).toBe(99)
});

test('add new books to user', () => {
	let user: UserWithLaptopType & UserWithBooksType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	};

	// const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])
	// expect(user).not.toBe(userCopy);
	// expect(user.laptop).toBe(userCopy.laptop)
	// expect(user.address).toBe(userCopy.address)
	// expect(user.books).not.toBe(userCopy.books)
	// expect(userCopy.books[4]).toBe('ts')
	// expect(userCopy.books[5]).toBe('rest api')

	const userCopy = addNewBooksToUser(user, 'ts')
	expect(user).not.toBe(userCopy);
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).not.toBe(userCopy.books)
	expect(userCopy.books[4]).toBe('ts')
});

test('update js to ts', () => {
	let user: UserWithLaptopType & UserWithBooksType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	};

	const userCopy = updateBook(user, 'js', 'ts')

	expect(user).not.toBe(userCopy);
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).not.toBe(userCopy.books)
	expect(userCopy.books[2]).toBe('ts')
});

test('change skills', () => {
	let user: UserWithLaptopType & UserWithBooksType & UserWithSkillsType= {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react'],
		skills: [10, 20, 30, 80]
	};

	const userCopy = updateSkills(user, 30, 90)

	expect(user).not.toBe(userCopy);
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).toBe(userCopy.books)
	expect(userCopy.skills[2]).toBe(90)
});

test('remove js book', () => {
	let user: UserWithLaptopType & UserWithBooksType= {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react'],
	};

	const userCopy = removeBook(user, 'js')

	expect(user).not.toBe(userCopy);
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).not.toBe(userCopy.books)
	expect(userCopy.books[2]).toBe('react')
});

test('update company', () => {
	let user: UserWithLaptopType & WidthCompaniesType = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
	};

	const userCopy = updateCompany(user, 1, 'EPAM') as UserWithLaptopType & WidthCompaniesType

	expect(user).not.toBe(userCopy);
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.companies).not.toBe(userCopy.companies)
	expect(userCopy.companies[0].title).toBe('EPAM')
});

test('update company', () => {
	let companies = {
		'Dimych' : [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
		'Artem' : [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
	}

	const copy = updateCompany2(companies, 'Dimych', 1, 'EPAM')

	expect(copy['Dimych']).not.toBe(companies['Dimych'])
	expect(copy['Artem']).toBe(companies['Artem'])
	expect(copy['Dimych'][0].title).toBe('EPAM')
});