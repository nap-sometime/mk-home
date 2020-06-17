<template>
	<div class="hello">
		<img src="@/assets/logo.png" width="120" />
		<h1>render from @mk-auth</h1>
		<button @click="toggle">show</button>
		<Greet v-if="showInnerComponent" />
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		showInnerComponent: false,
	}),
	components: {
		Greet: () => import('@/components/Greet.vue'),
	},
	methods: {
		toggle() {
			this.showInnerComponent = !this.showInnerComponent;
		},
	},
});
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.hello {
	padding: 0.5rem;
	background: blanchedalmond;
}
</style>
