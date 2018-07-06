<template>
  <v-app dark>
    <v-navigation-drawer 
      v-model="drawer"
      fixed
      >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon left>wc</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      dark 
      fixed
      :class="toolbarColor">
      <v-toolbar-side-icon 
        @click="drawer = !drawer"
        class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Cosplay Meetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon left>wc</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      toolbarColor: 'primary' //TODO: this should be user editable. User should be able to build their own theme out of the Vuetify colors
    }
  },
  name: 'Cosplay Meetup'
}
</script>
