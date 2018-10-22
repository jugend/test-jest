const axios = require('axios')

module.exports = {
  add: (num1, num2) => {
    return num1 + num2
  },
  checkValue: value => value,
  createUser: () => {
    const user = { firstName: 'Brad' }
    user['lastName'] = 'Traversy'
    return user
  },
  fetchUser: () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
  }
}
