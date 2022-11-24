function makeFriendsList(friends) {
 	let list = document.createElement('ul')
 	friends = friends
 				.map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`)
 				.join('')
 	list.insertAdjacentHTML('afterBegin', friends)
 	return list
}
