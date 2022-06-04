<template>
  <div id="app">	
	<!-- 路由出口组件 -->
	<router-view/>
  </div>
  
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>

</style>
