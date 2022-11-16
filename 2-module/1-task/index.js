function sumSalary(salaries) {
	let sum = 0
	for (prop in salaries){
		sum += isFinite(salaries[prop]) ? salaries[prop] : 0
	}
	return sum
}
