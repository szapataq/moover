<template>
  <div>
    <h2>¡Quiero ser cliente Moover!</h2>
    <section>
      <img src="" alt="">
    </section>
    <section>
      <form @submit.prevent>
        <label for="username">Nombre<span> *</span></label>
        <input id="username" v-model="user.nameBussines" type="text">
        <label for="username">Apellido<span> *</span></label>
        <input id="username" v-model="user.surname" type="text">
        <label for="username">Correo electrónico<span> *</span></label>
        <input id="password" v-model="user.email" type="text">
        <label for="username">Numero de teléfono<span> *</span></label>
        <input id="password" v-model="user.numMobil" type="text">

        <NuxtLink to="/" class="button">
          Registrar
        </NuxtLink>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  data () {
    return {
      user: {
        nameBussines: '',
        nameClient: '',
        surname: '',
        email: '',
        numMobil: '',
        cantEnvMonth: '',
        infoProduct: ''

      }
    }
  }
}
</script>
<style scoped>
  div {
    display: grid;
    min-width: 320px;
    max-width: 40%;
    margin:0px auto;
  }
  h2 {
      padding: 2.5rem 1rem 0.5rem 1rem;
    text-align: center;
  }
  form {
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
