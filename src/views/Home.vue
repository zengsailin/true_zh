<template>
  <div class="home">

    <!-- <Breadcrumb></Breadcrumb> -->

    <Right></Right>
    <Top></Top>

  </div>
</template>

<script>

import Right from '@/components/right.vue'
import Top from '@/components/top.vue'
// import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: 'Home',
  components: {

    Right,
    Top
    // Breadcrumb
  },
  methods: {

  }
}
</script>
