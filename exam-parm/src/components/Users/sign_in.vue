<template>
    <v-container>
        <v-layout row wrap>
            <v-flex cs12 sm6 offset-sm3>
                <v-card>
                  <v-card-text>
                      <v-flex v-if="error">
                          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                        </v-flex>
                       <v-form v-model="valid" @submit.prevent="onSignin">
                         <v-text-field v-model="email" :rules="emailRules" label="E-mail" id="email" type="email" required></v-text-field>
                         <v-text-field v-model="password" :rules="passwordRules" label="Password" id="password" type="password" required></v-text-field>
                          <v-btn  class="mt-4" type="submit" :disabled="loading" :loading="loading">Sign in<span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span></v-btn>
                      </v-form>
                  </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
