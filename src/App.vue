<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <h2 class="font-weight-medium">VUETIFY WEIGHT INPUT</h2>
          <div>Developed by: Ebrahim Maher</div>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="mt-12 mx-auto">
      <v-weight-input outlined v-model="weight"/>
      
    </v-main>
  </v-app>
</template>

<script>
import VWeightInput from './components/VWeightInput';

export default {
  name: 'App',

  components: {
    VWeightInput,
  },

  data: () => ({
    weight: 0,
  }),
};
</script>
<style lang="scss" >
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
body div{
    font-family: "open sans"!important;
}

</style>