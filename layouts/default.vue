<template>
  <div class="app-container">
    <Header />
    <SideNav />
    <div class="app-content">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SideNav from '~/components/SideNav'
export default {
  components: {
    Header,
    SideNav,
    Footer
  },
  computed: {
    isSidebar () {
      return this.$store.getters['nav/toggleSidebar']
    }
  },
  watch: {
    $route () {
      if (process.client && this.isSidebar && window.innerWidth < 768) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    }
  }
}
</script>

<style>
  :root {
    --primary-color: #00c58e;
  }
  html, body{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    margin: 0;
    height: 100%;
    width: 100%;
    }
    .app-container{
        height: 100%;
    }
    .app-content{
        min-height: 100vh;
        /* padding: 24px; */
        /* display: grid;
        align-items: center;
        justify-items: center;
        background: crimson; */
        width: 100%;
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
