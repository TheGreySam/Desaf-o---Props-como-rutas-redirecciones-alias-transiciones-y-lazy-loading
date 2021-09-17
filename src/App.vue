<template>
  <div>
    <Navbar />
    <transition name="fade" mode="out-in">
    <router-view>
      
      
    </router-view>
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
