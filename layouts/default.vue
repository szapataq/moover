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
        position: relative;
        /* display: grid;
        grid-template: auto 1fr auto / 1fr; */
    }
    .app-content{
        min-height: 100vh;
        /* padding: 24px; */
        /* display: grid; */
        /* align-items: center; */
        justify-items: center;
    }
</style>
