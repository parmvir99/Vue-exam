<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <!-- <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router raised  dark class="purple darken-1" to="/Exhibit/exhibit_list">Exhibit List</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left  text-xs-center">
        <v-btn large router raised  dark class="orange darken-1" to="/Exhibit/create_exhibit">Create Exhibit</v-btn>
      </v-flex> -->
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular indeterminate color="purple" v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs-12>
        <v-carousel>
          <v-carousel-item v-for="exhibit in exhibits" :key="exhibit.id" :src="exhibit.imageUrl">
            <div class="exhibit-title-and-button">
              <h2>{{ exhibit.title }}</h2>
              <v-btn large @click="onLoadexhibit(exhibit.id)" class="yellow-bg">View Exhibit</v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
     <v-layout row wrap class="mt-4">
      <v-flex xs12 class="text-sm-center">
        <h2 class="red-text">Hello! Welcome to the Photography Exhibits!</h2>
        <p>Here you can View and register for the amazing exhibits that are hosted by the amazing Photography collectors!<br> not just that but you can also host your own exhibit!</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 class="text-sm-center">
        <h3>Check out some of our exhibits</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap >
      <v-flex lg4 md4 sm6 v-for="exhibit in exhibits" :key="exhibit, id">
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
      <v-flex class="text-xs-center">
        <v-btn large class="yellow-bg" :to="'/Exhibit/exhibit_list/'">View All Exhibits</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    exhibits () {
      return this.$store.getters.featuredExhibits
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onLoadexhibit (id) {
      this.$router.push('/Exhibit/exhibit_list/exhibit/' + id)
    }
  }
}
</script>
<style scoped>
.exhibit-title-and-button{
  position: absolute; bottom:70px; color:#fff; font-size:25px; font-weight: bold; left:20px;
  text-shadow: -1px 1px #000000; letter-spacing:2px; text-align:center; right:0; left:0;
  }
</style>
