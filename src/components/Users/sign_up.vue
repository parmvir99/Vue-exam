<template>
    <v-container>
        <v-layout row wrap>
            <v-flex cs12 sm4 offset-sm4>
                <v-card>
                  <v-card-media height="200px">
                    <img src="@/assets/images/signup-image.jpg">
                  </v-card-media>
                  <v-card-text>
                        <v-flex v-if="error">
                          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                        </v-flex>
                       <v-form v-model="valid" @submit.prevent="onSignup">
                         <v-text-field v-model="email" :rules="emailRules" label="E-mail" id="email" type="email" required></v-text-field>
                         <v-text-field v-model="password" :rules="passwordRules" label="Password" id="password" type="password" required></v-text-field>
                         <v-text-field v-model="confirmPassword" :rules="[comparePassword]" label="Confirm Password" id="confirmPassword " type="password"></v-text-field>
                         <v-btn  class="mt-4 yellow-bg" type="submit" :disabled="loading" :loading="loading" large>Sign up<span slot="loader" class="custom-loader"><v-icon light>cached</v-icon></span></v-btn>
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
      confirmPassword: '',
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
    comparePassword () {
      return this.password !== this.confirmPassword ? 'Password do not match' : ''
    },
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
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
