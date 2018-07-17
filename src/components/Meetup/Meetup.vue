<template>
  <v-container >
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="" class="" light>
          <v-card-title primary-title>
            <div class="headline">{{ meetup.title }}</div>
          </v-card-title>
                  
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
            ></v-card-media>      
          <v-card-text>
            <div class="info--text mb-2">{{ meetup.date }} - {{ meetup.location }}</div>
            <div>{{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        // console.log('Loaded Meetup ' + this.$store.getters.loadedMeetup(this.id))
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>