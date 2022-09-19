<template>
	<div>
		<div class="main-page">
			<router-link to="/menu">
				<div class="top">
					<span class="main-text">
						<h3>랜덤 메뉴</h3>
						한식, 양식같은 종류 중 <br />
						메뉴를 고민한다면 <br />
						<span style="color: #000069">랜덤 메뉴로!</span>
					</span>
					<span
						><img src="@/assets/main.png" alt="cat" class="img-main-top"
					/></span>
				</div>
			</router-link>
			<router-link to="/godong">
				<div class="bottom">
					<span class="main-text-b">
						<h3>마법의 소라고동</h3>
						복잡한 메뉴 고르기, <br />
						운명에 맡기고 싶다면 <br />
						<span style="color: #000069">마법의 소라고동으로!</span>
					</span>
					<span
						><img
							src="@/assets/godong.png"
							alt="codong"
							class="img-main-bottom"
					/></span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('@/assets/main.css');
</style>
