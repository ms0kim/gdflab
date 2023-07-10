<script>
  import HeaderMenu from './HeaderMenu.vue'

  export default {
    data() {
      return{
        menu: false,
      }
    },
    components: {
      HeaderMenu,
    }
  }
</script>

<template>
  <div class="headerNav">
    <ul>
      <li class="left">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/media/gdflogo.svg" alt="">
            <p>GDFLAB</p>
          </router-link>
        </div>
      </li>
      <li class="app" @click="menu = true">
        <i class="ri-apps-2-fill"></i>
      </li>
    </ul>
    <Transition name="menu">
      <div v-if="menu" class="menu">
        <div class="close" @click="menu = false">
          <i class="ri-close-line"></i>
        </div>
        <HeaderMenu />
      </div>
    </Transition>
    <Transition>
      <div v-if="menu" class="back" @click="menu = false"></div>
    </Transition>
  </div>
</template>