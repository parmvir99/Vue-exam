<template>
  <div>
  <!-- Note that 'ref' is important here (value can be anything). read the description about `ref` below. -->
    <vue-croppie
      ref=croppieRef
      :enableOrientation="true"
      @result="result"
      @update="update">
    </vue-croppie>

    <!-- the result -->
      <v-flex class="text-xs-center">
        <v-btn  @click="rotate(-90)">Rotate Left</v-btn>
        <v-btn @click="cropViaEvent()">Crop</v-btn>
        <v-btn @click="rotate(90)">Rotate Right</v-btn>
      </v-flex>
       <img class="crop-result" :src="cropped">
  </div>
</template>

<script>

export default {
  props: {
    imageUrl: {
      required: true,
      type: String
    }
  },
  mounted () {
    // Upon mounting of the component, we accessed the .bind({...})
    // function to put an initial image on the canvas.
    this.$refs.croppieRef.bind({
      url: ''
    })
  },
  watch: {
    imageUrl (val) {
      this.$refs.croppieRef.bind({
        url: val
      })
    }
  },
  data () {
    return {
      cropped: null,
      images: null
    }
  },
  methods: {
    // // CALBACK USAGE
    // crop () {
    // // Here we are getting the result via callback function
    // // and set the result to this.cropped which is being
    // // used to display the result above.
    //   let options = {
    //     format: 'jpeg',
    //     square: true
    //   }
    //   this.$refs.croppieRef.result(options, (output) => {
    //     this.cropped = output
    //   // console.log(this.cropped)
    //   })
    // },
    // EVENT USAGE
    cropViaEvent () {
      this.$refs.croppieRef.result()
    },
    result (output) {
      this.cropped = output
      this.$emit('onResult', this.cropped)
    },
    update (val) {
      console.log(val)
    },
    rotate (rotationAngle) {
      // Rotates the image
      this.$refs.croppieRef.rotate(rotationAngle)
    }
  }
}
</script>
