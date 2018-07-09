<template>
  <v-app dark>
    <v-toolbar 
      dark 
      :class="toolbarColor">
      <v-toolbar-side-icon 
        @click="drawer = !drawer"
        class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Cosplay Meetups</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          v-for="item in menuItems"
          flat
          :key="item.icon"
          router 
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer 
      v-model="drawer"
      temporary
      fixed
      >
      <v-list>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.icon"
          router 
          :to="item.link">
          <v-list-tile-action>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      toolbarColor: 'primary', // TODO: this should be user editable. User should be able to build their own theme out of the Vuetify colors
      menuItems: [
        { icon: 'wc', title: 'View Meetups', link: '/meetups/list' },
        { icon: 'room', title: 'Create Meetup', link: '/meetups/create' },
        { icon: 'person', title: 'Profile', link: '/user/profile' },
        { icon: 'face', title: 'Sign Up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' }
      ]
    }
  },
  name: 'CosplayMeetup'
}
</script>
