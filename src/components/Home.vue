<template>
    <v-container id="home">
        <v-layout row wrap class="text-xs-center mt-2 mb-4">
            <v-flex xs12 sm6>
              <v-btn large router to="/meetup/list" class="primary">View Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6>
              <v-btn large router to="/meetup/create" class="info">Create Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="text-md-center" mb-4>
            <v-flex xs12>
              <v-carousel delimiter-icon="stop" style="cursor: pointer;">
                <v-carousel-item
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.imageUrl"
                  @click.native="onLoadMeetup(meetup.id)">
                  <!-- router 
                  :to="'/meetup/' + meetup.id" -->
                  <div class="title">{{ meetup.title + ' ' + meetup.id }}</div>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetup/' + id)
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    top: 0;
    padding: 20px;
    text-align: center;
    background-color: rgba(0,0,0,.5);
    width: 100%;
  }
</style>
 