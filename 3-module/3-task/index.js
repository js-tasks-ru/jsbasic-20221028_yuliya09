function camelize(str) {
    str = str.split('-')
    let out = [str[0]]
    str.slice(1).forEach(word => out.push(word[0].toUpperCase()+word.slice(1)))
  	return out.join('')
}
