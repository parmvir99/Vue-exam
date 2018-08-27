<template>
  <v-dialog width="300px" persistent v-model="registerDialog">
    <v-btn accent large slot="activator" dark class="red darken-1">{{ userIsRegistered ? 'Unregister' : 'Register' }}</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title v-if="userIsRegistered"><h2>Unregister from Exhibit?</h2></v-card-title>
            <v-card-title v-else><h2>Register for Exhibit?</h2></v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              You can always chanage your decision whenever you want.
            </v-card-text>
            <v-card-actions>
              <v-btn @click="onAgree" flat class="green--text darken-1">Confirm</v-btn>
              <v-btn @click="registerDialog = false" flat class="red--text darken-1">Cancel</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ['exhibitId'],
  data () {
    return {
      registerDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredExhibit.findIndex(exhibitId => {
        return exhibitId === this.exhibitId
      }) >= 0
    }
  },
  methods: {
    onAgree () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromExhibit', this.exhibitId)
      } else {
        this.$store.dispatch('registerUserForExhibit', this.exhibitId)
      }
      this.registerDialog = false
    }
  }
}
</script>
