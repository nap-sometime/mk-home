<template>
	<div>
		<h1>Not Found ...............</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
	setup(props) {
		console.log('x ->', props);
		return {};
	},
});
</script>
