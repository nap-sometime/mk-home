import './set_public_path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import VueComposition from '@vue/composition-api'
import singleSpa from 'single-spa-vue'
import router from './router'
import app from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(VueComposition)

export const { bootstrap, mount, unmount } = singleSpa({
	Vue,
	appOptions: {
		router,
		render: (h: any) => h(app)
	}
})