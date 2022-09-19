import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Ads from 'vue-google-adsense';

Vue.use(require('vue-script2'));
Vue.use(Ads.Adsense); //디스플레이 광고
Vue.use(Ads.InArticleAdsense); //콘텐츠 내 자동 삽입 광고
Vue.use(Ads.InFeedAdsense); //인피드 광고

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');
