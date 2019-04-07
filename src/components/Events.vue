<template>
    <div class="container">
      <h1>Events</h1>
      <div class="create-event">
        <label for="create-event">event details...</label>
        <input type="text" id="create-event" v-model="text" placeholder="Create an event" >
        <button v-on:click="createEvent">Save</button>
      </div>
      <hr>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="events-container">
        <div class="event"
          v-for="(event, index) in events"
          v-bind:item="event"
          v-bind:index="index"
          v-bind:key="event._id"
          v-on:dblclick="deleteEvent(event._id)"
        >
          {{ `${event.createdAt.getDate()}/${event.createdAt.getMonth()}/${event.createdAt.getFullYear()}` }}
          <p class="text"> {{event.text}} </p>
        </div>
      </div>
    </div>
</template>
<script>
import EventService from '../EventService'
export default {
  name: 'Event',
  data () {
    return {
      user: {
        name: ''
      },
      events: [],
      error: '',
      text: ''
    }
  },
  methods: {
    createEvent: async function () {
      await EventService.insertEvent(this.text)
      this.events = await EventService.getEvents()
    },
    deleteEvent: async function (id) {
      await EventService.deleteEvent(id)
      this.events = await EventService.getEvents()
    }
  },
  async created () {
    try {
      this.events = await EventService.getEvents()
    } catch (err) {
      this.error = err.message
    }
  }
}
</script>
