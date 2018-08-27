<template>
  <v-dialog  persistent v-model="registerDialog">
    <v-btn large slot="activator">{{userIsRegistered ? 'Unregister' : 'Register'}}</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-title v-if="userIsRegistered">Unregister from Exhibit?</v-title>
            <v-title v-else>Register for Exhibit?</v-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              You can always chanage your decision whenever you want.
            </v-card-text>
            <v-card-actions>
              <v-btn @click="onAgree">Confirm</v-btn>
              <v-btn @click="registerDialog = false">Cancel</v-btn>
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
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredExhibits.findIndex(exhibitId => {
        return exhibitId === this.exhibitId
      })
    }
  }
}
</script>
