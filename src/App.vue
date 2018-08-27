<template>
  <v-app>
    <v-navigation-drawer temporary app v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            {{item.title}}
          </v-list-tile-action>
        </v-list-tile>
         <v-list-tile v-if="userIsAuthenticated" @click="onLogOut">
          <v-list-tile-action>
            Log out
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app class="yellow-bg">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="ml-0">
        <router-link to="/" tag="span" style="cursor:pointer;">Photography Exhibits</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">{{item.title}}</v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogOut">Log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {title: 'Sign in', link: '/Users/sign_in'},
        {title: 'Sign up', link: '/Users/sign_up'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {title: 'Home', link: '/'},
          {title: 'Create Exhibit', link: '/Exhibit/create_exhibit'},
          {title: 'Exhibit List', link: '/Exhibit/exhibit_list'}
          // {title: 'Profile', link: '/Users/profile'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogOut () {
      this.$store.dispatch('logOut')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.yellow-bg{background:#FFB700 !important;}
.red-text{color:#EB0000 !important;}
.red-bg{background:#EB0000 !important;}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
