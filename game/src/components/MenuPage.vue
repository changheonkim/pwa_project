<template>
	<div>
		<div class="menu-page">
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickKorean()">
					<span class="menu-text">한식</span>
				</div></router-link
			>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickChina()">
					<span class="menu-text">중식</span>
				</div></router-link
			>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickWestern()">
					<span class="menu-text">양식</span>
				</div></router-link
			>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickJapen()">
					<span class="menu-text">일식</span>
				</div></router-link
			>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickAsian()">
					<span class="menu-text">아시안</span>
				</div></router-link
			>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickNight()">
					<span class="menu-text">야식</span>
				</div>
			</router-link>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickHaejang()">
					<span class="menu-text">해장</span>
				</div>
			</router-link>
			<router-link to="/list"
				><div class="menu-select" v-on:click="ClickFresh()">
					<span class="menu-text">프레쉬</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
		};
	},
	methods: {
		ClickKorean: function () {
			this.$store.state.menu_name = 'korean';
		},
		ClickChina: function () {
			this.$store.state.menu_name = 'china';
		},
		ClickJapen: function () {
			this.$store.state.menu_name = 'japen';
		},
		ClickWestern: function () {
			this.$store.state.menu_name = 'western';
		},
		ClickAsian: function () {
			this.$store.state.menu_name = 'asian';
		},
		ClickNight: function () {
			this.$store.state.menu_name = 'night';
		},
		ClickHaejang: function () {
			this.$store.state.menu_name = 'heajang';
		},
		ClickFresh: function () {
			this.$store.state.menu_name = 'fresh';
		},
	},
};
</script>

<style scoped>
@import url('@/assets/main.css');
</style>
