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
      <div>
        <v-container class="d-flex justify-space-around">
          <v-radio-group
            v-model="row"
            row
          >
            <v-radio
              label="Sobre"
              value="radio-1"
            />
            <v-radio
              label="Caja mediana"
              value="radio-2"
            />
            <v-radio
              label="Caja grande"
              value="radio-3"
            />
          </v-radio-group>
        </v-container>
      </div>
      <section class="form-moover">
        <form @submit.prevent>
          <label for="username">Nombre y apellidos<span> *</span></label>
          <input id="username" v-model="user.nameBussines" type="text">
          <label for="username">Correo electrónico<span> *</span></label>
          <input id="email" v-model="user.email" type="text">
          <label for="username">Numero de teléfono<span> *</span></label>
          <input id="numMobil" v-model="user.numMobil" type="text">
          <label for="username">Origen<span> *</span></label>
          <input id="origen" v-model="user.origen" type="text">
          <label for="username">Destino<span> *</span></label>
          <input id="destino" v-model="user.destino" type="text">
          <div class="Nav-button">
            <NuxtLink to="/askMoove">
              <v-btn
                color="secondary"
                class="button"
              >
                Limpiar
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/askMoove">
              <v-btn
                color="warning"
                class="button"
              >
                cotizar
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/askMoove">
              <v-btn
                color="primary"
                class="button"
              >
                enviar
              </v-btn>
            </NuxtLink>
          </div>
        </form>
      </section>
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
      user: {
        nameClient: '',
        email: '',
        numMobil: '',
        origen: '',
        destino: ''

      }
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
  .form-moover{
    display: grid;
    min-width: 320px;
    max-width: 40%;
    margin:0px auto;
  }

  form{
    display: flex;
    flex-direction: column;
  }
  input {
    font-size: 16px;
    padding: 0.75rem 1rem;
    margin: 0 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #dedede;
    border-radius: 0.5rem;
    box-shadow: none;
    box-sizing: border-box;
  }
    label {
    font-size: 14px;
    margin: 0.3rem 0.5rem;
    margin-bottom: 0.25rem;
  }
</style>
