import {users} from './08.test';

export const usersObj = {
	'0' : 'Dimych',
	'1' : 'Natasha',
	'2' : 'Valera',
	'3' : 'Katya'
}

let user = {id: 100500, name: "Igor"}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
	{id: 101, name: 'Dimych'},
	{id: 3232312, name: 'Natasha'},
	{id: 1212, name: 'Valera'},
	{id: 1, name: 'Katya'}
]

usersArray.push(user)