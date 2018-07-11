<template>
  <v-container id="home">
    <v-layout row wrap class="">
      <v-flex xs12 sm8 offset-sm2 class="pa-2" 
        v-for="meetup in meetups"
        :key="meetup.id">
        <v-card class="" light>
          <v-container class="fluid">
            <v-layout row>
              <v-flex xs5 class="">
                <v-card-media
                    :src="meetup.imageUrl"
                    height="100%"
                    contain
                    ></v-card-media>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div class="headline mb-2" >{{ meetup.title }}</div>
                  <div class="info--text">{{ meetup.date }}</div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :to="'/meetup/' +meetup.id" flat color="primary">View Meetup</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      computed: {
        meetups () {
          return this.$store.getters.featuredMeetups
        }
      }
    }
</script>

<style scoped>
    .flex > .card { flex: 1 1 auto; }
</style>
