<template>
	<div id="mk-home">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
	name: 'App',
});
</script>

<style scoped>
#mk-home {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: brown;
}
</style>
