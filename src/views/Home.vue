<template>
  <v-container v-if="!isAuthenticated">
    <h3 class="headline font-weight-bold mb-3">In order to upload an image, you need to be logged in.</h3>
    <p>This application allows to upload an image and it converts the image to a string format base64 after converting it, 
      this fronted send it to and API in Heroku "https://example-api-rob.herokuapp.com/images"</p>
  </v-container>
</template>

<script>
export default {
data() {
  return { };
  },
  methods: {  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
