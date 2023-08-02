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
          <a href="/">
            <img src="../assets/media/gdflogo.svg" alt="">
            <p>GDFLAB</p>
          </a>
        </div>
      </li>
      <li class="right">
        <router-link to="/technology">
          Technology
        </router-link>
        <router-link to="/product">
          Product
        </router-link>
        <router-link to="/about">
          Pricing
        </router-link>
        <router-link to="/contact">
          Contact
        </router-link>
      </li>
      <li class="app">
        <i class="ri-menu-4-line" @click="menu = true"></i>
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