<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import BottomFooter from '../BottomFooter.vue';

  export default {
    data(){
      return{

      }
    },
    components: {
      HeaderNav,
      BottomNav,
      BottomFooter,
    }
  }
</script>

<template>
  <div>
    <HeaderNav />
    <BottomFooter />
  </div>
</template>