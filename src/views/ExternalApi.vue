<template>
  <div>
    <v-container>
    <v-row no-gutters>
      <v-col
        cols="12"
      >
      <h3 class="headline font-weight-bold mb-3">30px width</h3>
      <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage30px"
        :maxWidth="30"
        >
        </image-uploader>
        <v-btn @click="onUpload(image30Name, image30NewWidth, image30Base64)">Upload</v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
      >
      <h3 class="headline font-weight-bold mb-3">256px width</h3>
      <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage256px"
        :maxWidth="256"
        >
      </image-uploader>
      <v-btn @click="onUpload(image256Name, image256NewWidth, image256Base64)">Upload</v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
      >
      <h3 class="headline font-weight-bold mb-3">500px width</h3>
      <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage500px"
        :maxWidth="500"
        >
        </image-uploader>
        <v-btn @click="onUpload(image500Name, image500NewWidth, image500Base64)">Upload</v-btn>
      </v-col>
    </v-row>
    <br>
    </v-container>
    <div class="mb-5">
      <h1>External API</h1>
      <p>
        In order to see the images in the API, click the button, this button is doing a GET to "https://example-api-rob.herokuapp.com/images"
      </p>

      <button class="btn btn-primary mt-5" @click="callApi">GET</button>
    </div>

    <div class="result-block-container">
      <div :class="['result-block', executed ? 'show' : '']">
        <h6 class="muted">Result</h6>
        <pre v-highlightjs="JSON.stringify(apiMessage, null, 2)">
          <code class="js rounded"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Api",
  data() {
    let image30Name;
    let image30NewWidth;
    let image30Base64;
    let image256Name;
    let image256NewWidth;
    let image256Base64;
    let image500Name;
    let image500NewWidth;
    let image500Base64;
    return {
      apiMessage: null,
      executed: false
    };
  },
  methods: {
    async callApi() {
      const accessToken = await this.$auth.getAccessToken();

      try {
        const { data } = await this.$http.get("https://example-api-rob.herokuapp.com/images", {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        this.apiMessage = data;
        this.executed = true;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${
          e.response.status
        }: ${e.response.statusText}'`;
      }
    },
    setImage30px: function(output) {
      this.hasImage = true;
      this.image30Name= output.info.name;
      this.image30NewWidth = output.info.newWidth;
      this.image30Base64 = output.dataUrl;
    },
    setImage256px: function(output) {
      this.hasImage = true;
      this.image256Name= output.info.name;
      this.image256NewWidth = output.info.newWidth;
      this.image256Base64 = output.dataUrl;
    },
    setImage500px: function(output) {
      this.hasImage = true;
      this.image500Name= output.info.name;
      this.image500NewWidth = output.info.newWidth;
      this.image500Base64 = output.dataUrl;
    },
    async onUpload(imageName, imageNewWidth, imageBase64) {
      
      const accessToken = await this.$auth.getAccessToken();

      try {
        await this.$http.post("https://example-api-rob.herokuapp.com/images", {
        name: imageName+imageNewWidth+"px",
        base64: imageBase64
      }, {
        headers: {
        Authorization: `Bearer ${accessToken}`
        }
        });
        console(imageName+imageNewWidth);
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${
          e.response.status
        }: ${e.response.statusText}'`;
      }
    },
  }
};
</script>
