<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn large slot="activator" class="blue darken-1" dark>Edit Exhibit</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h2>Edit Exhibit</h2></v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
               <v-text-field v-model="editedTitle"  label="Title" name="title" id="title" required></v-text-field>
               <v-textarea v-model="editedDescription"  :counter="50" label="Description" name="description" id="description" required></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="onSaveChanges" flat dark class="green--text darken-1">Save</v-btn>
              <v-btn @click="editDialog = false" flat dark class="red--text darken-1">Cancel</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ['exhibit'],
  data () {
    return {
      editDialog: false,
      editedTitle: this.exhibit.title,
      editedDescription: this.exhibit.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateExhibitData', {
        id: this.exhibit.id,
        title: this.editedTitle,
        description: this.description
      })
    }
  }
}
</script>
