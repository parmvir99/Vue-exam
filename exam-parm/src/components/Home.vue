<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router raised  dark class="purple darken-1" to="/Exhibit/exhibit_list">Exhibit List</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left  text-xs-center">
        <v-btn large router raised  dark class="orange darken-1" to="/Exhibit/create_exhibit">Create Exhibit</v-btn>
      </v-flex>
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
              <v-btn large @click="onLoadexhibit(exhibit.id)">View Exhibit</v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 class="text-md-center">
        <h3>Join our amazing EXHIBITS!</h3>
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
