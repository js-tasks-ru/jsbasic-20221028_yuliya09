function showSalary(users, age) {
	users = users
		.filter(user => user.age <= age)
		.map(user => user.name + ', ' + user.balance)
	return users.join('\n')
}
