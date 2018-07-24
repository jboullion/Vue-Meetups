<template>
    <v-container id="create-meetup">
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <h2>Create New Meetup</h2>
            </v-flex>
        </v-layout>
        <v-form ref="form" v-model="valid" lazy-validation class="mb-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 offset-sm3>
                
                    <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        :counter="titleLength"
                        label="Title"
                        hint="Hint text"
                        class="mb-2"
                        required
                        ></v-text-field>
                    <v-text-field
                        v-model="location"
                        :rules="locationRules"
                        label="Location"
                        hint="Hint text"
                        class="mb-2"
                        required
                        ></v-text-field>
                    
                    <!--
                    <v-autocomplete
                        v-model="state"
                        :items="states"
                        :rules="stateRules"
                        label="State"
                        hint="Hint text"
                        persistent-hint
                    ></v-autocomplete>
    -->
                    <v-text-field
                        v-model="imageUrl"
                        :rules="urlRules"
                        label="Image URL"
                        hint="Hint text"
                        class="mb-2"
                        required
                        ></v-text-field>
                    
                    <img v-show="imageUrl" :src="imageUrl" :alt="location" style="max-width: 100%;" />

                    <v-textarea
                        v-model="description"
                        label="Description"
                        hint="Hint text"
                        rows="6"
                        class="mb-2"
                        :counter="100"
                        required
                        no-resize
                        ></v-textarea>

                    <v-dialog
                        ref="dateDialog"
                        v-model="dateModal"
                        :return-value.sync="date"
                        persistent
                        lazy
                        full-width
                        width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="date"
                        label="Date"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker 
                            v-model="date"
                            scrollable
                            :min="todayDate"
                            :max="maxDate">
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="dateModal = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dateDialog.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <v-dialog
                        ref="timeDialog"
                        v-model="timeModal"
                        :return-value.sync="time"
                        persistent
                        lazy
                        full-width
                        width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="time"
                        label="Time"
                        prepend-icon="access_time"
                        readonly
                        ></v-text-field>
                        <v-time-picker
                        v-if="timeModal"
                        v-model="time"
                        >
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="timeModal = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.timeDialog.save(time)">OK</v-btn>
                        </v-time-picker>
                    </v-dialog>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 sm6 offset-sm3>        
                    <v-btn
                        :disabled="!valid"
                        @click="submit"
                        >
                        submit
                    </v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        valid: false,
        dateModal: false,
        timeModal: false,
        title: '',
        email: '',
        location: '',
        state: '',
        imageUrl: '',
        description: '',
        date: null,
        time: null,
        todayDate: moment().format('YYYY-MM-DD'),
        maxDate: moment().add(2, 'years').format('YYYY-MM-DD'),
        titleLength: 50,
        titleRules: [
          v => !!v || 'Title is required',
          v => v.length <= this.titleLength || 'Title must be less than ' + this.titleLength + ' characters'
        ],
        locationRules: [
          v => !!v || 'Location is required',
          v => v.length <= this.titleLength || 'location must be less than ' + this.titleLength + ' characters'
        ],
        stateRules: [
          v => !!v || 'State is required'
        ],
        urlRules: [
          v => !!v || 'Image Url is required',
          v => /https?:\/\/.+\..+/.test(v) || 'Url must must be valid'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        isEditing: false,
        model: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    },
    created () {
      // console.log(moment().format('L'))
    },
    computed: {
      submittableDateTime () {
        const date = new Date(this.date)
        return date
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          const meetupData = {
            title: this.title,
            location: this.location,
            imageUrl: this.imageUrl,
            description: this.description,
            date: this.submittableDateTime()
          }

          this.$store.dispatch('createMeetup', meetupData)
          .then((value) => {
            this.$router.push('/meetup/' + value)
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>