function showSalary(users, age) {
  // ваш код...
  let temp = '';
  users.forEach(user => {if(user.age <= age) temp+=user.name + ', ' + user.balance + '\n'})
  return temp.trim();
}
