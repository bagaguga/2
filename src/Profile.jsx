import styles from "./Profile.module.css";

const Profile = (props) => {
	let userId = window.location.pathname.split("/")[2];
	let user = props.function(userId);
	//console.log(user);
	return (
		<div className="row">
			<div className="col-md-3">
				<img src={user.avatar} alt="" />
			</div>
			<div className="col-md-9">
				<h2>
					{user.name} {user.lastname}
				</h2>
				<p className={styles.about}>{user.about}</p>
				<p className={styles.user}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat mollitia est? Eum
					accusantium ad sed iure doloribus voluptatibus! Quam blanditiis architecto autem corrupti
					deleniti culpa explicabo minus, laboriosam hic!
				</p>
			</div>
		</div>
	);
};

export default Profile;
