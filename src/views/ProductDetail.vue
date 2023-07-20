<script>
  import HeaderNav from "../components/HeaderNav.vue";
  import BottomFooter from "../components/BottomFooter.vue";
  import Scrollbar from 'smooth-scrollbar';

  export default {
    data(){
      return{
        prev_project: '',
        next_project: '',
        prev: '',
        next: '',
        nav_color: true,
      }
    },
    components: {
      HeaderNav,
      BottomFooter
    },
    mounted() {
      Scrollbar.init(document.querySelector('#mainScroll'), {speed:0.7});
      this.projectRoutes();
    },
    methods: {
      projectRoutes() {
        if(this.$route.path == '/project/detail/pikavue'){
          this.prev = '목록으로'
          this.next = '다음 프로젝트'
          this.prev_project = '/project'
          this.next_project = '/project/detail/platform'
        }
        else if(this.$route.path == '/project/detail/platform'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/pikavue'
          this.next_project = '/project/detail/play'
        }
        else if(this.$route.path == '/project/detail/play'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/platform'
          this.next_project = '/project/detail/enhancer'
        }
        else if(this.$route.path == '/project/detail/enhancer'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/play'
          this.next_project = '/project/detail/sdk'
        }
        else if(this.$route.path == '/project/detail/sdk'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/enhancer'
          this.next_project = '/project/detail/ai'
        }
        else if(this.$route.path == '/project/detail/ai'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/sdk'
          this.next_project = '/project/detail/image'
        }
        else if(this.$route.path == '/project/detail/image'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/ai'
          this.next_project = '/project/detail/video'
        }
        else if(this.$route.path == '/project/detail/video'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/image'
          this.next_project = '/project/detail/live'
        }
        else if(this.$route.path == '/project/detail/live'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/video'
          this.next_project = '/project/detail/vr'
        }
        else if(this.$route.path == '/project/detail/vr'){
          this.prev = '이전 프로젝트'
          this.next = '다음 프로젝트'
          this.prev_project = '/project/detail/live'
          this.next_project = '/project/detail/remote'
        }
        else if(this.$route.path == '/project/detail/remote'){
          this.prev_project = '/project/detail/vr'
          this.next_project = '/project'
          this.prev = '이전 프로젝트'
          this.next = '목록으로'
        }
      },
      header_color(color){
        this.nav_color = color
      }
    },
    watch: {
      $route(){
        this.projectRoutes();
      }
    }
  }
</script>

<template>
  <div>
    <HeaderNav :class="nav_color ? 'black' : ''"/>
    <div class="proCon" id="mainScroll">
      <RouterView @color="header_color" />
    </div>
    <div class="scrollbar-track scrollbar-track-y">
      <div class="scrollbar-thumb scrollbar-thumb-y"></div>
    </div>
    <div class="proBtns">
      <router-link :to="prev_project" class="abtn">{{ prev }}</router-link>
      <router-link :to="next_project" class="abtn">{{ next }}</router-link>
    </div>
  </div>
</template>