const players = [60,71,65,55,57,69];
const selected = players.filter(p => p > 60 )
console.log(selected);

const oddNumbers = players.filter(p => p % 2 === 1);
console.log(oddNumbers);

const friends = ["Asif", "sakil", "Roman", "Fahid", "Mitu"];
const evenFriends = friends.filter(friend => friend.length % 2 === 0);
console.log(evenFriends);