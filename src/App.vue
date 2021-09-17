<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>

<style>
/** Este estilo lo uso para empujar todo el contenido de la pagina hacia abajo.
    El proposito es que como el navbar es position-fixed, el contenido se pone "debajo" del navbar
    asi que si le agregamos un marginTop al body... empujamos todo el contenido hacia abajo el mismo alto del navbar.
    logrando asi que el contendio sea visible.
*/
body {
  margin-top: 57px;
}
</style>
