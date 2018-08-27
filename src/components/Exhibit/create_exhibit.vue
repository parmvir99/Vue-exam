<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Create Exhibit</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onCreateExhibit">
          <v-text-field v-model="title" :rules="titleRules" label="Title" name="title" id="title" required></v-text-field>
          <v-text-field v-model="location" :rules="locationRules" label="Location" name="location" id="location" required></v-text-field>
          <!-- <v-text-field v-model="imageUrl" :rules="imageRules" label="Image" name="image" id="image-url" required></v-text-field> -->
          <v-btn raised @click="onPickFile" dark class="red-bg">Upload Image</v-btn>
          <input type="file" style="display:none;" ref="fileInput" accept="image/*" @change="onFilePicked">
         <image-upload class="mt-3" :imageUrl="imageUrl" @onResult="updateCropped"  :hidden="cropperDiv"></image-upload>
          <!-- <v-flex><img :src="imageUrl" height="200"></v-flex> -->
          <v-textarea  v-model="description" :rules="descriptionRules" :counter="50" label="Description" name="description" id="description" required></v-textarea>
          <v-layout row class="mb-3">
            <v-flex sm6>
              <v-menu :close-on-content-click="false" v-model="menu2" :nudge-right="40" lazy transition="scale-transition" full-width max-width="290px" min-width="290px">
                <v-text-field slot="activator" v-model="computedDateFormatted" label="Select Date" hint="MM/DD/YYYY format" persistent-hint  readonly></v-text-field>
                <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
              <v-flex sm6>
              <v-menu ref="menu" :close-on-content-click="false" v-model="menu3" :nudge-right="40" :return-value.sync="time" lazy transition="scale-transition" offset-y
              full-width max-width="290px" min-width="290px">
                <v-text-field slot="activator" v-model="time" label="Select Time" readonly></v-text-field>
                <v-time-picker v-if="menu3" v-model="time" @change="$refs.menu.save(time)"  format="24hr" no-title></v-time-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-btn :disabled="!valid" @submit="submit" type="submit" class="yellow-bg" large>submit</v-btn>
          <v-btn @click="clear" large class="grey lighten-1" dark>clear</v-btn>
        </v-form>
    </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: null,
      dateFormatted: null,
      time: null,
      valid: false,
      menu2: false,
      menu3: false,
      croppedImage: '',
      cropped: '',
      cropperDiv: true,
      titleRules: [
        v => !!v || 'Title is required'
      ],
      locationRules: [
        v => !!v || 'Location is required'
      ],
      imageRules: [
        v => !!v || 'Image is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => v.length >= 50 || 'Description must be more than 50 characters'
      ]
    }
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    imageUrl (val) {
      console.log(val)
      if (val) this.cropperDiv = false
      else this.cropperDiv = true
    }
  },
  methods: {
    updateCropped (url) {
      this.cropped = url
      this.croppedImage = this.dataURItoBlob(this.cropped)
      // console.log(this.croppedImage)
      console.log(this.file)
    },
    dataURItoBlob (dataURI, callback) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(',')[1])
      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length)
      var ia = new Uint8Array(ab)
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      // write the ArrayBuffer to a blob, and you're done
      this.bb = new Blob([ab], {type: mimeString})
      this.file = new File([ab], 'name', {type: mimeString})
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    submit () {
      if (this.$refs.form.validate()) {
        axios.post('/api/submit', {
          // title: this.title,
          // location: this.location,
          // imageUrl: this.imageUrl,
          // description: this.description
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    onCreateExhibit () {
      if (!this.valid) {
        return
      }
      if (!this.file) {
        return
      }
      const exhibitData = {
        title: this.title,
        location: this.location,
        image: this.file,
        // image: this.image,
        description: this.description,
        date: this.dateFormatted,
        time: this.time
      }
      // console.log(exhibitData)
      this.$store.dispatch('createExhibit', exhibitData)
      this.$router.push('/Exhibit/exhibit_list')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file.')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.imageRaw = files[0]
    }
  }
}
</script>
<style>
.cr-boundary{width:100% !important;}
.crop-result{
    background: #e2e2e2;
    padding: 20px;
    width: 100%;
    height: 300px;
    object-fit: contain;
    margin-bottom: 10px;
    margin-top:10px;
}
</style>
