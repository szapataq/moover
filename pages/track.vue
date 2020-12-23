<template>
  <div id="app">
    <v-app id="inspire">
      <div class="Nav-button">
        <NuxtLink to="/askMoove">
          <v-btn
            color="primary"
            class="button"
          >
            Pedir un moover
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/track">
          <v-btn
            color="primary"
            class="button"
          >
            rastrear
          </v-btn>
        </NuxtLink>
      </div>
      <div class="container-searcher">
        <label for="username">SIGUE TUE ENVIO</label>
        <div class="search-input">
          <input id="username" type="search" placeholder="código de seguimiento">
          <img src="~/assets/img/search.png" alt="buscador">
        </div>
      </div>
      <div class="stepper">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
            >
              Sanitizacion del envio
            </v-stepper-step>

            <v-divider />

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
              En transito
            </v-stepper-step>

            <v-divider />

            <v-stepper-step step="3">
              Entregado
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                class="mb-12 pl-6"
                color="#00c58e"
                height="auto"
                max-width="500"
              >
                <v-card-title class="headline">
                  Moover se preocupa por tu salud
                </v-card-title>

                <v-card-subtitle>Tus envios han pasado por el proceso de desinfeccion y sanitizacion pronto llegaremos con tu envio</v-card-subtitle>
              </v-card>

              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                continuar
              </v-btn>

              <v-btn text>
                cancelar
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12 pl-2"
                color="#00c58e"
                height="auto"
                max-width="500"
              >
                <v-card-title class="headline">
                  Nos dirigimos al destino
                </v-card-title>

                <v-card-subtitle>Tu envio ya esta en camino, te recomendamos estar atento a tu telefono o correo electronico que proporcionaste</v-card-subtitle>
              </v-card>

              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12 pl-6"
                color="#00c58e"
                height="auto"
                max-width="500"
              >
                <v-card-title class="headline">
                  Gracias por tu preferencia
                </v-card-title>

                <v-card-subtitle>Moover nos preocupamos por ti, por eso dia a dia nos esforzamos en que tengas la mejor atencion</v-card-subtitle>
              </v-card>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-app>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)

export default {
  data () {
    return {
      e1: 1
    }
  }
}

</script>
<style scoped>
  .Nav-button {
      display: flex;
      min-width: 320px;
      justify-content: space-around;
  }
  .container-searcher{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search-input {
    font-size: 16px;
    border: 1px solid #dedede;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
  }
  input{
    box-shadow: none;
    border: none;
    margin: 0;
    text-align: center;

  }
  img{
    width: 30px;
    height: 30px;
  }
  label{
    padding: 10px;
  }
  .stepper{
    background: chocolate;
    margin: 1rem auto;
  }
</style>
