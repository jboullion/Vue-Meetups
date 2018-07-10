<template>
    <v-container id="home">
        <v-layout row wrap class="">
            <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3 class="pa-2" >
                <v-card class="primary">
                    <v-container class="fluid">
                        <v-layout row>
                            <v-flex xs5 sm4 md3 lg2 class="">
                                <v-card-media
                                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                    height="125px"
                                    contain
                                    ></v-card-media>
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div class="headline mb-2" >Unlimited music now</div>
                                    <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat>View Meetup</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 class="pa-2">
                <v-card>
                    <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
                    ></v-card-media>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 class="pa-2">
                <v-card>
                    <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
                    ></v-card-media>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                   </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .flex > .card { flex: 1 1 auto; }
</style>
