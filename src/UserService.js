import axios from 'axios'

// const url = 'https://event-share-backend.herokuapp.com/api/'

class UserService {
  // Create Event
  static loginUser (email, password) {
    let data = {
      email: email,
      password: password
    }
    axios.post('https://event-share-backend.herokuapp.com/api/login', data)
      .then((response) => {
        console.log(response.status)
        console.log('Logged in')
        return true
      })
      .catch((errors) => {
        console.log('Cannot log in')
        return false
      })
  }
  static logoutUser () {
    axios.get('https://event-share-backend.herokuapp.com/api/logout')
    console.log('Logged out')
    return true
  }
}

export default UserService
