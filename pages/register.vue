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

        <NuxtLink to="/profile" class="button">
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
    /* min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; */
  }
  h2 {
      padding: 2.5rem 1rem 0.5rem 1rem;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    margin: 0.3rem 0.5rem;
    margin-bottom: 0.25rem;
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

  .button {
    margin-top: 0.5rem;
  }

  .button[disabled] {
    cursor: default;
    opacity: 0.5;
    cursor: not-allowed;
  }
  .button {
    background: var(--primary-color);
    padding: 0.75rem 1.5rem;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    letter-spacing: 0.5px;
    margin: 1rem 0.5rem 2rem 0.5rem;
    text-decoration: none;
  }
    span{
      color:rgb(240, 86, 86);
    }

  button:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    opacity: 0.8;
  }
</style>
