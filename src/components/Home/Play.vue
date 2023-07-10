<script>
  export default {
    data() {
      return {
        menu1: true,
        menu2: false,
        menu3: false,
      }
    },
    mounted() {
      
    },
    methods: {
     
    }
  }
</script>

<template>
  <div class="content project">
    <div class="back"></div>
    <div class="text">
      <h2>GDFPlay app service</h2>
      <p>Live streaming</p>
    </div>
    <div class="img">
      <img src="../../assets/media/gdfplayweb.jpg" alt="">
    </div>
      <!-- <div>
        <div>
          <img class="pikavue1" src="../../assets/media/pikavue1.jpg" alt="">
          <img class="pikavue2" src="../../assets/media/pikavue2.jpg" alt="">
        </div>
        <img class="pikavue3" src="../../assets/media/pikavue3.jpg" alt="">
      </div> -->
      <!-- <ul>
        <li 
          :class="menu1 ? 'active' : ''"
          @click="pikavue"
        >
          <span>01</span> Pikavue
        </li>
        <li 
          :class="menu2 ? 'active' : ''"
          @click="gdfenhancer"
        >
          <span>02</span> GDF-Enhancer
        </li>
        <li 
          :class="menu3 ? 'active' : ''"
          @click="gdfplay"
        >
          <span>03</span> GDFPlay
        </li>
      </ul> -->
  </div>
</template>