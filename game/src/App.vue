<template>
	<div>
		<main-header />
		<router-view />
	</div>
</template>
<script>
import MainHeader from '@/components/common/MainHeader.vue';
export default {
	components: {
		MainHeader,
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
