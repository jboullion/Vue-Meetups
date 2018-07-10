import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import MeetupList from '@/components/Meetup/List'
import MeetupEdit from '@/components/Meetup/Edit'
import MeetupCreate from '@/components/Meetup/Create'
import Meetup from '@/components/Meetup/Meetup'

import Signin from '@/components/Auth/Signin'
import Signup from '@/components/Auth/Signup'

// import UserFriends from '@/components/User/Friends'
import UserProfile from '@/components/User/Profile'
// import UserEdit from '@/components/User/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: Signin
    },
    {
      path: '/user/profile',
      name: 'Profile',
      component: UserProfile
    },
    {
      path: '/meetup/list',
      name: 'List Meetups',
      component: MeetupList
    },
    {
      path: '/meetup/edit',
      name: 'Edit Meetup',
      component: MeetupEdit
    },
    {
      path: '/meetup/create',
      name: 'Create Meetup',
      component: MeetupCreate
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      component: Meetup
    }
  ]
})
