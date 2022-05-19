<template>
  <TheNavbar></TheNavbar>
  <div class="container">
		<AppMessage></AppMessage>
    <router-view></router-view>
  </div>
	<TheSidebar></TheSidebar>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheSidebar from '@/components/TheSidebar'

export default {
  components: {
    TheNavbar,
		TheSidebar
  }
}
</script>

<style>

</style>