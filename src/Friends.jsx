import { NavLink } from "react-router-dom";

const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				<NavLink to={"/profile/" + props.id}>
					{props.name} {props.lastname}
				</NavLink>
			</td>
		</tr>
	);
};

const Friends = (props) => {
	let users = props.function();
	console.log(users);
	let usersCount = Object.keys(users).length;
	let userRow = [];
	for (let i = 0; i < usersCount; i++) {
		userRow.push(
			<TableRow
				id={users[i].id}
				key={i}
				index={i}
				name={users[i].name}
				lastname={users[i].lastname}
			/>
		);
	}
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">№</th>
					<th scope="col">ФИО Друга</th>
				</tr>
			</thead>
			<tbody>{userRow}</tbody>
		</table>
	);
};

export default Friends;
