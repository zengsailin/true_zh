<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Breadcrumb></Breadcrumb>

    <Right></Right>
    <Top></Top> -->
    <div class="list">
      <button @click="huoqu">获取</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Right from '@/components/right.vue'
// import Top from '@/components/top.vue'
// import Breadcrumb from '@/components/Breadcrumb.vue'
// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // Right,
    // Top,
    // Breadcrumb
  },
  methods: {
    huoqu () {
      this.$axios.get('')
        .then((res) => {
          console.log(res)
        })
    }

  }
}
</script>
