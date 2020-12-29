<template>
  <v-app>
    <v-app-bar
      app
      color="indigo darken-1"
      dark
    >
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <h2 class="font-weight-medium">VUETIFY WEIGHT INPUT</h2>
          <div>Developed by: Ebrahim Maher</div>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="mt-12">
      <v-container class="d-flex justify-center align-center flex-column text-center">

        <p class="text-center">
          you can also use keyboard to enter numbers, save, backspace or close
        </p>
        <v-weight-input outlined v-model="weight"/>
      </v-container>
      
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
body .v-application{
  background: #f8f9fb!important;
}
body div{
    font-family: "open sans"!important;
}

</style>