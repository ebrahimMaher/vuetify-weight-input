<template>
  <v-app>
     <v-main>
       <v-container fluid>
          <div class="text-center d-flex align-center justify-center">
            <v-weight-input v-model="weight" outlined />
          </div>
       </v-container>
     </v-main>
  </v-app>
</template>

<script>
import VWeightInput from './index'
export default {
  name: 'App',
  components: {
    VWeightInput
  },
  data(){
    return {
      weight: '0',
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  margin-top: 60px;

  height: 100vh;
  width: 100vw;
  text-align: center;
}
</style>
