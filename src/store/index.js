import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {id: 1, imageUrl: 'http://via.placeholder.com/550x350', title: 'Gamehole Con', description: '', date: '2018-07-17', location: 'Madison, WI'},
      {id: 2, imageUrl: 'http://via.placeholder.com/550x350', title: 'Shycon', description: '', date: '2017-07-18', location: 'Chicago, IL'},
      {id: 3, imageUrl: 'http://via.placeholder.com/550x350', title: 'Minni Con', description: '', date: '2017-08-17', location: 'Minneapolis, MN'},
      {id: 4, imageUrl: 'http://via.placeholder.com/550x350', title: 'Go Blue', description: 'This is a basic desciption', date: '2017-07-01', location: 'Ann Arbor, MI'}
    ],
    user: {
      id: 'awesomeid',
      registeredMeetups: [ 1, 3 ]
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        location: payload.location,
        date: payload.date,
        id: this.state.loadedMeetups.length + 1
      }

      commit('createMeetup', meetup)

      return meetup.id
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((a, b) => {
        return a.date > b.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          // console.log('meetup.id ' + meetup.id)
          return meetup.id === parseInt(meetupId)
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    }
  }
})
