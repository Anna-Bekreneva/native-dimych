function icreaseAge(u: UserType) {
	u.age++;
}

type UserType = {
	name: string
	age: number
	address: {title: string}
}

test('reference type test', () => {
	let user = {
		name: 'Dimych',
		age: 32,
		address: {
			title: 'Minsk'
		}
	}

	icreaseAge(user)

	expect(user.age).toBe(33)

	const superman = user
	superman.age = 1000
	expect(user.age).toBe(1000)
})

test('array test', () => {
	let users = [
		{
			name: 'Dimych',
			age: 32
		},

		{
			name: 'Dimych',
			age: 32
		}
	]

	let admins = users

	admins.push({
		name: 'Bandyugan',
		age: 10
	})

	expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
	let usersCount = 100

	const adminsCount = usersCount
})

test('reference type test', () => {

	const address = {
		title: 'Minsk'
	}

	let user: UserType= {
		name: 'Dimych',
		age: 32,
		address: address
	}

	let user2: UserType = {
		name: 'Natasha',
		age: 30,
		address: address
	}

	const users = [ user, user2, {name: 'Misha', age: 4, address: address}]

	const admins = [user, user2]

	admins[0].name = 'Dmitry'

	user2.address.title = 'Kanary'

	expect(users[0].name).toBe('Dmitry')
	expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
	const letters = ['c', 'd', 'a', 'z', 'e']

	passportist(letters);

	// expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
	expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passportist(letters: any) {
	letters.sort()
}