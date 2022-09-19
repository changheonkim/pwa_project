<template>
	<div>
		<div class="img-section" @click="showText()">
			<img src="@/assets/godong.png" class="godong-img" />
		</div>
		<div class="godong-page">
			<span v-if="!this.show">
				<span class="godong-font">
					마법의 소라고동을 클릭해서 <br />
					메뉴를 정해보세요!
				</span>
			</span>
			<span v-if="this.show" class="godong-font">
				오늘의 메뉴는 <br />
				<span class="godong-font-b"> "{{ menu_name }}" </span>
			</span>
			<br />
			<router-link to="/"><div class="back-g">뒤로가기</div> </router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			len: null,
			num: null,
			menu_name: '',
			show: false,
		};
	},
	methods: {
		showText() {
			this.show = true;
		},
		RetryMenu: function () {
			var random_num = Math.floor(Math.random() * 8);
			if (random_num == 0) {
				this.len = this.$store.state.korean.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.korean[this.num];
			}
			if (random_num == 1) {
				this.len = this.$store.state.japen.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.japen[this.num];
			}
			if (random_num == 2) {
				this.len = this.$store.state.western.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.western[this.num];
			}
			if (random_num == 3) {
				this.len = this.$store.state.china.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.china[this.num];
			}
			if (random_num == 4) {
				this.len = this.$store.state.asian.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.asian[this.num];
			}
			if (random_num == 5) {
				this.len = this.$store.state.night.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.night[this.num];
			}
			if (random_num == 6) {
				this.len = this.$store.state.heajang.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.heajang[this.num];
			}
			if (random_num == 7) {
				this.len = this.$store.state.fresh.length;
				this.num = Math.floor(Math.random() * this.len);
				this.menu_name = this.$store.state.fresh[this.num];
			}
		},
	},
	created() {
		this.RetryMenu();
	},
};
</script>

<style scoped>
@import url('@/assets/main.css');
</style>
