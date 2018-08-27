<template>
  <v-container fluid pa-0>
    <v-layout row wrap pa-0>
      <v-flex xs-12>
        <v-jumbotron color="grey lighten-2" dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex text-xs-center>
               <img :src="exhibit.imageUrl">
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
         <!-- <v-parallax :src="exhibit.imageUrl"></v-parallax> -->
         <div class="pl-2 mt-4 exhibit-details">
          <h1>{{exhibit.title}}</h1>
         <p><span>Date:</span> {{exhibit.date}} <span class="ml-2">Time:</span> {{exhibit.time}}<br><span>Location:</span> {{exhibit.location}}</p>
          <p class="mt-2">{{exhibit.description}}it</p>
         </div>
         <div class="text-xs-center">
            <v-btn large class="primary">Register</v-btn>
            <edit-exhibit-btn v-if="userIsCreator" :exhibit="exhibit"></edit-exhibit-btn>
         </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    exhibit () {
      return this.$store.getters.loadedExhibit(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.exhibit.creatorId
    }
  }
}
</script>

<style scoped>
.container{padding-right:0px !important; padding-left:0px !important;}
.exhibit-details span{font-weight: bold;}
</style>
