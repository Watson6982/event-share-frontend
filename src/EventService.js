import axios from 'axios'

const url = 'api/'

class EventService {
  // Get Events
  static getEvents () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(
          data.map(event => ({
            ...event,
            createdAt: new Date(event.createdAt)
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }
  // Create Event
  static insertEvent (text) {
    return axios.post(url, {
      text: text
    })
  }
  // Delete Event
  static deleteEvent (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default EventService
