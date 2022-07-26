

const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: "1",
  about: "Тут я рассказываю о себе...",
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU"
}


const users = {
	0: { name: "Сергей", lastname: "Козлов" },
	1: { name: "Владислава", lastname: "Сидорова" },
	2: { name: "Андрей", lastname: "Смирнов" },
	3: { name: "Юлия", lastname: "Петрова" },
	4: { name: "Ксения", lastname: "Иванова" },
	5: { name: "Кузьма", lastname: "Чижиков" },
	6: { name: "Дмитрий", lastname: "Петров" },
};




export function getUser(){
  return user;
}
export function getUsers() {
	return users;
}
