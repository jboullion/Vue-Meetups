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
              <v-carousel delimiter-icon="stop" >
                <v-carousel-item
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.src" >
                  <div class="title">{{ meetup.title }}</div>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {id: 1, src: 'http://via.placeholder.com/550x350', title: 'Madison, WI', caption: ''},
        {id: 2, src: 'http://via.placeholder.com/550x350', title: 'Chicago, IL', caption: ''},
        {id: 3, src: 'http://via.placeholder.com/550x350', title: 'Minneapolis, MN', caption: ''},
        {id: 4, src: 'http://via.placeholder.com/550x350', title: 'Ann Arbor, MI', caption: ''}
      ]
    }
  },
  name: 'Home'
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
 