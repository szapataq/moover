<template>
  <section class="services">
    <div class="container-card card-comun">
      <img class="card-img" src="~/assets/img/card1.png" alt="Empresas">
      <div>
        <h3 class="title-card">
          Mensajeria para empresas
        </h3>
        <p>Ten control total de cada uno de tus envíos, con el servicio de mensajería para empresas. Desde tu Centro de Costos, administra saldo, cuentas y servicios solicitados.</p>
      </div>
    </div>
    <div class="container-card2 card-comun">
      <img class="card-img" src="~/assets/img/card2.png" alt="Ecomerce">
      <div>
        <h3 class="title-card">
          Envios Ecomerce
        </h3>
        <p>Lleva tu negocio al siguiente nivel: entregas de tu tienda el mismo día con el servicio de paquetería ecommerce.</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
    .card-img {
        width: 15rem;
        height: auto;
    }
    .container-card{
        background: rgb(255, 231, 251);
    }
    .container-card2{
        background: rgb(193, 238, 238);
    }
    .card-comun{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: rgb(102, 99, 99);
        padding: 2rem 1rem;
    }
    .title-card{
        color:var(--primary-color)
    }
</style>
