const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: "1",
	about: "Тут я рассказываю о себе, своих увлечениях и тд.",
	avatar:
		"https://th.bing.com/th?q=User+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=ru-RU&cc=RU&setlang=en&adlt=moderate&t=1&mw=247",
};

// const users = {
// 	0: { name: "Сергей", lastname: "Миронов", id: 4 },
// 	1: { name: "Владислава", lastname: "Кабанова", id: 7 },
// 	2: { name: "Андрей", lastname: "Бородин", id: 9 },
// 	3: { name: "Юлия", lastname: "Смирнова", id: 2 },
// 	4: { name: "Ксения", lastname: "Иванова", id: 12 },
// 	5: { name: "Кузьма", lastname: "Чижиков", id: 18 },
// 	6: { name: "Марина", lastname: "Петрова", id: 3 },
// };
let users = {};

export function getUser(userId) {
	for (let i = 0; i < Object.keys(users).length; i++) {
		if (users[i].id == userId) return users[i];
	}
	return user;
}
export async function getUsers() {
	let response = await fetch("http://darnell.p-host.in/getUsers");
	users = await response.json();
	//console.log(users);
	return users;
}
