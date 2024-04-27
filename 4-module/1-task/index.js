function makeFriendsList(friends) {
  // ваш код...
  const list = document.createElement('ul');
  list.innerHTML = friends.map((friend) => `<li>${friend.firstName} ${friend.lastName}</li>`).join('\n');
  return list;

}
