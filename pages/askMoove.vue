<template>
  <div class="Nav-button">
    <NuxtLink to="/askMoove" class="button">
      Pedir un moove
    </NuxtLink>
    <NuxtLink to="/track" class="button">
      Rastrear
    </NuxtLink>
  </div>
</template>
<style scoped>
  .Nav-button {
      display: flex;
      min-width: 320px;
      justify-content: space-around;
  }
  .button[disabled] {
    cursor: default;
    opacity: 0.5;
    cursor: not-allowed;
  }
  .button {
    background: var(--primary-color);
    padding: 0.7rem;
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
    height: 1.5rem;
  }
</style>
