<template>
  <v-container grid-list-md>
    <h2>Exhibit List</h2>
    <p class="mb-3">These are the available Exhibits you can visit and observe the amazing talent of photographers.</p>
    <v-layout row wrap>
      <v-flex md4 sm6 v-for="exhibit in exhibits" :key="exhibit.id">
        <v-card>
          <v-card-media :src="exhibit.imageUrl"  height="300px"></v-card-media>
          <v-card-title primary-title>
            <div class="exhibit-details">
              <h3 class="headline mb-0">{{exhibit.title}}</h3>
              <p><span>Date:</span> {{exhibit.date}} <span class="ml-2">Time:</span> {{exhibit.time}}<br><span>Location:</span> {{exhibit.location}}</p>
              <div>{{exhibit.description}}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" :to="'/Exhibit/exhibit_list/exhibit/' + exhibit.id">View Exhibit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    exhibits () {
      return this.$store.getters.loadedExhibits
    }
  }
}
</script>
<style>
.exhibit-details span{font-weight: bold;}
</style>
