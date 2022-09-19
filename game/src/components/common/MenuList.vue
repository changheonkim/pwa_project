<template>
	<div>
		<div class="menu_list">
			오늘 먹을 {{ this.menu }}은 <br />
			<span style="font-weight: bold">"{{ this.menu_name }}"</span>(이)가
			어때요!?
			<br />
			<img src="@/assets/list.png" alt="cat" class="menu-img" />
			<div v-on:click="RetryMenu()" class="retry">retry</div>
			<router-link to="/menu"><div class="back">뒤로가기</div></router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			len: null,
			num: null,
			menu: null,
			menu_name: null,
		};
	},
	methods: {
		RetryMenu: function () {
			if (this.menu == '한식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.korean[this.num];
			}
			if (this.menu == '일식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.japen[this.num];
			}
			if (this.menu == '중식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.china[this.num];
			}
			if (this.menu == '양식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.western[this.num];
			}
			if (this.menu == '야식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.night[this.num];
			}
			if (this.menu == '아시안 음식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.asian[this.num];
			}
			if (this.menu == '해장 음식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.heajang[this.num];
			}
			if (this.menu == '프레쉬한 음식') {
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.fresh[this.num];
			}
		},
	},
	created() {
		if (this.$store.state.menu_name == 'korean') {
			this.len = this.$store.state.korean.length;
			this.menu = '한식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.korean[this.num];
		}
		if (this.$store.state.menu_name == 'japen') {
			this.len = this.$store.state.japen.length;
			this.menu = '일식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.japen[this.num];
		}
		if (this.$store.state.menu_name == 'western') {
			this.len = this.$store.state.western.length;
			this.menu = '양식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.western[this.num];
		}
		if (this.$store.state.menu_name == 'china') {
			this.len = this.$store.state.china.length;
			this.menu = '중식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.china[this.num];
		}
		if (this.$store.state.menu_name == 'asian') {
			this.len = this.$store.state.asian.length;
			this.menu = '아시안 음식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.asian[this.num];
		}
		if (this.$store.state.menu_name == 'night') {
			this.len = this.$store.state.night.length;
			this.menu = '야식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.night[this.num];
		}
		if (this.$store.state.menu_name == 'heajang') {
			this.len = this.$store.state.heajang.length;
			this.menu = '해장 음식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.heajang[this.num];
		}
		if (this.$store.state.menu_name == 'fresh') {
			this.len = this.$store.state.fresh.length;
			this.menu = '프레쉬한 음식';
			this.num = Math.floor(Math.random() * this.len);
			this.menu_name = this.$store.state.fresh[this.num];
		}
	},
};
</script>

<style>
@import url('@/assets/main.css');
</style>
