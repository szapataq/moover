/* eslint-disable no-unused-expressions */
<template>
  <div>
    <section class="portada-img">
      <h1>Servicio de mensajería </h1>
      <p>Realiza entregas locales en menos de 90 minutos desde tu computadora o App, cotiza tus servicios directo en la plataforma. Sin tarifas dinámicas: pagas lo marcado en la cotización. Calculamos la mejor ruta de entrega para que pagues menos. ¡Estamos revolucionando la mensajería express!</p>
      <NuxtLink to="/askMoove" class="button">
        Realiza tu envio aquí
      </NuxtLink>
      <span>o</span>
      <NuxtLink class="register" to="/register">
        Registrate aquí
      </NuxtLink>
    </section>
    <Card />
  </div>
</template>
<script>
import Card from '~/components/Card'
export default {
  components: {
    Card
  },
  head () {
    return {
      title: 'Moover'
    }
  }

}
</script>
<style scoped>
  .portada-img{
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    height: 80vh;
    background-image:    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('~assets/img/portada.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  h1 {
    margin-top: 5rem;
    text-align: center;
    color: var(--primary-color);
  }

  .button[disabled] {
    cursor: default;
    opacity: 0.5;
    cursor: not-allowed;
  }
  .button {
    background: var(--primary-color);
    padding: 0.75rem 1.5rem;
    margin: 1rem 0.5rem 2rem 0.5rem;
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
    text-decoration: none;
    max-width: 15rem;
    min-width: 10rem;
  }
  p{
    color: #ffff;
    font-size: 12px;
    margin: 2rem;
    max-width: 30rem;
  }
  span{
    color: #fff;
  }
  .register{
    padding-top: 12px;
    color: var(--primary-color);
    text-decoration: none;
  }
</style>
