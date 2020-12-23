<template>
  <div class="container-contact">
    <h2>Dejanos tus datos y nos contactaremos contigo</h2>
    <section>
      <img src="" alt="">
    </section>
    <section class="container-form">
      <form @submit.prevent>
        <label for="">Nombre de la empresa <span> *</span></label>
        <input id="username" v-model="user.nameBussines" type="text">
        <label for="">Nombre<span> *</span></label>
        <input id="username" v-model="user.nameBussines" type="text">
        <label for="">Apellido<span> *</span></label>
        <input id="username" v-model="user.surname" type="text">
        <label for="username">Correo<span> *</span></label>
        <input id="password" v-model="user.email" type="text">
        <label for="username">Numero de teléfono<span> *</span></label>
        <input id="password" v-model="user.numMobil" type="text">
        <label for="username">Cantidad de paquetes al mes<span> *</span></label>
        <input id="password" v-model="user.cantEnvMonth" type="text">
        <label for="username">Informacion del producto a transportar<span> *</span></label>
        <input id="password" v-model="user.infoProduct" type="text">
        <NuxtLink to="/" class="button">
          Enviar
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
  .container-contact{
    display: grid;
    min-width: 320px;
    max-width: 40%;
    margin:0px auto;
  }
  h2 {
    text-align: center;
    margin: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
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
