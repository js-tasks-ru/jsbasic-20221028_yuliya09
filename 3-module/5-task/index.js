function getMinMax(str) {
	str = str.split(' ').filter(elem => isFinite(elem))
	let minMax = {
		'min': Math.min(...str), 
		'max': Math.max(...str)
	}
	return minMax
}
